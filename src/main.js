import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DataTable from '@andresouzaabreu/vue-data-table'
import '@andresouzaabreu/vue-data-table/dist/DataTable.css'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.component('data-table', DataTable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
