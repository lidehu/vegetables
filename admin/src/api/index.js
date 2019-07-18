import axios from './config'

export default {
  /* 登录
  @param {object} params
  @returns*/
  login(params){

    return axios('post','meterweb/ignore/login',params)
  },
  /**
   * 修改密码
   * @param {object} params
   * @returns
   */
  password(params) {
    console.log("lo");
    return axios('put','/meterweb/web/modify/password', params)
  },
}
