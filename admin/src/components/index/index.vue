<template>
  <el-container>
    <el-aside width="230px">Aside</el-aside>
    <el-container class="el-section">
      <el-header>Header</el-header>
      <el-main><li @click="goIndex()"> {{msg}}1</li><li @click="loginOut()"> 222222</li></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "Index",
        data (){
          return {
            msg:"werwerwer"
          }
        },
        mounted(){
          this.getRouterInfo();
        },
        methods:{
          goIndex(){
            this.$router.push({path:'/b'})
          },
          loginOut(){
            localStorage.removeItem('userInfo')
            this.$store.commit("removeUserInfo")
            this.$router.push({path:'/'})
          },
          getRouterInfo(){
            switch (parseInt(this.$route.query.id)) {
              case 1:
                this.msg="李德华"
                break;
              case 2:
                this.msg="周海峰"
                break;
              case 3:
                this.msg="王佩云"
                break;
            }
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
  .el-aside{
    background: rgb(54, 64, 76);
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

</style>
