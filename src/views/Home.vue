<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{info}}
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import axios from "axios";

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
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          console.log('respons', response);
          this.info = response.data.bpi;
        })
        .catch(error => {
          console.log(error)
        })
    }
  };
</script>
