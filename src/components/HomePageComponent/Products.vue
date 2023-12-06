
<template>
    <div id="products">
        <div @click="showProduct(element.id)" v-for="element in products" id="individual_product">
            <img :src="element.imageUrl" :alt="element.title" />
            <p>{{ element.title }}</p>
            <p>{{ element.price }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref,  onMounted } from 'vue';
import {useRouter}  from 'vue-router'

import { db, collection, getDocs } from '../../firebase';

const products = ref([])
const router=useRouter()

const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "vuepro"));
    querySnapshot.forEach((doc) => {
        let product = doc.data()
        product.id=doc.id
        products.value.push(product)
    });
}
onMounted(async () => {
    await getData()
})

const showProduct=(id)=>{
    console.log('vldlslsd',id)

    router.push(`productdetails/${id}`)
}
</script>
<style scoped>
#products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3%;
    gap: 3%;
}

#products img {
    width: 100%;
}
</style>
  