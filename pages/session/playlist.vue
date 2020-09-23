<template>
  <div>
    <h4>Playlist</h4>

    <ul class="list-group mb-3">
      <li class="list-group-item"
          v-for="song in state.current_session.songs"
          @click="selectSong(song)">{{ song.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import state from "../state";

export default {
  name: "playlist",

  data: () => {
    return {
      state: state
    }
  },

  methods: {
    selectSong(song) {
        this.state.current_preview = song
    }
  }
}
</script>

<style scoped>

</style>
