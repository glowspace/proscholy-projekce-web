<!--<template>-->
<!--  <div>-->
<!--    <nav class="navbar navbar-expand-lg navbar-dark absolute-top">-->
<!--      <div class="container">-->
<!--        <nuxt-link to="/"-->
<!--                   class="navbar-brand"-->
<!--                   id="navbar-brand">-->
<!--          <img-->
<!--            src="/img/logo_v2.png"-->
<!--            style="padding-right:10px"-->
<!--            width="60"-->
<!--            alt="logo"-->
<!--          />-->
<!--          <h1 class="home-h1">Zpěvník pro scholy</h1>-->
<!--          <span>Zpěvník pro scholy</span>-->
<!--        </nuxt-link>-->
<!--        <div class="d-inline-flex">-->
<!--          <nuxt-link-->
<!--            to="/"-->
<!--            class="btn btn-secondary"><i class="fas fa-search"></i> Vyhledávání-->
<!--          </nuxt-link>-->
<!--          <nuxt-link-->
<!--            to="/o-zpevniku"-->
<!--            class="btn btn-secondary"-->
<!--            active-class="active"-->
<!--          ><i class="fas fa-info"></i> O&nbsp;zpěvníku-->
<!--          </nuxt-link>-->
<!--          &lt;!&ndash;          <dark-mode-button v-cloak> Tmavý&nbsp;mód</dark-mode-button>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// import DarkModeButton from '~/components/DarkModeButton';-->

<!--export default {-->
<!--  name: 'Navbar',-->

<!--  components: {},-->
<!--};-->
<!--</script>-->

<!--<style lang="scss">-->
<!--.navbar.absolute-top {-->
<!--  z-index: 201;-->

<!--  @media screen and (max-width: 375px) {-->
<!--    display: none;-->
<!--  }-->
<!--}-->

<!--.mobile-padding-button {-->
<!--  display: none;-->

<!--  @media screen and (max-width: 375px) {-->
<!--    display: block;-->
<!--  }-->
<!--}-->

<!--.navbar.absolute-top a i,-->
<!--.card-header i {-->
<!--  padding-right: 5px;-->

<!--  @include media-breakpoint-down(xs) {-->
<!--    .card-lyrics & {-->
<!--      padding-right: 0;-->
<!--    }-->
<!--  }-->
<!--}-->


<!--.navbar {-->
<!--  padding: 0.5rem 0;-->

<!--  & > div {-->
<!--    width:   100%;-->
<!--    /* max-width: 994px; */-->
<!--    margin:  0 auto;-->
<!--    padding: 0;-->
<!--  }-->

<!--  .container {-->
<!--    // override bootstrap flex behaviour-->
<!--    display: block;-->
<!--  }-->

<!--  &.fixed-top {-->
<!--    padding-top:    0;-->
<!--    padding-bottom: 0;-->
<!--    line-height:    initial;-->
<!--    min-height:     auto;-->
<!--  }-->

<!--  a {-->
<!--    margin-bottom: 0;-->
<!--  }-->

<!--  .btn.btn-secondary {-->
<!--    color: #aaaaaa;-->

<!--    &.active, &:active {-->
<!--      background-color: rgba(153, 153, 153, 0.2);-->

<!--      &:hover, &:focus {-->
<!--        background-color: rgba(153, 153, 153, 0.4);-->
<!--        color:            #ffffff;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</style>-->
