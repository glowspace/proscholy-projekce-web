<template>
  <div class="container-fluid mt-3">
    <h3>Projekce ProScholy.cz</h3>

    <p>Přihlášený uživatel: Michael Dojčár</p>

    <div class="card">
      <div class="card-body">
        <p>Vítejte v systému pro hudební projekci ProScholy.cz</p>
        <p>Mód: <b class="text-success">{{ state.online_state }}</b> (offline mód je k dispozici)</p>
        <p>Poslední aktualizace databáze: 25.8. 2020 2:04 - <a href="#">aktualizovat písně nyní</a></p>

        <a class="btn btn-secondary">Vytvořit promítání</a>
        <a class="btn btn-secondary">Připojit se k existujícímu promítání</a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import state from './state'

export default {
  components: {
    state
  },

  data: ()=> {
    return {
      state: state
    }
  }
}
</script>

<style>

</style>

