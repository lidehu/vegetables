<template>
  <el-container>
    <el-aside width="220px"><div class="log-container"><img src="../../assets/img/index/avatar.jpg" alt=""><span>华仔admin</span></div></el-aside>
    <el-container>
      <el-header>
        <el-dropdown trigger="click" @command="handleMenu" placement="bottom" >
          <span class="el-dropdown-link">
             <i class="iconfont iconwode"></i>  {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">修改密码</el-dropdown-item>
            <el-dropdown-item command="b">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <el-dialog
          title="修改密码"
          :visible.sync="dialogVisible"
           width="30%"
          :before-close="handleClose">
          <changePass ref="changePass" @handleClose="handleClose"></changePass>
<!--          <div slot="footer" class="dialog-footer">-->
<!--            <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
<!--          </div>-->
        </el-dialog>
      </el-main>
      <el-footer style="height: 30px">鄂ICP备18001612号 </el-footer>
    </el-container>
  </el-container>
</template>

<script>
    import changePass from '../changePass/changePass';
    export default {
        name: "Index",
        components: {
          changePass,
        },
        data (){
          return {
            userInfo:"",
            dialogVisible:false
          }
        },
        mounted(){
          this.getRouterInfo();
        },
        methods:{
          getRouterInfo(){
            this.userInfo=this.$store.state.userInfo
          },
          loginOut(){
            localStorage.removeItem('userInfo')
            localStorage.removeItem('login')
            this.$store.commit('removeUserInfo')
            this.$router.push({path:'/login'})
          },
          changePass(){
           this.dialogVisible=!this.dialogVisible
          },
          handleMenu(command){
             command== 'b' ? this.loginOut():this.changePass()
          },
          handleClose(){
            this.dialogVisible = false;
            this.$refs.changePass.resetForm('ruleForm2')
          }
        },
        watch:{

        }
    }
</script>

<style scoped>
  .el-container{
    background: #fff;
    height: 100%;
    box-sizing: border-box;
  }
  .el-container .el-container{
    width: 100%;
    position: relative;
  }
  .el-dropdown{
    width: 150px;
    text-align: center;
    float: right;
    height: 100%;
    line-height: 60px;
  }
  .el-dropdown-link{
    cursor: pointer;
    color: #666;
    font-size: 16px;
    margin-left: 10px;
  }
  .el-aside{
    background: #324057;
  }
  .log-container{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #666;
    background: #fff;
    border-right:1px solid #f4f4f8;
    box-sizing: border-box;

  }
  .log-container img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    box-shadow:0 0 4px 0 rgba(0,0,0,0.1);
  }
  .el-main{
    height: 100%;
    background: #f4f4f8;
    margin-left:20px;
    margin-right:20px;
  }
  .el-header{
    width: 100%;
    height: 60px;
    line-height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  /deep/ .el-footer{
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #324057;
    font-size: 12px;
    text-align: center;
    z-index: 9;
  }
</style>
