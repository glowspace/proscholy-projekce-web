<template>
  <div>
    <h4>Playlist</h4>

    <ul class="list-group mb-3">
      <li class="list-group-item"
          v-for="song in state.current_session.songs"
          @click="selectSong(song)">{{ song.name }}
      </li>
    </ul>

    <div class="card">
      <div class="card-body">
        <p>Nová píseň</p>
        <input v-model="song_id"
               class="form-control"
               placeholder="zadejte číslo písně"
               type="number">
        <a class="btn btn-secondary"
           @click="addSong">Přidat píseň</a>
      </div>
    </div>
  </div>
</template>

<script>
import state from "../state";
import axios from "axios";

export default {
  name: "playlist",

  data: () => {
    return {
      state: state,
      song_id: null
    }
  },

  methods: {
    selectSong(song) {
      this.state.current_preview.song = song
    },

    addSong() {
      axios.post('http://localhost:8000/api/songs', {
        session_id: this.state.current_session.id,
        song_id: this.song_id
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

</style>
