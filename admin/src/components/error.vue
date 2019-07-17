<template>
    <div class="error">
      <img class="img" src="../assets/img/404/404.png" alt="">
      <div class="info">
        <p>请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</p>
        <router-link class="go-index" to="/index">返回首页</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "error",
        data(){
          return {
            error:404
          }
        },
    }
</script>

<style scoped>
  .error{
     background: rgb(240, 242, 245);
     height: 100%;
     box-sizing: border-box;
     padding:10% 20%;
   }
   .img{
     display: block;
     width: 50%;
     float: left;
   }
   .info{
     width: 50%;
     float: left;
     font-size: 16px;
     color: grey;
     margin-top: 120px;
   }
   p{
     width: 80%;
     line-height: 24px;
     margin-bottom: 20px;
   }
   .info .go-index{
     display: block;
     width: 100px;
     line-height: 35px;
     background: #1482f0;
     border-radius:20px;
     text-align: center;
     color: #ffffff;
     margin-left:60px;
   }
</style>
