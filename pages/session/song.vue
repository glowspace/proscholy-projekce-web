<template>
  <div class="card">
    <div class="card-body">
      <div class="mb-3">
        <h3>{{ state.current_preview.name }}</h3>
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
</template>

<script>

import state from "../state";

export default {
  name: "song",

  data: () => {
    return {
      state: state
    }
  }
}
</script>

<style scoped>

</style>
