<template>
  <div class="home">
    <router-link to="/step/0">Start</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
