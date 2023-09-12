<script>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  name:'home',
  setup(){
    const router = useRouter()
    const route = useRoute()
      let userName = ref('home')

    const toAdd =()=>{
      router.push('/add')
    }

    const toEdit =()=>{
      router.push('/edit')
    }

    return {
      userName,
      toAdd,
      toEdit
    }
  }
}

</script>

<template>
<div>这是{{userName}}</div>
  <button @click="toAdd">点击跳转到 add组件</button>
  <button @click="toEdit">点击跳转到 edit组件</button>
</template>

<style scoped>

</style>