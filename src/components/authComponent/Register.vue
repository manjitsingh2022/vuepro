<template>
  <div class="q-pa-md flex flex-center">
    <div class="q-gutter-md" style="max-width: 400px; width: 100%;">
      <h1 class="text-h4">Signup</h1>
      <form @submit.prevent="authenticate">
        <q-input v-model="email" type="email" label="Email" outlined />
        <q-input v-model="password" type="password" label="Password" outlined />
        <q-btn
          type="submit"
          color="primary"
          label="Signup"
          class="q-my-md full-width"
          :loading="loading"
          :disable="loading"
          :block="true"
        />
      </form>
      <q-separator class="q-mt-md q-mb-md" />
      <q-alert v-if="error" color="negative">{{ error }}</q-alert>
      <q-alert v-if="success" color="positive">{{ success }}</q-alert>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, auth } from "../../firebase.js";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      email: "",
      password: "",
      user: null,
      error: null,
      success: null,
      loading: false,
    };
  },
  methods: {
    async authenticate() {
      try {
        this.loading = true;
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        this.user = userCredential.user;
        this.success = "Registration successful!";
        this.error = null;
        this.email = "";
        this.password = "";
        
        this.redirectToLogin();
      } catch (error) {
        console.error("Registration error:", error);
        this.user = null;
        this.error = error.message;
        this.success = null;
      } finally {
        this.loading = false;
      }
    },
    redirectToLogin() {
      const router = useRouter();
      router.push("/login"); 
    },
  },
};
</script>

<style scoped>
/* Centering the form on the screen */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}

/* Your custom styles */
</style>
