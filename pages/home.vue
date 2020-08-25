<template>
 <div>
    <h3>Projekce ProScholy.cz</h3>

    <p>Přihlášený uživatel: Michael Dojčár</p>

    <div class="card">
      <div class="card-body">
        <p>Vítejte v systému pro hudební projekci ProScholy.cz</p>
        <p>Mód: <b class="text-success">{{ state.online_state }}</b> (offline mód je k dispozici)</p>
        <p>Poslední aktualizace databáze: 25.8. 2020 2:04 - <a href="#">aktualizovat písně nyní</a></p>

        <nuxt-link to="/create_session"
                   class="btn btn-secondary">Vytvořit promítání
        </nuxt-link>
        <a class="btn btn-secondary">Připojit se k promítání</a>
      </div>
    </div>
  </div>
</template>

<script>
import state from './state'
import Peer from 'peerjs';

export default {
  components: {
    state
  },

  data: () => {
    return {
      state: state,
      peer: null,
      msg: null
    }
  },

  mounted() {
    this.peer = new Peer('uni');
  },

  methods: {
    send() {
      // Send
      console.log('Sending.');

      const conn = this.peer.connect('unid');
      conn.on('open', () => {
        conn.send(this.msg);
      });
    }
  }
}
</script>

<style>

</style>

