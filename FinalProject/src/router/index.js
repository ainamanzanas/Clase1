import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '@/views/AuthView.vue';
import SignUpView from '@/views/SignUpView.vue';
import SignOutView from '@/views/SignOutView.vue';
import SignInView from '@/views/SignInView.vue';
import UserStore from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'sign-in',
          name: 'SignIn',
          component: SignInView
        },
        {
          path: 'sign-up',
          name: 'SignUp',
          component: SignUpView
        },
        {
          path: 'sign-out',
          name: 'SignOut',
          component: SignOutView
        }
      ]
    },
  ]
})

export default router

router.beforeEach((to) => {
  const useUserStore = UserStore()
  const isSigninIn = useUserStore.user !== null;
   if (!isSigninIn && to.name !== 'signIn' && to.name !== 'signOut' ) {
    return {
       name: 'signIn'
    }
   }
})




