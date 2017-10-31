<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item gdljs-link" to="/">
        <img class="gdljs-logo" src="/static/gdljs.jpg" alt="GDLJS">
      </router-link>

      <button
        class="button navbar-burger"
        :class="{'is-active': menuOpen}"
        @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
    <div class="navbar-menu" :class="{'is-active': menuOpen}">

      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        class="navbar-item">
          {{route.name}}
      </router-link>

    </div>
  </nav>
</template>

<script>
import router from '../router'
export default {
  name: 'myNavbar',
  data () {
    return  {
      routes: router.options.routes,
      menuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>


<style scoped>
.gdljs-link {
  padding: 0;
}
.gdljs-logo {
  max-height: 50px;
}
</style>
