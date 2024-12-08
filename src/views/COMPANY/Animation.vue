<template>
    <div>
      <!-- Логотип SVG -->
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="50"
        height="50"
        @mouseover="logoColor = 'red'"
        @mouseleave="logoColor = 'white'"
        class="rotating-logo"
      >
        <!-- Окружность с динамическим цветом -->
        <circle cx="100" cy="100" r="80" fill="transparent" :stroke="logoColor" stroke-width="4" />
        
        <!-- Изображение логотипа -->
        <image 
          x="50" 
          y="50" 
          width="100" 
          height="100" 
          xlink:href="../../../assets/img/log.png" 
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logoColor: 'white', // Изначально белый цвет
      };
    },
  };
  </script>
  
  <style scoped>
  /* Добавляем плавный переход цвета */
  svg {
    transition: stroke 0.5s ease, fill 0.5s ease, transform 0.5s ease; /* Плавный переход цвета и вращения */
  }
  
  /* Анимация вращения при наведении */
  .rotating-logo:hover {
    transform: rotate(360deg); /* Вращение логотипа на 360 градусов при наведении */
  }
  </style>
  