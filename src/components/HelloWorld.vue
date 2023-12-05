<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>{{ anthorMsg }}</h3>
        <!-- <h5>{{ count }}</h5> -->
        <button @click="increment()">Increment</button>
    </div>
</template>

<script setup>
// import {ref} from "vue"

defineProps(["msg","anthorMsg"]);
// let count=ref(0)
// console.log(count,'valuecoutn')
// const increment=()=>{
//     count.value++;
//     console.log("count",count.value)
// }

    
</script>

<style scoped>
</style>