import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './css/main.css';
import './css/menubar.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
