<template>
  <div class="card">
    <div class="card-body">
      <div class="mb-4" v-if="state.current_session.preview_song_id !== null">
        <h3 style="padding-left: 8px">{{ state.current_preview.preview_song.name }}</h3>
      </div>

      <div v-if="!state.current_session.songs.length" class="d-flex justify-content-center">
        <div>Začněte tím, že do promítání přidáte první píseň.</div>
      </div>

      <div style="white-space: pre-line"
           v-for="(section, key) in state.current_preview.preview_song.sections" v-if="state.current_session.songs.length">

        <div v-if="state.current_preview.section_id === key && state.current_session.song_id === state.current_session.preview_song_id "
             class="section section-highlighted">
          <span class="highlighted">{{ section }}</span>
        </div>

        <div v-else
             class="section"
             @click="projectSection(key)">
          <span>{{ section }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import state from "../state";
import axios from "axios";

export default {
  name: "song",

  data: () => {
    return {
      state: state
    }
  },

  methods: {

    projectSection(key) {
      this.loadSectionOfCurrentSong(key)
    },

    loadSectionOfCurrentSong(section) {
      console.debug("Go to section " + section)
      //console.debug("Section debug:", this.state.current_preview.song.sections[section])

      // Set preview song as currently projected
      this.state.current_session.song_id = this.state.current_session.preview_song_id
      this.state.current_preview.song = this.state.current_preview.preview_song

      // Choose section
      this.state.current_preview.section_id = section
      this.state.current_preview.section_phrase = this.state.current_preview.song.sections[section]
    },
  }
}
</script>

<style scoped>

.section {
  padding:      13px;
  padding-left: 8px;
  transition:   0.3s background-color, color;
}


.section-highlighted {
  background:    #718da421;
  border-radius: 6px;

  color:         #1164ce;
}

</style>
