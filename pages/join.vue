<template>
  <div class="container-fluid mt-3">
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

export default {
  name: "join",

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
