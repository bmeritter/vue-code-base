<template>
  <div class="home">
    <div>{{info}}</div>
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import axios from "../util/axios";

  export default {
    name: "home",
    components: {
      HelloWorld
    },
    data() {
      return {
        info: {}
      }
    },
    mounted() {
      axios
        .get('/v1/bpi/currentprice.json')
        .then(response => {
          this.info = response.bpi;
        })
        .catch(error => {
          console.log(error)
        })
    }
  };
</script>
