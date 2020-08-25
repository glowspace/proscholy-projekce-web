<template>
  <div class="container-fluid mt-3">
    <h3>Nové promítání</h3>

    <label>Pojmenujte promítání</label>
    <input class="form-control"
           v-model="name">

    <nuxt-link to="session"
               class="btn btn-primary">Vytvořit promítání
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "create_session",

  data: () => {
    return {
      name: 'nové promítání'
    }
  },
}
</script>

<style scoped>

</style>
