<template>
  <div class="trigger-layer">
    <h2>Triggers</h2>
    <p v-for="(t, i) in triggers" :key="i">{{ t }}</p>
  </div>
</template>

<script>
export default {
  name: 'TriggerHandler',
  data() {
    return {
      triggers: [],
    }
  },
  mounted() {
    console.log(this)
    this.$root.$on('trigger', payload => {
      this.triggers.push(payload)
    })
  },
}
</script>

<style lang="scss" scoped>
.trigger-layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 15vw;
  height: 50vh;
  overflow-x: hidden;
}
</style>
