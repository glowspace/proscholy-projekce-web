<template>
  <div>
    <navbar/>

    <div class="container-fluid mt-3">

      <div class="row">
        <div class="col-3">
          <session-playlist></session-playlist>
        </div>

        <div class="col-6">
          <song></song>
        </div>


        <div class="col-3">
          <project-preview></project-preview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import state from "./state";
import Song from './session/song'
import Navbar from "../components/Navbar";
import SessionPlaylist from "./index/SessionPlaylist";
import ProjectPreview from "./index/ProjectPreview";

export default {
  name: "session",
  components: {Navbar, SessionPlaylist, ProjectPreview, Song},
  data: () => {
    return {
      state: state,
    }
  },

  created() {
    window.addEventListener("keydown", this.keyPressed);
  },

  destroyed() {
    window.removeEventListener("keydown", this.keyPressed);
  },

  methods: {

    keyPressed(event) {
      if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(event.code) > -1) {
        event.preventDefault();
      }

      if (!this.state.current_session.songs) {
        return;
      }

      if (event.repeat) {
        return
      }

      if (event.code === 'ArrowDown') {
        this.nextSection()
      }
      if (event.code === 'ArrowUp') {
        this.previousSection()
      }
    },

    nextSection() {
      if (this.state.current_preview.song.sections[this.state.current_preview.section_id + 1]) {
        this.projectSection(this.state.current_preview.section_id + 1)
      }
    },

    previousSection() {
      if (this.state.current_preview.song.sections[this.state.current_preview.section_id - 1]) {
        this.projectSection(this.state.current_preview.section_id - 1)
      }
    },

    projectSection(section) {
      console.debug("Go to section " + section)
      //console.debug("Section debug:", this.state.current_preview.song.sections[section])

      // Set preview song as currently projected
      this.state.current_session.song_id = this.state.current_session.preview_song_id
      this.state.current_preview.song = this.state.current_preview.preview_song

      // Choose section
      this.state.current_preview.section_id = section
      this.state.current_preview.section_phrase = this.state.current_preview.song.sections[section]
      localStorage.setItem("section_phrase", this.state.current_preview.section_phrase)
    },
  }
}
</script>

<style scoped>

</style>
