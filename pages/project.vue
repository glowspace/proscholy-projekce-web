<template>
  <div class="wrapper justify-content-center">
    <div class="justify-content-center align-self-center"
         style="white-space: pre-line">
      <span>{{ state.current_preview.section_phrase }}</span>
    </div>

  </div>
</template>

<script>
import state from "./state";

export default {
  name: "project",

  data: () => {
    return {
      state: state,
      current_phrase: "",
      timeout: false
    }
  },

  created() {
    window.addEventListener("keydown", this.keyPressed);
  },

  destroyed() {
    window.removeEventListener("keydown", this.keyPressed);
  },

  mounted() {

  },

  methods: {
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

    loadSectionOfCurrentSong(section) {
      console.debug("Go to section " + section)
      //console.debug("Section debug:", this.state.current_preview.song.sections[section])

      this.state.current_preview.section_id = section
      this.state.current_preview.section_phrase = this.state.current_preview.song.sections[section]
    },

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
      if (event.code === 'Escape') {
        this.$router.push({
          path: '/'
        })
      }
    },

    nextSection() {
      if (this.state.current_preview.song.sections[this.state.current_preview.section_id + 1]) {
        this.loadSectionOfCurrentSong(this.state.current_preview.section_id + 1)
        return
      }

      if (this.state.current_session.songs[this.state.current_session.song_id + 1]) {
        this.loadSong(this.state.current_session.song_id + 1)
      }
    },

    previousSection() {
      if (this.state.current_preview.song.sections[this.state.current_preview.section_id - 1]) {
        this.loadSectionOfCurrentSong(this.state.current_preview.section_id - 1)
        return
      }

      if (this.state.current_session.songs[this.state.current_session.song_id - 1]) {
        this.loadSongOnLastSection(this.state.current_session.song_id - 1)
      }
    },
  },

  computed: {}
}
</script>

<style scoped>

.wrapper {
  display:          flex;
  flex-direction:   column;

  height:           100vh;

  white-space:      pre-line;
  font-size:        4vw;
  font-weight:      bold;
  color:            white;

  background-image: url("~assets/bg1.jpg");
  text-shadow:      1px -1px 6px #000000c4;

  text-align:       center;

  font-family:      'Arial', Helvetica, sans-serif;
  /*-webkit-text-stroke: 2px black;*/
  /*text-transform:   uppercase;*/
}
</style>
