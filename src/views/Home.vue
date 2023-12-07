
<template>
    <div>
        <Navbar/>
        <Banner welcomeMsg="Welcome to vue  Shop" />
        <ProductsComponent/>
    </div>
</template>
  
<script setup>
import Navbar from '../components/HomePageComponent/Navbar.vue'
import ProductsComponent from '../components/HomePageComponent/Products.vue'
import Banner from '../components/HomePageComponent/Banner.vue';
</script>
<style scoped></style>
  