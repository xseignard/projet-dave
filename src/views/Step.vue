<template>
  <div class="step">
    <h1>{{ step.text }}</h1>
    <button
      v-for="(a, i) in step.actions"
      :key="i"
      @click="() => handleClick(a)"
      class="action"
    >
      {{ a.text }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Step',
  computed: {
    ...mapState({
      step(state) {
        return state.steps.find(
          s => s.id === parseInt(this.$route.params.id, 10)
        )
      },
    }),
  },
  methods: {
    handleClick(action) {
      this.$router.push(`./${action.target}`)
      action.triggers.map(t => this.$root.$emit('trigger', t))
    },
  },
}
</script>

<style lang="scss" scoped>
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  .action {
    margin-bottom: 5px;
  }
}
</style>
