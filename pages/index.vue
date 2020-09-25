<template>
  <div class="container-fluid mt-3">
    <div>
      <h3>Projekce ProScholy.cz</h3>

      <p>Projekce ProScholy.cz je jednoduchá webová aplikace sloužící k promítání písní z křesťanské hudební databáze
        Regenschori.cz a <a href="//zpevnik.proscholy.cz">Zpěvníku ProScholy.cz</a>.</p>
    </div>

    <div>
      <h4>Kde se dá využít</h4>

      <p>Aplikace lze využít dvěma způsoby: 1. promítání textu na plátně/obrazovce,
        2. synchronizované akordy a text pro
        zpěváky a muzikanty</p>
    </div>

    <div class="card">
      <div class="card-body">
        <p>Vítejte v systému projekce ProScholy.cz</p>

        <nuxt-link to="/create_session"
                   class="btn btn-primary">Promítat
        </nuxt-link>
        <nuxt-link to="/join"
                   class="btn btn-success">Připojit se k promítání
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
