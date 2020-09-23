<template>
  <div>
    <a class="btn btn-outline-secondary"
       v-b-modal.modal-share>Sdílet promítání</a>

    <b-modal id="modal-share"
             title="Sdílet promítání">
      <h3>Kód pro sdílení</h3>
      <h1 style="font-size: 70px">
        <span>{{ state.current_session.code.toString()[0] }}</span><span class="text-muted">-</span>
        <span>{{ state.current_session.code.toString()[1] }}</span><span class="text-muted">-</span>
        <span>{{ state.current_session.code.toString()[2] }}</span><span class="text-muted">-</span>
        <span>{{ state.current_session.code.toString()[3] }}</span><span class="text-muted">-</span>
        <span>{{ state.current_session.code.toString()[4] }}</span></h1>

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
