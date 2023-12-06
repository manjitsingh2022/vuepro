<template>
  <div id="container">
    <div id="lhs">
      <img :src="product.imageUrl" :alt="product.title">
    </div>
    <div id="lhs">
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
      <q-btn @click="addToCart(product)" id="addtocart_btn" color="black" label="Add to cart" />
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue"
import { db, doc, getDoc } from "../../firebase.js"
import { useRoute } from "vue-router";
import {useCartStore} from"../../store.js"

const route = useRoute()
const product = ref({})
const cartStore=useCartStore()

onMounted(async () => {
  const docRef = doc(db, "vuepro", route.params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
  
    let prod = docSnap.data()
    prod.id=docSnap.id;
    product.value=prod;
  } else {
    console.log("No such document!");
  }
})

const addToCart = (product) => {
  cartStore.addToCart(product)
}

</script>

<style  scoped>
#addtocart_btn {
  width: 40%;
}

#container {
  display: flex;
  margin-top: 5%;

}

#lhs {
  display: flex;
  flex: 4;
}

#lhs img {
  width: 90%;
}

#lhs {
  display: flex;
  flex-direction: column;
  flex: 6;
  margin-left: 3%;
  font-size: 180%;
}</style>