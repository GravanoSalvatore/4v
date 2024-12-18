<template>
    <br/><br/>
      <div class="container">
        <div class="overlay">
          <div class="content ">
            <!-- <h1 class="text-white">Welcome to 4V.COIN</h1> -->
            <!-- <p> Зарабатывай FVX!</p> -->
            <div class="timer">
              <a class="text-white" href="https://t.me/FourVrobot/FourVworldNews?startapp" target="_blank">   
                <h1 class="text-center fw-bold">4V.APES</h1>
                <p class="">{{ $t('Over the next 3 months') }}</p></a>
        <!-- <p>{{ $t('Dont miss your chance') }}</p> -->
       
  <!-- <button class="btn-danger1">{{ $t('Get FVX') }}</button> -->

      </div>
        
        <!-- <h5><span style="font-size: 25px;">Total mined: {{ counter }}<img style="width: 30px;" src="../../../assets/img/44.png"> </span></h5> -->
         

          </div>
        </div>
      </div>
    </template>
    
    <script>
    import videoFile from '../COMPANY/Video.vue'
    export default {
      data() {
    return {
      counter: 8888, // Начальное значение
      intervalId: null,
      
      
    };
  },
 
      mounted() {
    this.startCounter();
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // Останавливаем таймер при удалении компонента
  },
  methods: {
    startCounter() {
      this.intervalId = setInterval(() => {
        this.counter += 8; // Увеличиваем значение на 3 каждую секунду
      }, 1000);
    },
    getColor(index) {
      return this.colors[index % this.colors.length];
    }
  },
      components: { videoFile },
    };
    </script>
    
    <style scoped>
    a{
      font-weight: bold;
      /* color: cornflowerblue; */
      text-decoration: none;
      color: white;
    }
    .timer {
      padding-right: 50px;
      padding-left: 50px;
  text-align: center;
  font-size: 2.5rem;
  color: white;
  /* background-color: #333; */
  /* padding: 20px; */
 
}
    .btn-danger1 {
      /* margin-left: 50px; */
      color: white;
      font-weight: bold;
      font-size: 10px;
      z-index: 100;
      padding: 5px 10px;
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
    
    .container {
  width: 100%;
  height: 0;
  padding-top: 100%; /* Высота изображения будет равна 40% от ширины, регулируйте это для нужной пропорции */
  position: relative;
  overflow: hidden;
}

.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/img/www.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

    p{
        /* font-size:14px; */
      bottom: 100px;
    }
    .container:hover {

    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      /* background-color: rgba(9, 21, 32, 0.6); */

      /* padding-left: 40px; */
      border-radius: 25px;
      transition: background-color 0.5s ease;
    }
    
    .container:hover .overlay {
      background-color: rgba(9, 21, 32, 0.6);

    }
    
    .content {
      z-index: 2;
      position: absolute;
     
      /* left: 40px; */
      opacity: 0;
      /* visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease; */
    }
    
    .container:hover .content {
      opacity: 1;
      visibility: visible;
    }
    
    /* h1 {
      
      font-size: 3rem;
      margin-bottom: 20px;
    } */
    p{
        font-size: 35px;
      }
    @media (max-width: 1050px) {
      p{
        font-size: 25px;
      }
    }
    @media (max-width: 768px) {
      p{
        font-size: 22px;
      }
    }
    @media (max-width: 520px) {
      p{
        font-size: 18px;
      }
    }
    @media (max-width: 450px) {
      p{
        font-size: 14px;
      }
    }
    @media (max-width: 350px) {
      p{
        font-size: 12px;
      }
    }
    @media (max-width: 500px) {
     
  .container {

    padding-top: 150%; /* Увеличьте значение, чтобы изображение лучше подстраивалось на узких экранах */
  }

  

  .btn-danger1 {
    font-size: 9px; /* Уменьшите размер текста кнопки */
    padding: 4px 8px; /* Уменьшите внутренний отступ кнопки */
   
  }

  .content {
    
    top: 10%;
    /* Поднимите текст и кнопку немного выше */
  }

  
}

    </style>
    