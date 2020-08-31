
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
      <div id="main">
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
        <div id="button">
          <el-button size="small" icon="el-icon-refresh" class="button">Audit Log</el-button>
          <el-button size="small" icon="el-icon-edit" class="button">Edit Record</el-button>
        </div>
        <div id="table">
          <el-table class="table">
            <el-table-column label="what"></el-table-column>
            <el-table-column label="Device No."></el-table-column>
            <el-table-column label="SIM No."></el-table-column>
            <el-table-column label="PIN No."></el-table-column>
            <el-table-column label="Batch No."></el-table-column>
            <el-table-column label="Release No."></el-table-column>
            <el-table-column label="Device Manufacturer ID"></el-table-column>
            <el-table-column label="Device Hardware Model"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>

</style>
<style scoped lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  #top {
    background-color: rgb(65, 105, 179);
    flex: 1;
    display: flex;
    #tittle {
      font: 1.5em sans-serif;
      color: aliceblue;
      align-self: center;
      margin-right: auto;
    }
    #info {
      align-self: flex-end;
      padding-right: 5px;
      color: aliceblue;
    }
  }
  #content {
    background-color: antiquewhite;
    border: solid black 2px;
    flex: 6;
    display: flex;
    #nagive {
      flex: 1;
      border: solid blue 2px;
      background-color: rgb(65, 105, 179);
    }
    #main {
      flex: 15;
      border: solid black 2px;
      display: flex;
      flex-direction: column;
      #form {
        flex: 6;
        border: solid black 2px;
        padding-left: 5%;
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
      #button {
        flex: 1;
        border: solid black 2px;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        button {
          height: 30px;
          margin-right: 5px;
        }
      }
      #table {
        flex: 6;
        border: solid black 2px;
        display: flex;
      }
    }
  }
}
</style>
