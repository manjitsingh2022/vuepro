
<template>
  <div id="welcome_div">
    <h1>{{ welcomeMsg }}</h1>
  </div>
</template>
  
<script setup>
defineProps(['welcomeMsg'])
</script>
  
<style scoped>
h1 {
  font-weight: 500;
  font-size: 3rem;
}

#welcome_div {
  display: flex;
  height: 200px;
  justify-content: center;
  border-bottom: solid 1px black;
  align-items: center;
  color: rgb(59, 170, 94);
}
</style>
  