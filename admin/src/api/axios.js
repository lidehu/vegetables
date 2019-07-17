import axios from 'axios'
import QS from 'qs';
import store from '../store'

const service = axios.create({
  timeout:5000,
  withCredentials: true,
  headers:{'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}
})

service.defaults.baseURL="http://smtb.onccc.com";

//设置请求头
service.interceptors.request.use(config =>{
  if(store.state.token){
    config.headers.token = store.state.token;
  }
  return config
}, error =>{
  return Promise.reject(error)
});

//响应拦截
service.interceptors.response.use(res => {
    if(res.code === 200){
      return Promise.resolve(res);
    }else{
      //这个地方可以由后台编辑状态码区分不同情况，做不同的逻辑处理
      return Promise.reject(res);
    }
  },
  error => {
    // //请求失败，这个地方可以根据error.response.status统一处理一些界面逻辑，比如status为401未登录,可以进行重定向
    // router.replace({
    //     path: '/login',
    //     query: { redirect: router.currentRoute.fullPath }
    //    });
    return Promise.reject(error);
  })

//对外请求
function request({method, url, params}){
  if(method == 'get'){
    return get(url, params);
  }else if(method == 'post'){
    return post(url, params);
  }
}

// 封装get方法
function get(url, params){
  return new Promise((resolve, reject) =>{
    service.get(url, params).then(res =>{
      resolve(res.data);
    }).catch(error =>{
      reject(error.data);
    })
  });

}

// 封装post方法
function post(url, params){
  return new Promise((resolve, reject) =>{
    service.post(url, QS.stringify(params)).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      reject(error.data);
    })

  });
}

export default request

