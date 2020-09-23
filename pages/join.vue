<template>
  <div>
    <h3>Projekce ProScholy.cz</h3>

    <h4>Připojit se k existujícímu promítání</h4>

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
</template>

<script>
import axios from "axios";
import state from "./state";

export default {
  name: "join",

  data: () => {
    return {
      state: state,
      code: ''
    }
  },

  methods: {
    submit() {

      axios.get('http://localhost:8000/api/sessions/' + this.code)
        .then((response) => {
          this.state.current_session = response.data

          this.$router.replace({path: '/session'})
        })

        .catch(function (error) {
          console.log(error);
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
