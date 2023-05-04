<template>
    <h2>SignUp View</h2>
    <button @click="handleSignUp">Sign Up</button>
    <RouterLink to="/auth/sign-in">Sign In</RouterLink>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user.js'

export default {
    name: 'AuthView',
    computed: {
      ...mapState(userStore, ['user']),
    },
    methods: {
      ...mapActions(userStore, ['signUp']),
      handleSignUp() {
        const userData = {
          email: '',
          password: '',
        };
        this.signUp(userData);
      },
    }
};



</script>

<style>
</style>