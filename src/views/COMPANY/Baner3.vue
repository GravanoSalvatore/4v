<template>
    <div class="background-image-container">
      <div class="banner">
        <div class="banner-content text-center text-white-50">
          <p>
           <span class="fw-bold" style="color: cornflowerblue;"> 4V.Bridge<span class="text-danger">X</span></span> {{ $t('4V.NEWS is an innovative platform that combines') }}    </p>
          <div class="button-container">
           <router-link to="/about"> <button class="btn-danger1">{{ $t('Find out more') }}</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlurredBanner',
  };
  </script>
  
  <style scoped>
  .background-image-container {
    background-image: url('https://vault12.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTY0NzUyMC9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTc3MDc4NzIxMH0._mWOpVHC-nrbt3t76sNU7suyompheV9jRsEZfovFCxM/image.png?width=1200&height=600&coordinates=0%2C156%2C0%2C157'); 
    background-size: cover;
    background-position: center;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .banner {
    background-color: rgba(20, 20, 20, 0);
    backdrop-filter: blur(12px); 
    width: 90%;
    height: 70%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.4); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .banner-content {
    text-align: center;
  }
  
  p {
    font-size: 4vh; 
    /* color: white; */
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .btn-danger1 {
    bottom:50px;
  position: absolute;
    color: white;
    font-weight: bold;
    margin: 9px;
    font-size: 13px;
    z-index: 100;
    padding: 10px 20px;
    border: 1px solid rgb(7, 122, 154);
    border-radius: 17px;
    background-color: #091520;
    background-size: 200% 200%;
    box-shadow: 0px 5px 10px rgba(77, 75, 75, 0.6), inset 0px -2px 8px rgba(255, 255, 255, 0.2);
    transform: perspective(500px) translateZ(30px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .btn-danger1:hover {
    background-color: #313a41;
    transform: perspective(500px) translateZ(20px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.8), inset 0px -3px 12px rgba(255, 255, 255, 0.2);
  }
  
  .btn-danger1:active {
    transform: perspective(500px) translateZ(5px);
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4), inset 0px -1px 5px rgba(255, 255, 255, 0.1);
  }
  
  /* Медиа-запросы для адаптации под мобильные устройства */
  @media (max-width: 768px) {
    .banner {
      width: 100%;
      height: 60%;
      padding: 15px;
    }
  
    p {
      font-size: 3vh; /* Уменьшаем шрифт для мобильных */
    }
  
    .btn-danger1 {
      font-size: 12px; /* Чуть уменьшаем кнопку на мобильных */
    }
  }
  
  @media (max-width: 480px) {
    p {
      font-size: 2.2vh; /* Еще меньше для очень маленьких экранов */
    }
  
    .btn-danger1 {
      font-size: 11px;
    }
  }
  </style>
  