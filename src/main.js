import Vue from 'vue'
import WebeOS from './Webeos.vue'
import store from './store.js'

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(WebeOS),
  created() {
      console.log(this.$store)
  }
}).$mount('#app');