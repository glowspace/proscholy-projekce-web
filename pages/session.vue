<template>
  <div>
    <h3>Chvály 25.8.2020</h3>
    <p>Dolany u Olomouce, 25.8.2020 19:00</p>

    <div class="row">
      <div class="col-2">
        <h4>Playlist</h4>

        <ul class="list-group">
          <li class="list-group-item">Cras justo odio (zvoleno)</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>

        <h4>Připojená zařízení</h4>

        <ul class="list-group">
          <li class="list-group-item">Michael notebook (já)</li>
          <li class="list-group-item">Plátno kostel</li>
          <li class="list-group-item">Mira Š.</li>

        </ul>

        <a class="btn btn-secondary">Sdílet promítání</a>

      </div>
    </div>

  </div>
</template>

<script>
import Peer from "peerjs";

export default {
  name: "session",

  data: () => {
    return {
      data: null,
    }
  },

  mounted() {
    this.peer = new Peer('unid');

    // Receive
    this.peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        this.data = data
      });
      conn.on('open', () => {
        conn.send(this.data);
      });
    });
  }
}
</script>

<style scoped>

</style>
