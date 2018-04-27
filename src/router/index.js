import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Test from '@/components/Test'
import Card from '@/components/Card'
import vueResource from 'vue-resource'

Vue.use(vueResource)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Users
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/card',
      component: Card
    }
  ]
})

new Vue({
  router, 
  template: 
  `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/card">Card</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `,
}).$mount('#app')
