<template>
  <div class="container-fluid mt-3">

    <navbar/>

    <div>
      <p>Projekce ProScholy.cz je jednoduchá webová aplikace sloužící k promítání písní z křesťanské hudební databáze
        Regenschori.cz a <a href="//zpevnik.proscholy.cz">Zpěvníku ProScholy.cz</a>.</p>
    </div>

    <div class="card bg-light">
      <div class="card-body text-center p-5">
        <h4>K čemu aplikace slouží</h4>

        <p class="mt-4">1. promítání textu na plátně/obrazovce</p>
         <p> 2. synchronizované akordy a text pro
          zpěváky a muzikanty</p>
      </div>
    </div>

    <div class="card bg-light">
      <div class="card-body text-center p-5">
        <p>Začít promítat</p>

        <nuxt-link to="/create_session"
                   class="btn btn-primary">Vytvořit nové promítání
        </nuxt-link>
        <nuxt-link to="/join"
                   class="btn btn-success">Připojit se k existujícímu
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
