// src/plugins/i18nPlugin.js
export default {
    install(app) {
      app.config.globalProperties.$changeLanguage = function (lang) {
        console.log(`Changing language to: ${lang}`); // Логирование
        this.$i18n.locale = lang;
        console.log(`Current language: ${this.$i18n.locale}`); // Логирование
      };
    },
  };
  