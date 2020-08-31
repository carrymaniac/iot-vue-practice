<template>
<div id="table">
            <el-table class="table" :data="tableData" stripe border cell-style="padding:0" header-cell-style="color:white;padding:0.5;background-color:rgb(65, 105, 179);">
            <el-table-column type="selection" width="55" align="center" ></el-table-column>
            <el-table-column label="Device No." width="120" prop="col1" align="center"></el-table-column>
            <el-table-column label="SIM No." width="120" prop="col2" align="center"></el-table-column>
            <el-table-column label="PIN No." width="120" prop="col3" align="center"></el-table-column>
            <el-table-column label="Batch No." width="120" prop="col4" align="center"></el-table-column>
            <el-table-column label="Release No." width="120" prop="col5" align="center"></el-table-column>
            <el-table-column label="Device Manufacturer ID" width="250" prop="col6" align="center"></el-table-column>
            <el-table-column label="Device Hardware Model" width="250" prop="col7" align="center"></el-table-column>
          </el-table>
</div>
</template>

<script>
export default {
    name:'ManufacturerTable',
      data(){
    return {
      tableData:[
        {
          col1:"string1",
          col2:"string2",
          col3:"string3",
          col4:"string4",
          col5:"string5",
          col6:"string6",
          col7:"string7"
        },
        {
          col1:"string1",
          col2:"string2",
          col3:"string3",
          col4:"string4",
          col5:"string5",
          col6:"string6",
          col7:"string7"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
      #table {
        flex: 6;
        border: solid black 2px;
        display: flex;
            .el-table {
          thead {
            font-size: 0.5em;
          }
    }
      }
</style>