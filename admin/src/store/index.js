import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
  token:'',
  count:0,
  number:1,
  userInfo:localStorage.userInfo||null
}

const getter = {
  count:state =>state.count,
  number:state =>state.number,
}

const mutations = {
  getUserInfo(state,val){
    state.userInfo = val
  },
  removeUserInfo(state){
    state.userInfo = null
  },
  countAdd(state,val){
    console.log(val);
    if(val == 60){
      state.count=50
    }
    state.count++;
    state.count=state.count>10?val:state.count
  }
}

const store = new Vuex.Store({
  state,getter,mutations
})


export default store

