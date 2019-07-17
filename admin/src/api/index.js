import axios from './axios'

export default {
  login(params){
    return axios('post','meterweb/ignore/login',params)
  }
}
