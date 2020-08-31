<template>
  <div id="form">
    <div class="row">
      <div class="item">
        <label>Order No.</label>
        <el-input class="input" />
      </div>
      <div class="item">
        <label>Release No.</label>
        <el-input class="input" />
      </div>
    </div>
    <div class="row">
      <div class="item">
        <label>Installation Date</label>
        <el-input suffix-icon="el-icon-date" class="input" />
      </div>
      <div class="item">
        <label>Installation Place</label>
        <el-input class="input" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form",
};
</script>

<style scoped lang="scss">
#form {
  border: 1px solid gray;
  flex: 6;
  // border: solid black 2px;
  padding-left: 5%;
  margin-top: 10px;
  .row {
    display: flex;
    flex: 1;
    .item {
      flex: 1;
      display: flex;
      padding-right: 5%;
      margin-top: 2%;
      label {
        width: 180px;
        height: 30px;
        line-height: 30px;
      }
      input {
        flex: 1;
        height: 30px;
      }
    }
  }
  .row:nth-of-type(1) {
    margin-top: 5%;
  }
}
</style>