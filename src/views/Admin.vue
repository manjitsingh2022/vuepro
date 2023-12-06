<template>
    <div>
        <Navbar />
        <h1>This is admin page</h1>
        <AddProductFrom/>
    </div>
</template>

<script setup>
import AddProductFrom from '../components/AdminPageComponent/AddProductFrom.vue';
import Navbar from '../components/HomePageComponent/Navbar.vue';
</script>

<style  scoped></style>