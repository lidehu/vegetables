import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Login = () => import('../components/login/login');
const Index = () => import('../components/index/index');
const Error = () => import('../components/error');
export default new Router({
  routes: [
    {
      path:'*',
      name:'error',
      component:Error
    },
    {
      path:'/index',
      name:'index',
      meta:{login:true},
      component:Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
