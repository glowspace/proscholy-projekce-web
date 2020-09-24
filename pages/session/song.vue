<template>
  <div class="card">
    <div class="card-body">
      <div class="mb-3">
        <h3>{{ state.current_preview.song.name }}</h3>

        <a @click="presentSong"
           v-if="state.current_session.current_song_id !== state.current_preview.song.id">Promítat tento song</a>
      </div>

      <div style="white-space: pre-line"
           v-for="(section, key) in state.current_preview.song.sections">

        <div v-if="state.current_preview.section_id === key && state.current_preview.song.id === state.current_session.current_song_id "
             class="alert alert-warning">
          <div class="float-right font-italic">promítá se</div>
          <span class="highlighted">{{ section }}</span>
        </div>

        <div v-else
             class="alert "
             @click="selectSection(key)">
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
    presentSong() {
      this.state.current_preview.section_id = 0

      this.state.current_session.current_song_id = this.state.current_preview.id
      this.state.current_session.song_part_id = this.state.current_preview.song_part_id

      axios.patch('http://localhost:8000/api/sessions/' + this.state.current_session.id, {
        current_song_id: this.state.current_preview.song.id,
        song_part_id: 1
      })
        .then((response) => {

        })

        .catch(function (error) {
          console.log(error);
        });
    },

    selectSection(key) {
      this.state.current_preview.section_id = key

      axios.patch('http://localhost:8000/api/sessions/' + this.state.current_session.id, {
        current_song_id: this.state.current_preview.song.id,
        song_part_id: key
      })
        .then((response) => {

        })

        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>

.highlighted {
  font-size: 16px;
}

.alert {
  margin-bottom: 3px;
}

</style>
