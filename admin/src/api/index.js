import axios from './config'

export default {
  login(params){
    return axios('post','meterweb/ignore/login',params)
  }
}
