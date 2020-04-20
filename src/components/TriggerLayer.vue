<template>
  <div class="trigger-layer"></div>
</template>

<script>
import { EventBus } from '../EventBus'

export default {
  name: 'TriggerHandler',
  mounted() {
    EventBus.$on('trigger', payload => {
      console.log(payload)
    })
  },
}
</script>

<style lang="scss" scoped>
.trigger-layer {
  display: block;
}
</style>
