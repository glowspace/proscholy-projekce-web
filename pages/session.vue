<template>
  <div>
    <h3>{{ state.current_session.name }}</h3>
    <p>{{ state.current_session.place }}, {{ state.current_session.date }}</p>

    <hr>

    <div class="row">

      <div class="col-10">
        <song/>

      </div>

      <div class="col-2">
        <playlist/>

        <devices/>

        <share/>

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

export default {
  name: "session",
  components: {Share, Devices, Song, Playlist},
  data: () => {
    return {
      state: state
    }
  },

  mounted() {
    Echo.channel('Session.1')
      .listen('SessionStatusUpdated', (e) => {
        console.log(e.order.name);
      });
  },

  methods: {
    selectSong() {

    }
  }
}
</script>

<style scoped>

</style>
