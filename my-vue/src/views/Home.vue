<template>
  <div class="home">
    home
    <br>
    {{message}}
    <br>
    <button @click="handleClick">hello</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handleClick() {
      this.$http
        .get(`${localStorage.baseURL}/hello/hxl`)
        .then(res=>{
          console.log(res);
          this.message = res.data.name
        })
        .catch(err=>{
          console.log(err);
        })
    }
  }
}
</script>
