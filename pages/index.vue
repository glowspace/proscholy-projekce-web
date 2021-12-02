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
import Playlist from "./session/playlist";
import Song from './session/song'
import Devices from "./session/devices";
import Share from "./session/share";
import Project from "./project";
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

      if (event.repeat) {
        return
      }

      if (event.code === 'ArrowRight') {
        this.nextSection()
      }
      if (event.code === 'ArrowLeft') {
        this.previousSection()
      }
      if (event.code === 'ArrowDown') {
        this.nextSection()
      }
      if (event.code === 'ArrowUp') {
        this.previousSection()
      }

      if (event.code === 'Escape') {
        this.$router.push({
          path: '/'
        })
      }
    },

    loadSongAsPreview(id) {
      this.state.current_preview.preview_song = this.state.current_session.songs[id]
      this.state.current_session.preview_song_id = id

      console.debug("Switching song to #" + id + " " + this.state.current_preview.song.name)
    },

    nextSection() {
      if (this.state.current_preview.song.sections[this.state.current_preview.section_id + 1]) {
        this.loadSectionOfCurrentSong(this.state.current_preview.section_id + 1)
        return
      }
    },

    previousSection() {
      if (this.state.current_preview.song.sections[this.state.current_preview.section_id - 1]) {
        this.loadSectionOfCurrentSong(this.state.current_preview.section_id - 1)
        return
      }
    },

    loadSectionOfCurrentSong(section) {
      console.debug("Go to section " + section)
      //console.debug("Section debug:", this.state.current_preview.song.sections[section])

      this.state.current_preview.section_id = section
      this.state.current_preview.section_phrase = this.state.current_preview.song.sections[section]
    },

    loadSong(id) {
      this.state.current_preview.song = this.state.current_session.songs[id]
      this.state.current_session.song_id = id

      console.debug("Switching song to #" + id + " " + this.state.current_preview.song.name)

      this.loadSectionOfCurrentSong(0)
    },

    loadSongOnLastSection(id) {
      this.loadSong(id)
      this.loadSectionOfCurrentSong(this.state.current_preview.song.sections.length - 1)
    },
  }
}
</script>

<style scoped>

</style>
