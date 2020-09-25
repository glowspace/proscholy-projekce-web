<template>
  <div class="container-fluid">

    <h3>Projekce ProScholy.cz</h3>

    <h4>Připojit se k existujícímu promítání</h4>

    <div v-if="loading">
      načítání promítání...
    </div>

    <div v-else>
      <div class="card">
        Znám kód

        <input type="text"
               v-model="code"
               maxlength="5">
      </div>

      <a to="session"
         class="btn btn-primary"
         @click="submit">Připojit se
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import state from "./state";
import Navbar from "~/components/Navbar";

export default {
  name: "join",
  components: {Navbar},
  data: () => {
    return {
      state: state,
      code: '',
      loading: false
    }
  },

  methods: {
    submit() {

      this.loading = true;

      axios.get('http://localhost:8000/api/sessions/' + this.code)
        .then((response) => {
          this.state.current_session = response.data
          // this.state.current_preview.song = this.state.current_session.songs.find(x => x.id === id);
          this.state.current_preview.section_id = this.state.current_session.song_part_id;

          let song_id = this.state.current_session.current_song_id
          this.state.current_preview.song = this.state.current_session.songs.find(x => x.id === song_id);


          this.$router.replace({path: '/session'})
        })

        .catch(function (error) {
          console.log(error);

          this.loading = false;
        });

    }
  },

  watch: {
    code(value) {
      if (value.length === 5) {
        this.submit()
      }
    }
  }
}
</script>

<style scoped>

</style>
