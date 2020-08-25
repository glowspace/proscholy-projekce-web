<template>
  <div>
    <a class="btn btn-outline-secondary"
       v-b-modal.modal-share>Sdílet promítání</a>

    <b-modal id="modal-share"
             title="Sdílet promítání">
      <h3>Kód pro sdílení</h3>
      <h1 style="font-size: 90px">
        {{ state.current_session.code.toString()[0] }}<span class="text-muted">-</span>
        {{ state.current_session.code.toString()[1] }}<span class="text-muted">-</span>
        {{ state.current_session.code.toString()[2] }}<span class="text-muted">-</span>
        {{ state.current_session.code.toString()[3] }}</h1>

      <p class="text-muted">Pomocí toho kódu se mohou ostatní zařízení připojit k tomuto promítání.</p>
    </b-modal>
  </div>
</template>

<script>
import state from "../state";

export default {
  name: "share",

  data: () => {
    return {
      state: state
    }
  }
}
</script>

<style scoped>

</style>
