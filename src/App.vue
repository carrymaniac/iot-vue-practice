<template>
  <div id="app">
    <div id="top">
      <label id="tittle">Device Ordering and Quality Control</label>
      <div id="info">
        <label>Last updated at: 2020-5-6,23:26UTC</label>
        <br />
        <label>USER ID: user test</label>
      </div>
    </div>
    <div id="content">
      <div id="nagive"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components:{
  }
};
</script>

<style scoped>

</style>
<style scoped lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  #top {
    background-color: rgb(65, 105, 179);
    flex: 1;
    display: flex;
    #tittle {
      font: 1.5em sans-serif;
      color: aliceblue;
      align-self: center;
      margin-right: auto;
      margin-left: 10px;
    }
    #info {
      align-self: flex-end;
      padding-right: 5px;
      color: aliceblue;
    }
  }
  #content {
    background-color: white;
    // border: solid black 2px;
    flex: 6;
    display: flex;
    margin-right: 15px;
    #nagive {
      flex: 1;
      // border: solid blue 2px;
      background-color: rgb(65, 105, 179);
      margin-right: 20px;
    }
  }
}
</style>
