<template>
 <div>
    <h3>Projekce ProScholy.cz</h3>

    <div class="card">
      <div class="card-body">
        <p>Vítejte v systému projekce ProScholy.cz</p>

        <nuxt-link to="/create_session"
                   class="btn btn-primary">Promítat
        </nuxt-link>
        <nuxt-link to="/join" class="btn btn-success">Připojit se k promítání</nuxt-link>
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

