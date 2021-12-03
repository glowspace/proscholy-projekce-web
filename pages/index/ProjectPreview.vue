<template>
  <div class="embed-responsive embed-responsive-16by9 mb-3"
       @click="openProjection">
    <div class="card wrapper justify-content-center embed-responsive-item">
      <div class="justify-content-center align-self-center"
           style="white-space: pre-line">
        <span>{{ state.current_preview.section_phrase }}</span>
      </div>
    </div>
    <div class="after justify-content-center align-items-center">
      <div>Otevřít projekční okno</div>
    </div>

  </div>
</template>

<script>
import state from "../state";

export default {
  name: "ProjectPreview",

  data: () => {
    return {
      state: state,
      timeout: false
    }
  },

  methods: {
    openProjection() {
      window.open('/project', '_blank');
    }
  }
}
</script>

<style scoped
       lang="scss">

.embed-responsive {
  position:   relative;
  cursor:     pointer;
  transition: 0.5s;
}

.wrapper {
  display:          flex;
  flex-direction:   column;

  white-space:      pre-line;
  font-size:        0.9vw;
  font-weight:      bold;
  color:            white;

  background-image: url("~assets/bg1.jpg");
  background-size:  contain;
  text-shadow:      1px -1px 6px #000000c4;

  text-align:       center;

  font-family:      'Arial', Helvetica, sans-serif;
  /*-webkit-text-stroke: 2px black;*/
  /*text-transform:   uppercase;*/
  transition:       1s;

}

.embed-responsive .after {
  position:   absolute;
  top:        0;
  left:       0;
  width:      100%;
  height:     100%;
  display:    flex;
  opacity: 0;
  color:      #ffffff;
  transition: 0.5s;
}

.embed-responsive:hover .after {
  display:         flex;
  background:      rgba(0, 0, 0, 0.6);
  transition:      0.5s opacity;
  opacity: 1;
}


</style>

