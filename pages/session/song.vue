<template>
  <div class="card">
    <div class="card-body">
      <div class="mb-3">
        <h3>{{ state.current_preview.name }}</h3>
        <a @click="presentSong">Promítat tento song</a>
      </div>

      <!--      <div class="alert alert-warning">-->
      <!--        <p class="float-right">promítá se</p>-->

      <!--        <p>1. Ať požehnán je Bůh, <br>-->
      <!--          tam, kde je zem úrodná,<br>-->
      <!--          tam, kde Mira přebývá,<br>-->
      <!--          požehnán buď Pán!-->
      <!--        </p>-->
      <!--      </div>-->

      <!--      <p>2. Ať požehnán je Bůh, <br>-->
      <!--        tam, kde je zem úrodná,<br>-->
      <!--        tam, kde Mira přebývá,<br>-->
      <!--        požehnán buď Pán!-->
      <!--      </p>-->

      <p>
        {{ state.current_preview.lyrics }}
      </p>
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
      this.state.current_session.current_song_id = this.state.current_preview.id
      this.state.current_session.song_part_id = this.state.current_preview.song_part_id

      axios.patch('http://localhost:8000/api/sessions/' + this.state.current_session.id, {
        current_song_id: this.state.current_preview.id,
        song_part_id: 1
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
