import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next)=>{
  console.log(to.path);
  next()
})
