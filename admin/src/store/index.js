import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
const login = localStorage.login ? localStorage.login : false;
const userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo):null;
const state = {
  token:'',
  count:0,
  number:1,
  login,
  userInfo
}

const getter = {
  count:state =>state.count,
  number:state =>state.number,
}

const mutations = {
  getUserInfo(state,val){
    state.userInfo = val.userInfo
    state.login = val.login
  },
  removeUserInfo(state){
    state.userInfo = null,
    state.login = false
  }
}

const store = new Vuex.Store({
  state,getter,mutations
})


export default store

