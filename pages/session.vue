<template>
  <div>
    <div v-if="state.client.type === 0"
         class="container-fluid mt-3">
      <h3>{{ state.current_session.name }}</h3>
      <!--    <p>{{ state.current_session.place }}, {{ state.current_session.date }}</p>-->
      <p>Řídící pult promítání</p> <a @click="state.client.type = 1">projekce</a>

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

    <div v-if="state.client.type === 1">
      <project/>
    </div>
  </div>
</template>

<script>

import state from "./state";
import Playlist from "./session/playlist";
import Song from './session/song'
import Devices from "./session/devices";
import Share from "./session/share";
import Project from "./session/project";

export default {
  name: "session",
  components: {Project, Share, Devices, Song, Playlist},
  data: () => {
    return {
      state: state,
    }
  },

  mounted() {
    if (this.state.current_session.id === 0) {
      this.$router.replace({path: '/home'})
    }

    Echo.channel('Session.' + this.state.current_session.id)
      .listen('SessionStatusUpdated', (e) => {
        console.debug('Session data updated from WebSocket.')
        this.state.current_session = e.session
      });
  },

  methods: {}
}
</script>

<style scoped>

</style>
