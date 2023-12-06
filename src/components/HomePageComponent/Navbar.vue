<template>
    <div>
      <div id="navbar">
        <div id="lhs">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>
          </ul>
        </div>
        <div id="rhs">
          <div>Account</div>
          <div id="cart">
            <q-icon @click="dialog=!dialog" name="shopping_cart" />
            <div id="cart_count">{{ cartStore.cartCount }}</div>
            <cartPopupVue :dialogVisibility="dialog" />

          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useCartStore } from '../../store';
  import cartPopupVue from "../CartComponent/cartPopup.vue";
  const dialog=ref(false)
  const cartStore = useCartStore();
  </script>
  
  <style scoped>
  #navbar {
    display: flex;
    height: 70px;
    align-items: center;
    font-size: 130%;
    border-bottom: solid 1px black;
  }
  
  #lhs {
    display: flex;
    flex: 3;
    align-items: center;
  }
  
  #lhs ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  #lhs li {
    margin-right: 20px;
  }
  
  #lhs li a {
    text-decoration: none;
    color: black;
  }
  
  #rhs {
    display: flex;
    flex: 7;
    align-items: center;
    justify-content: flex-end;
    gap: 10%;
  }
  
  #cart {
    display: flex;
    align-items: center;
  }
  
  #cart_count {
    padding-bottom: 12px;
  }
  </style>
  