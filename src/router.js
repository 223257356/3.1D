import { createRouter, createWebHistory } from 'vue-router';

import myHome from './views/myHome.vue';
import MyCart from './views/MyCart.vue';
import myCheckout from './views/myCheckout.vue';
import myProducts from './views/myProducts.vue';
import myLocation from './views/myLocation.vue';
import myChatBot from './views/myChatBot.vue';

const routes = [
    { path: '/', name: 'home', component: myHome },
    { path: '/products', name: 'products', component: myProducts },
    { path: '/cart', name: 'cart', component: MyCart },
    { path: '/checkout', name: 'checkout', component: myCheckout },
    { path: '/location', name: 'location', component: myLocation },
    { path: '/furnychat', name: 'chatbot', component: myChatBot }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
