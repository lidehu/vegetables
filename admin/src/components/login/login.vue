<template>
  <div class="login-page">
    <div class="login-from">
      <h1 class="name">智慧商城管理平台</h1>
      <el-form :model="loginForm">
        <el-form-item>
          <el-input placeholder="账户" class="user" v-model="loginForm.username" autofocus="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" @keyup.enter.native="submitForm" class="psd" placeholder="密码"  v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import api from '../../api'
export default {
  name: 'login',
  data () {
    return {
      loginForm:{
        username:'',
        password:''
      },
      submitFlag:true
    };
  },
  created(){
   console.log(11111)
  },
  computed:{

  },
  methods:{
    testEmpty(){
      if(!this.loginForm.username){
        this.$message.error('账号不能为空');
        return false
      }else if(!this.loginForm.password){
        this.$message.error('密码不能为空');
        return false;
      }else{

        return true
      }
    },
    submitForm(){
       if(this.testEmpty() && this.submitFlag){
         this.submitFlag=false
         api.login(this.loginForm).then(res=>{
           this.$message({
             message: '登录成功',
             type: 'success'
           });
           let username=res.result.username,roleIds=res.result.roleIds,roleNames=res.result.roleNames,login=true;
           let userInfo={username,roleIds,roleNames,login};
           localStorage.userInfo=JSON.stringify(userInfo);
            this.$store.commit('getUserInfo',userInfo)

           this.$router.push({path:'/index'})
           this.submitFlag=true
         }).catch(
           err=>{
             this.submitFlag=true
             this.$message.error(err.description)
             localStorage.userInfo=null
           }
         )

       }
    }
  },
}
</script>

<style  scoped>
  .login-page{
    width: 100%;
    height: 100%;
    background: #2A333E;
    box-shadow: 0 0 20px 5px rgba(255,255,255,0.5);
  }
  .login-from{
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 720px;
    height: 516px;
    background: rgba(255, 255, 255, 0.20);
    border-radius: 6px;
  }
  /deep/ .user,/deep/ .psd{
    position: relative;
  }
  /deep/ .user:before{
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: url("../../assets/img/login_icon_user.png") no-repeat;
    background-size:cover;
    top:50%;
    margin-top:-12px;
    left: 120px;
  }
  /deep/ .psd:before{
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: url("../../assets/img/login_icon_password.png") no-repeat;
    background-size:cover;
    top:50%;
    margin-top:-12px;
    left: 120px;
  }
  /deep/ .el-input__inner{
    display: block;
    height: 53px;
    padding-left: 40px;
    margin:0 auto;
    width: 500px;
    font-size: 18px;
  }
  /deep/ .el-button--primary{
    padding: 0;
    margin:  0  auto;
    display: block;
    width: 500px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
  }
  .name{
    line-height: 150px;
    color: #fff;
    font-size: 24px;
    text-align: center;
  }
</style>
