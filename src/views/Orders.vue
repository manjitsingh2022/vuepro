<template>
    <Navbar />
    <div id="container">
        <div>This is orders</div>

        <q-form @submit="onSubmit" id="orders_form" class="q-gutter-md">
            <q-input filled v-model="form.name" label="Your name *" hint="Name and surname" lazy-rules />
            <q-input filled type="number" v-model="form.contact" label="Your Contact *" lazy-rules  :rules="[
          (val) =>
            (val !== null && val.length === 10) || 'Please type valid number',
        ]"/>
            <q-input filled type="text" v-model="form.address" label="Your Address *" lazy-rules  :rules="[
          (val) =>
            (val !== null && val.length > 10) || 'Please type proper address',
        ]" />
            <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>

    </div>
</template>

  
  
<script setup>
import { reactive } from 'vue';
import Navbar from '../components/HomePageComponent/Navbar.vue';
import { useCartStore } from '../store';
import { db, collection, addDoc } from "../firebase.js";

const cartStore=useCartStore()

const form= reactive({
    name:"",
    contact:"",
    address:"",
    order:cartStore.cart,
    total:cartStore.cartTotal,
})

const onSubmit = async () => {
  const docRef = await addDoc(collection(db, "orders"), form);
  console.log("Document written with ID: ", docRef.id);
};
</script>
  
<style lang="scss" scoped>
#container {
  padding: 5%;

  width: 50%;
}
</style>