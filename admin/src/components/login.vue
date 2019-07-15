<template>
  <div class="hello">
    <h1 @click="countAdd(100)">{{ msg }}{{count}}{{number}}</h1>
    <router-link :to="{path:'index', query:{id : 1}}">go→a</router-link>
    <router-link :to="'/index?id=2'">go→b</router-link>
    <router-link :to="'/index?id=3'">go→b</router-link>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import  wx from 'weixin-js-sdk'
export default {
  name: 'Login',
  data () {
    return {
      msg: '李四',

    }
  },
  created(){
    console.log(this.$store.state.count,1111);
    console.log(wx);
  },
  computed:{
    ...mapState({
      count:state=> state.count,
      number:state=> state.number,
    })
  },
  methods:{
    ...mapMutations(['countAdd'])
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
