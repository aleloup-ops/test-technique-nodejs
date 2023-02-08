<template>
</template>

<script lang="ts">
import Vue from 'vue'
import "@/assets/css/main.css"

export default Vue.extend({
  name: 'IndexPage',

  created() {
    this.$router.push('/login')
  },
  
})


</script>
