<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/step/0">Start</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <TriggerLayer />
    <router-view />
  </div>
</template>

<script>
import TriggerLayer from '@/components/TriggerLayer.vue'

export default {
  components: {
    TriggerLayer,
  },
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
}
</style>
