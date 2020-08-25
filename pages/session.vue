<template>
  <div>
    <h3>Chvály 25.8.2020</h3>
    <p>Dolany u Olomouce, 25.8.2020 19:00</p>

    <hr>

    <div class="row">

      <div class="col-10">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <h3>Ať požehnán je Bůh</h3>
            </div>

            <div class="alert alert-warning">
              <p class="float-right">promítá se</p>

              <p>1. Ať požehnán je Bůh, <br>
                tam, kde je zem úrodná,<br>
                tam, kde Mira přebývá,<br>
                požehnán buď Pán!
              </p>
            </div>

            <p>2. Ať požehnán je Bůh, <br>
              tam, kde je zem úrodná,<br>
              tam, kde Mira přebývá,<br>
              požehnán buď Pán!
            </p>
          </div>
        </div>

      </div>

      <div class="col-2">
        <h4>Playlist</h4>

        <ul class="list-group mb-3">
          <li class="list-group-item">Ať požehnán je Bůh (zvoleno)</li>
          <li class="list-group-item">Hospodin je můj pastýř</li>
          <li class="list-group-item">Já rád Tě mám</li>
          <li class="list-group-item">Tobě patří chvála</li>
          <li class="list-group-item"
              @click="selectSong">Jen ty, Pane můj
          </li>
        </ul>

        <h4>Připojená zařízení</h4>

        <ul class="list-group mb-3">
          <li class="list-group-item">Michael notebook (já) - správce</li>
          <li class="list-group-item">Kostel plátno</li>
          <li class="list-group-item">Mira Š. mobil</li>
        </ul>

        <a class="btn btn-outline-secondary"
           v-b-modal.modal-share>Sdílet promítání</a>

        <b-modal id="modal-share"
                 title="Sdílet promítání">
          <h3>Kód pro sdílení</h3>
          <h1 style="font-size: 90px">
            4<span class="text-muted">-</span>2<span class="text-muted">-</span>3<span class="text-muted">-</span>8</h1>

          <p class="text-muted">Pomocí toho kódu se mohou ostatní zařízení připojit k tomuto promítání.</p>
        </b-modal>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "session",

  data: () => {
    return {
      data: null,
    }
  },

  mounted() {

  },

  methods: {
    selectSong() {

    }
  }
}
</script>

<style scoped>

</style>
