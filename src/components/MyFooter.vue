<template>
  <footer class="page-footer">
    <div class="footer-text">
      © {{year}} Eder Díaz
    </div>
    <a class="footer-link" target="_blank" href="http://ederdiaz.com">
      EderDiaz.com
    </a>
  </footer>
</template>

<script>
export default {
  name: 'myFooter',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.page-footer {
  background-color: #EED665;
  padding: 10px;
}

.footer-text {
  display: inline-block;
}

.footer-link {
  display: inline-block;
  float: right;
}
</style>
