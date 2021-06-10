import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'


//axios.defaults.baseURL = "http://localhost:9090"

axios.interceptors.request.use(config=>{
     
     return config
     //前置拦截
})

//后置拦截
axios.interceptors.response.use(response=>{

      let res = response.data
      console.log(res)
      if(res.code === 200 || response.status === 200 )  //若是返回的code为200说明正常的
      {
          return response
      }
      else if(res.code === 400)
      {
         Element.Message.error("密码错误！",{duration : 3*1000});
        return Promise.reject(response.data.msg)
      }
      

},
error=>{
    console.log(error)
    if(error.response.data){
        error.message = error.response.data.msg 
    }
    //状态为 401
    if(error.response.status === 401){
        store.commit("REMOVE_INFO")
        router.push("/login")
    }
    else{
        Element.Message.error(error.message,{duration : 3*1000});
        return Promise.reject(response.data.msg)
    }
}
)