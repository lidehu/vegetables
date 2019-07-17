import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next)=>{
  if(to.path !== '/login'&& !store.state.login){
    next({path:'/login'})
  }else if(to.path == '/'){
    next({path:'/'})
  }else{
    next()
  }
})
router.afterEach(route => {
  window.scroll(0, 0);
});
