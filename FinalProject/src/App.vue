<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from 'pinia';
import UserStore from '@/stores/user';

export default {
  name: 'App',
  computed: {
    ...mapState(UserStore, ['user']),
  },
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    ...mapActions(UserStore, ['fetchUser']),
    _checkUserExists() {
      if (this.user) {
        this.$router.push({ path: '/' });
      } else {
        this.$router.push({ path: 'auth/sign-in' });
           }
    }
  },
  async created() {
    try {
    await this.fetchUser();
    } catch (e) {
      console.error(e);
      this._checkUserExists()
      }
  },
  watch: {
    user(){
      this._checkUserExists()
    },
  },
}

</script>

<template>
  <header>
    <a href="@/views/HomeView.vue"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" /></a>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/auth/sign-in">Sign In</RouterLink>
        <RouterLink to="/auth/sign-out">Sign Out</RouterLink>
        <RouterLink to="/auth/sign-up">Sign Up</RouterLink>
        <RouterLink to="/my-tasks">My tasks</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: black;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    max-width: 120px;
    height: 80px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
