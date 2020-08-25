<template>
  <div>
    <h4>Připojená zařízení</h4>

    <ul class="list-group mb-3">
      <li class="list-group-item" v-for="device in state.current_session.clients">{{ device.name }}</li>
    </ul>
  </div>
</template>

<script>
import state from "../state";

export default {
  name: "devices",

  data: () => {
    return {
      state: state
    }
  }
}
</script>

<style scoped>

</style>
