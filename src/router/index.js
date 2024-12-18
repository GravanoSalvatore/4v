import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import company from '../views/COMPANY/AboutComp.vue';
// import HomeView from '../views/HomeView.vue';
// import HomeView from '../views/HomeView.vue';
// import HomeView from '../views/HomeView.vue';
// import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/COMPANY/AboutComp.vue')
    },
    {
      path: '/techSpec',
      name: 'techSpec',
      component: () => import('../views/COMPANY/TechSpec.vue')
    },
    {
      path: '/token',
      name: 'token',
      component: () => import('../views/COMPANY/Token.vue')
    },
    {
      path: '/road',
      name: 'road',
      component: () => import('../views/COMPANY/Road.vue')
    },
    {
      path: '/pos',
      name: 'pos',
      component: () => import('../views/COMPANY/Pos.vue')
    },
    {
      path: '/bridge',
      name: 'bridge',
      component: () => import('../views/COMPANY/Bridge.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/CONTACTS/ContactsComp.vue')
    },
    {
      path: '/back',
      name: 'back',
      component: () => import('../views/EXPERTISE/BackComp.vue')
    },
    {
      path: '/com',
      name: 'com',
      component: () => import('../views/Com.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/More.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/COMPANY/Team.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/COMPANY/News.vue')
    },
    {
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: () => import('../views/COMPANY/PrivacyPolicy.vue')
    }
,    
{
  path: '/terms',
  name: 'terms',
  component: () => import('../views/COMPANY/Terms.vue')
}
,    
    {
      path: '/tech',
      name: 'tech',
      component: () => import('../views/COMPANY/TechDoc.vue')
    },
    // {
    //   path: '/php',
    //   name: 'php',
    //   component: () => import('../views/EXPERTISE/PhpComp.vue')
    // },
    // {
    //   path: '/vue',
    //   name: 'vue',
    //   component: () => import('../views/EXPERTISE/VueComp.vue')
    // },
    // {
    //   path: '/dot',
    //   name: 'dot',
    //   component: () => import('../views/EXPERTISE/DotNetComp.vue')
    // },
    // {
    //   path: '/java',
    //   name: 'java',
    //   component: () => import('../views/EXPERTISE/JavaComp.vue')
    // },
    // {
    //   path: '/node',
    //   name: 'node',
    //   component: () => import('../views/EXPERTISE/NodeComp.vue')
    // },
    // {
    //   path: '/pyton',
    //   name: 'pyton',
    //   component: () => import('../views/EXPERTISE/PytonComp.vue')
    // },
    // {
    //   path: '/mvp',
    //   name: 'mvp',
    //   component: () => import('../views/EXPERTISE/MvpComp.vue')
    // },
    // {
    //   path: '/ios',
    //   name: 'ios',
    //   component: () => import('../views/EXPERTISE/IosComp.vue')
    // },
    // {
    //   path: '/android',
    //   name: 'android',
    //   component: () => import('../views/EXPERTISE/AndroidComp.vue')
    // },
    // {
    //   path: '/cross',
    //   name: 'cross',
    //   component: () => import('../views/EXPERTISE/CrossComp.vue')
    // },
    // {
    //   path: '/xamarin',
    //   name: 'xamarin',
    //   component: () => import('../views/EXPERTISE/XamarinComp.vue')
    // },
    // {
    //   path: '/flutter',
    //   name: 'flutter',
    //   component: () => import('../views/EXPERTISE/FlutterComp.vue')
    // },
    // {
    //   path: '/team',
    //   name: 'team',
    //   component: () => import('../views/COMPANY/Team.vue')
    // },
    // {
    //   path: '/enter',
    //   name: 'enter',
    //   component: () => import('../views/EnterMain.vue')
    // },
    // {
    //   path: '/health',
    //   name: 'health',
    //   component: () => import('../views/HealthMain.vue')
    // },
    // {
    //   path: '/cosmos',
    //   name: 'cosmos',
    //   component: () => import('../views/CosmosMain.vue')
    // },
    // {
    //   path: '/crypto',
    //   name: 'crypto',
    //   component: () => import('../views/CryptoMain.vue')
    // },
    // {
    //   path: '/signIn',
    //   name: 'signIn',
    //   component: () => import('../views/SignIn.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/About.vue')
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top when switching routes
    return { top: 0 };
  }
});

export default router;
