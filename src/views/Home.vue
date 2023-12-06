
<template>
    <div>
        <Navbar/>
        <BannerComponent welcomeMsg="Welcome to vue  Shop" />
        <ProductsComponent/>
    </div>
</template>
  
<script setup>
import Navbar from '../components/HomePageComponent/Navbar.vue'
import BannerComponent from '../components/HomePageComponent/Banner.vue'
import ProductsComponent from '../components/HomePageComponent/Products.vue'
</script>
  
  
<style scoped></style>
  