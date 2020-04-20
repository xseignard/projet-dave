import Vue from 'vue'
import Vuex from 'vuex'
import { createSteps, createTriggers } from './fakeData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    steps: createSteps(),
    triggers: createTriggers(),
  },
  mutations: {},
  actions: {},
  modules: {},
})
