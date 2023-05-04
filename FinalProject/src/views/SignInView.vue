<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user.js'

export default {
    name: 'SignIn',
    computed: {
      ...mapState(userStore, ['user']),
    },
    methods: {
      ...mapActions(userStore, ['signIn']),
      handleSignIn() {
        const userData = {
          email: '',
          password: '',
        };
        this.signIn(userData);
      },
    }
  };
</script>

<template>
    <h2>Sign In View</h2>
    <button @click="handleSignIn">Sign In</button>
    <RouterLink to="/auth/sign-up">Sign Up</RouterLink>
</template>

<style>
</style>