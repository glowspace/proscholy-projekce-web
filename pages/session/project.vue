<template>
  <div class="wrapper justify-content-center">
    <div class="justify-content-center align-self-center"
         style="white-space: pre-line">
      <span>{{ current_phrase }}</span>
    </div>

  </div>
</template>

<script>
import state from "../state";

export default {
  name: "project",

  data: () => {
    return {
      state: state,
    }
  },

  computed: {
    current_phrase() {
      let id = this.state.current_session.current_song_id
      let section_id = this.state.current_session.song_part_id

      let songs = this.state.current_session.songs;


      let song = songs.find(x => x.id === id);

      return song.sections[section_id]
    }
  }
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
  text-transform:   uppercase;
}
</style>
