<template>
    <div >
      <li @click="goIndex()"> {{msg}}1</li>
      <li @click="loginOut()"> 222222</li>
    </div>
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

</style>
