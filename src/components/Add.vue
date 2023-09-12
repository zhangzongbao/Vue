<template>
  <div class="box">
  <div>{{addName}}</div>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  setup(){

    let addName = ref("add组件");


    return {
      addName
    }
  }
  }
</script>

<style scoped>
 .box {
   width: 400px;
   display: flex;
   justify-content: space-between;
 }
</style>
