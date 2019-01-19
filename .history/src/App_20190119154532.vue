<template>
  <div id="app">



    <div :style="{ backgroundImage: './assets/screen_plain.png' }">

        <h1 class="display-4 font-weight-bolder font-italic ">Hey Thomais, lets learn some math !</h1>

        <b-button :size="primary"  class="btn btn-primary btn-xl">
                  Msg: {{buttonMsg1}}
        </b-button>


        <b-button :size="primary"  class="btn btn-primary btn-xl">
                  Msg: {{buttonMsg1}}
        </b-button>

      <b-button :size="primary" class="btn btn-primary btn-xl">
                  +
      </b-button>

    </div>

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      buttonMsg1: 'Button-1',
      buttonMsg2:  'Button-2'
    }
  }
}
</script>

<style>

.btn-xl {
  
    padding: 18px 28px;
    font-size: 34px; //change this to your desired size
    line-height: normal;
    -webkit-border-radius: 8px;
       -moz-border-radius: 8px;
            border-radius: 8px;
      background : #cccccc;
      color: #ffffff;
}

body {
  background-color: #ddccdd;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
