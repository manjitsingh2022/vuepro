<template>
    <div class="login-page">
      <h2>Login</h2>
      <!-- Login form for email and password -->
      <q-form @submit.prevent="loginUser" class="login-form">
        <q-input v-model="email" type="email" placeholder="Email" required/>
        <q-input v-model="password" type="password" placeholder="Password" required/>
        <q-button type="submit">Login</q-button>
      </q-form>
  
      <!-- Google login button -->
      <q-btn @click="loginWithGoogle" color="primary" label="Login with Google"/>
  
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, auth } from '../../firebase.js';
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref(null);
  
  const loginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;
  
      localStorage.setItem('user', JSON.stringify(user));
      const idToken = await user.getIdToken();
      localStorage.setItem('token', idToken);
  
      window.location.replace('/'); 
    } catch (error) {
      errorMessage.value = error.message;
      console.error('Login error:', error);
    }
  };
  
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
  
      localStorage.setItem('user', JSON.stringify(user));
      const idToken = await user.getIdToken();
      localStorage.setItem('token', idToken);
  
      window.location.replace('/');
    } catch (error) {
      errorMessage.value = error.message;
      console.error('Google login error:', error);
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS styles here */
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  