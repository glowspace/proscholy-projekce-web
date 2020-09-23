<template>
  <div class="container-fluid mt-3">
    <h3>Nové promítání</h3>

    <label>Pojmenujte promítání</label>
    <input class="form-control"
           placeholder="název promítání"
           v-model="name">

    <a @click="submit"
       class="btn btn-primary">Vytvořit promítání
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "create_session",

  data: () => {
    return {
      name: '',
    }
  },

  methods: {

    submit() {

      axios.post('http://localhost:8000/api/sessions', {
        name: this.name
      })
        .then(function (response) {
          console.log(response);
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
