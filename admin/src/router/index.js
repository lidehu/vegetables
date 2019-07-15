import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Login = () => import('../components/login');
const Menu = () => import('../components/menu');
const Index = () => import('../components/index');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/menu',
      name:'menu',
      component:Menu
    }
  ]
})
