<template>
        <div id="main">
        <lable>11222</lable>
        <Form/>
        <div id="button">
          <el-button size="small" icon="el-icon-refresh" class="button">Audit Log</el-button>
          <el-button size="small" icon="el-icon-edit" class="button">Edit Record</el-button>
        </div>
          <ManufacturerTable/>
      </div>
</template>

<script>
import Form from '../components/Form'
import ManufacturerTable from '../components/ManufacturerTable'
export default {
  name: "Main",
  components:{
    Form,ManufacturerTable
  }
};
</script>

<style scoped lang="scss">
   #main {
      flex: 15;
      // border: solid black 2px;
      display: flex;
      flex-direction: column;
      #button {
        flex: 1;
        // border: solid black 2px;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        button {
          height: 30px;
          margin-right: 5px;
        }
      }
    }
</style>