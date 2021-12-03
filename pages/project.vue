<template>
  <div class="wrapper justify-content-center">
    <div class="justify-content-center align-self-center"
         style="white-space: pre-line">
      <span>{{ current_phrase }}</span>
    </div>

  </div>
</template>

<script>
import state from "./state";

export default {
  name: "project",

  data: () => {
    return {
      state: state,
      current_phrase: "",
      timeout: false
    }
  },

  created() {
    window.addEventListener("storage", () => {
      this.current_phrase = localStorage.getItem('section_phrase')
    }, false);
  },

  mounted() {
    this.current_phrase = localStorage.getItem('section_phrase')

    alert("V tomto okně se budou zobrazovat promítané texty. " +
      "Můžet jej přesunout na sekundární monitor nebo dataprojektor.")
  },

  destroyed() {
    window.removeEventListener("storage", () => {
      this.current_phrase = localStorage.getItem('section_phrase')
    }, false);
  },
}
</script>

<style scoped>

.wrapper {
  display:          flex;
  flex-direction:   column;

  height:           100vh;

  white-space:      pre-line;
  font-size:        4vw;
  font-weight:      bold;
  color:            white;

  background-image: url("~assets/bg1.jpg");
  text-shadow:      1px -1px 6px #000000c4;

  text-align:       center;

  font-family:      'Arial', Helvetica, sans-serif;
  /*-webkit-text-stroke: 2px black;*/
  /*text-transform:   uppercase;*/
}
</style>
