<template>
  <div class="app">
    <my-navbar/>
    <main>
      <router-view/>
    </main>
    <my-footer/>
  </div>
</template>

<script>
import myNavbar from './components/MyNavbar'
import myFooter from './components/MyFooter'
export default {
  name: 'app',
  components: {
    myFooter,
    myNavbar
  }
}
</script>

<style scoped>
/*
* Sticky footer rules
*/
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
