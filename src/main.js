

// src/main.js
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n'; // Импортируем i18n
import i18nPlugin from './i18nPlugin'; // Импортируем плагин

const app = createApp(App);

app.use(router);
app.use(i18n); // Подключаем i18n
app.use(i18nPlugin); // Подключаем плагин

app.mount('#app');

console.log('App mounted with i18n locale:', i18n.global.locale.value); // Логирование
