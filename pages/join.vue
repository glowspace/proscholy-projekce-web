<template>
  <div>
    <h3>Projekce ProScholy.cz</h3>

    <h4>Připojit se k existujícímu promítání</h4>

    <div class="card">
      Znám kód

      <input type="text"
             maxlength="4">
    </div>

    <nuxt-link to="session"
               class="btn btn-primary">Připojit se
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "join"
}
</script>

<style scoped>

</style>
