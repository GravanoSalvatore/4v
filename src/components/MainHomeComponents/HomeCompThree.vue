<template lang="">


<section class="video-section">
    <video autoplay muted loop playsinline>
      <source src="https://assets.mixkit.co/videos/29351/29351-720.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="video-overlay">
      <!-- Счётчик терабайт -->
      <!-- <div class="tb-counter"> <span id="tb-count">0</span> TB</div> -->

      <div class="centered-text">
        <h1>{{$t('video title')}}</h1>
      </div>
      <!-- <div class="mt-5">
        <router-link to="/about" class="" href="">
          <button class="btn-danger1" type="button">{{$t('START')}}</button>  
        </router-link>  
        <router-link to="/blog">  
          <button class="btn-danger1" type="button">{{$t('RESOURCES')}}</button>
        </router-link>
      </div> -->
    </div>
</section>

  <div style="background-color:#091520;" class="projects-section  text-white p-0" id="projects">
    
    <div style="" class=" px-4 px-lg-5">
     
      <div class=" mb-5">
       
        <br />
        <h2 style="font-size: 4.8vh" class="text-center "> {{$t('Cutting-edge technology for news and content')}}</h2>
        <p
          class="text-white text-center  mx-auto mt-2 mb-5 "
          style="font-size: 2.8vh"
        >
       {{$t('4V is an innovative platform')}}
        </p>
      </div>
      
    
      
  <div>
    <div>
  <!-- Анимация для первой row -->
  <div  class="row gx-0 mb-4 mb-lg-5 animate__animated animate-on-scroll">
    <div class="col-lg-6 ">
      
      
     <a href="https://4v.news/" target="_blank" ><img
        class="img-fluid img"
        src="../../../assets//img/4vnews.png"
        alt="..."
      /></a>
    </div>

    <div class="col-lg-6 animate__animated animate__fadeInLeft">
      <div class="h-100 project">
        <div class="d-flex h-100">
          <div class="project-text text-center w-100 my-auto text-lg-left">
            <p style="font-size: 17px;" class="mb-0 text-white-50">
             {{$t('With 4V.NEWS')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div class="col-12 lightning-line"
          
        ></div>
        <div class="row gx-0 mb-4 mb-lg-5 animate__animated animate-on-scroll">
    <div class="col-lg-6 justify-content-center align-items-center">
     <a href="https://nuxtrobotdocker.vercel.app/" target="_blank"> <img
        class="img-fluid img"
        src="../../../assets/img/4vrobot.png"
        alt="..."
      /></a>
        </div>
 <div class="col-lg-6">
          <div class="h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-right">
            <p style="font-size: 17px" class="mb-0 text-white-50">
            {{$t('4V.ROBOT is an indispensable assistant for channel')}} </p>
          </div>
        </div>
      </div>
        </div>
      </div>
  <!-- Анимация для второй row -->
  <!-- <div class="row gx-0 animate__animated animate-on-scroll">
    <div class="col-lg-6 ">
      <div class="h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-right">
            <p style="font-size: 17px" class="mb-0 text-white-50">
            {{$t('4V.ROBOT is an indispensable assistant for channel')}} </p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="col-lg-6 order-lg-first animate__animated animate__fadeInLeft">
      <img
        class="img-fluid img"
        src="../../../assets/img/4vrobot.png"
        alt="..."
      />
    </div>
  </div> -->
  <div
        
        class="col-12 lightning-line"
        
      ></div>
  <div  class="row gx-0 mb-4 mb-lg-5 animate__animated animate-on-scroll">
    <div class="col-lg-6 ">
      
      
      <img
        class="img-fluid img"
        src="../../../assets//img/bot.png"
        alt="..."
      />
    </div>

    <div class="col-lg-6 animate__animated animate__fadeInLeft">
      <div class="h-100 project">
        <div class="d-flex h-100">
          <div class="project-text text-center w-100 my-auto text-lg-left">
            <p style="font-size: 17px;" class="mb-0 text-white-50">
             {{$t('4V is an innovative platform')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div class="col-12 lightning-line"
          
        ></div>
  <!-- Анимация для второй row -->
  <div class="row gx-0 mb-4 mb-lg-5 animate__animated animate-on-scroll">
    <div class="col-lg-6 justify-content-center align-items-center">
          
          <img style="" class="img-fluid img" src="../../../assets/img/4vcrypto.png" alt="..." />
        </div>
 <div class="col-lg-6">
          <div class=" h-100 project">
            <div class="d-flex h-100">
              <div class="project-text text-center w-100 my-auto text-lg-left">
                <p style="font-size: 17px" class="mb-0 text-white-50 ">
                 {{$t('4V.CRYPTO is our company’s')}}
                </p>
                <p
                  style="font-size: 17px"
                  class="mb-0 text-white-50 fw-bold"
                ></p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
 
  
  
  
  
  
  
  
  <div class="col-12 lightning-line"
          
        ></div>
</div>

  </div>




      <br /><br />
    
      <!-- <h2 class="text-white-50  text-center">Решение</h2> -->
      <!-- <div class="row gx-0 animate__animated animate-on-scroll">
        <div class="col-lg-6 ">
      <img
        class="img-fluid img"
        src="../../../assets/img/bridge.png"
        alt="..."
      />
    </div>
   
    <div class="col-lg-6 order-lg-first animate__animated animate__fadeInLeft">
      <div class="h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-right">
            <p style="font-size: 17px" class="mb-0 text-white-50">
            {{$t('The best solution for news')}} </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div  class="row gx-0 mb-4 mb-lg-5 animate__animated animate-on-scroll">
    <div class="col-lg-6 ">
      
      
    <router-link to="/about" > <img
        class="img-fluid img"
        src="../../../assets//img/bridge.png"
        alt="..."
      /></router-link>
    </div>

    <div class="col-lg-6 animate__animated animate__fadeInLeft">
      <div class="h-100 project">
        <div class="d-flex h-100">
          <div class="project-text text-center w-100 my-auto text-lg-left">
            <p style="font-size: 17px;" class="mb-0 text-white-50">
              BridgeX это революционная платформа, предназначенная для решения одного из самых актуальных вызовов, стоящих перед современным блокчейн-сообществом: кроссчейн взаимодействие и конфиденциальность. 
               <!-- {{$t('4V.NEWS is an innovative platform that combines')}} -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div
        
          class="col-12 lightning-line"
          
        ></div>
        <div  class="row gx-0 mb-4 mb-lg-5 animate__animated animate-on-scroll">
    <div class="col-lg-6 ">
      
      
       <img style="" class="img-fluid img" src="../../../assets//img/4vcoin.png" alt="..." />
    </div>

    <div class="col-lg-6 animate__animated animate__fadeInLeft">
      <div class=" h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white fw-bold"><a></a></h4>
                <p style="font-size: 17px" class="mb-0 text-white-50 ">
                  {{$t('4V.coin is a token on the TON')}}
                </p>
              </div>
            </div>
          </div>
    </div>
  </div>
      <!-- <div class="row gx-0 animate__animated animate-on-scroll">
       
        
        <div class="col-lg-6 animate__animated animate__fadeInLeft">
          <img style="" class="img-fluid img" src="../../../assets//img/4vcoin.png" alt="..." />
        </div>
        <div class="col-lg-6 order-lg-first animate__animated animate__fadeInLeft">
          <div class=" h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white fw-bold"><a></a></h4>
                <p style="font-size: 17px" class="mb-0 text-white-50 ">
                  {{$t('4V.coin is a token on the TON')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div
        
          class="col-12 lightning-line"
          
        ></div>
    </div>
    
    <!-- <videoFile/> -->
    <div class="card1">
      <div class="marquee">
    <p style="font-size:14px">{{$t('We are constantly')}}</p>
  </div>
    <p
        class="text-white-50 text-center  mx-auto  container "
        style="font-size: 18px"
      ><br/><br/>
      {{$t('Innovative approach')}}
       </p>
    <div class="container px-4 px-lg-5" >
      <div class="container px-4 px-lg-5 ">
    <div class="card-group mb-4">
      <div class="card image-card">
        <div class="overlay"></div>
        <img src="https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" class="card-img-top" alt="..." />
        <div class="card-body image-text">
          <!-- <h5 class="card-title">BridgeX</h5> -->
       <a class="text-white" href="https://nuxtrobotdocker.vercel.app/" target="_blank" >
        <p style="font-size:14px" class="card-text opas">
          <h3>4V.ROBOT<span class="text-info" style="font-size: 14px;">Beta v1.0</span></h3>
            {{$t('4V.ROBOT integrates')}}
          </p> </a>
          <!-- <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p> -->
        </div>
      </div>
     

      <div class="card image-card">
        <div class="overlay"></div>
        <img src="https://pixelplex.io/wp-content/uploads/2023/02/how-to-create-a-dao-main-1600.jpg" class="card-img-top" alt="..." />
        <div class="card-body image-text">
        <p style="font-size:14px" class="card-text opas">
      {{$t('The DAO')}}    </p>
        </div>
      </div>

      <div class="card image-card">
        <div class="overlay"></div>
        <img src="../../../assets/img/ape.png" class="card-img-top " alt="..." />
        <div class="card-body image-text">
          <!-- <h5 class="card-title">zk-SNARKs</h5> -->
          <a class="text-white" href="https://t.me/FourVrobot/FourVworldNews?startapp" target="_blank">   
            <p style="font-size:14px" class="card-text opas ">
            4V.COIN(FVX)
            <br/>{{$t('you can now mine')}}
          </p></a>
          <!-- <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p> -->
        </div>
      </div>
    </div>
      </div>
     
              </div>
              <p
        class="text-white-50 text-center  mx-auto  container"
        style="font-size: 18px"
      >
     {{$t('We offer a wide range of products')}}
     
      </p><br/>
    </div>   
     
    <baner/>

  <grid/>
  
  <div class="car">  
  <baner4/>




  <cards/>







  <div class="sponsors-container">
    <div class="sponsor" v-for="(logo, index) in sponsorLogos" :key="index">
      <img :src="logo.src" :alt="logo.alt" class="sponsor-logo" />
    </div>
  </div>


  

    </div>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <!-- <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button> -->
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/004/216/949/original/3d-world-news-background-looped-video.jpg" class="d-block w-100" alt="..." style="object-fit: cover; height: 500px;">
      <div class="carousel-caption d-block" style="z-index: 2;">
        <!-- <h5>4V.NEWS</h5> -->
        <p>{{$t('With 4V.NEWS')}}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3cfe4bc9-f1d4-447b-805d-cd4a97fbdb45_1280x720.jpeg" class="d-block w-100" alt="..." style="object-fit: cover; height: 500px;">
      <div class="carousel-caption d-block text-white" style="z-index: 2;">
        <h3 class="">{{$t('GLIDE')}}</h3>
        <p>{{$t('Our sophisticated')}}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://bankinghub.de/wp-content/uploads/2023/07/target-operating-model-digitales-zielbild-asset-manager-bankinghub.jpg" class="d-block w-100" alt="..." style="object-fit: cover; height: 500px;">
      <div class="carousel-caption d-block" style="z-index: 2;">
        <!-- <h5>4V.ROBOT</h5> -->
        <p>{{$t('4V.ROBOT is an indispensable assistant for channel')}}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-1200-80.jpg" class="d-block w-100" alt="..." style="object-fit: cover; height: 500px;">
      <div class="carousel-caption d-block" style="z-index: 2;">
        <!-- <h5> 4V.NEWS</h5> -->
        <p>{{$t('4V.NEWS is more than just a news aggregator')}}</p>
      </div>
    </div>
    <!-- Дополнительные слайды с теми же картинками -->
   
 
    <!-- <div class="carousel-item">
      <img src="../../../assets/img/www.webp" class="d-block w-100" alt="..." style="object-fit: cover; height: 500px;">
      <div class="carousel-caption d-block " style="z-index: 2;">
        <h5 class="">Cross-chain</h5>
        <p>Простота использования Пользователям не нужно разбираться в сложных процессах кросс-чейн транзакций или взаимодействовать с различными мостами вручную. VELOS автоматически обрабатывает все этапы транзакции, включая приватность.</p>
      </div>
    </div> -->
    <div class="carousel-item">
      <img src="https://zn.ua/img/forall/u/495/25/Depositphotos_552045368_XL.jpg" class="d-block w-100" alt="..." style="object-fit: cover; height: 500px;">
      <div class="carousel-caption d-block" style="z-index: 2;">
        <h3>DAO</h3>
        <p>{{$t('FVX owners')}}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.ctfassets.net/k3n74unfin40/3rsEvU9b9SlcSEdKpXoaoV/c87545bf8dfc071e9dd3c6062bcecc3f/GettyImages-1364859722.jpg" class="d-block w-100" alt="..." style="object-fit: cover; height: 500px;">
      <div class="carousel-caption d-block" style="z-index: 2;">
        <h3>4V.ROBOT</h3>
        <p>{{$t('The best solution')}}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="card2">

   
     
              <p
        class="text-white text-center text-uppercase mx-auto  container"
        style="font-size: 18px"
      ><br/>
     {{$t('Aggregating news from different')}}


      </p>
      
      <!-- <div class="container px-4 px-lg-5 ">
    <div class="card-group mb-4">
     
      <div class="card image-card " style="min-height:300px">
        <div class="overlay"></div>
        <img style="min-height:300px" src="../../../assets/img/nodes.jpg" class="card-img-top" alt="..." />
        <div class="card-body image-text">
       
        </div>
      </div>
     
     
     
    </div>
    
     
              </div> -->

              <p
        class="text-white text-center text-uppercase mx-auto  container"
        style="font-size: 18px"
      >
      {{$t('Development and training')}}

      </p>
              <baner2/>
<p class="text-white  text-center  mx-auto  container"
style="font-size: 18px">Интеграция с 4V.News.
{{$t('Integration with 4V.News.')}}   </p>          

<div class="container">
  <div class="row">
    <!-- Первая карточка -->
    <!-- <div class="col-md-12 my-2 ">
      <div class="card b bg-dark text-white overlay-card ">
        <img src="https://media.licdn.com/dms/image/v2/D5612AQHKgAoyYuoXKw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673428559054?e=2147483647&v=beta&t=IimrgDVmoJMxPBoZ6GyvjETH_CFvZkXtxFf6fERMPYM" class="card-img b img-fluid" alt="..." style="height:250px; object-fit: cover;">
        <div class="card-img-overlay d-flex flex-column justify-content-end overlay-content">

          <p style="font-size:14px;" class="card-text">Одним из главных преимуществ модели DAO является её прозрачность и децентрализация.</p>
        </div>
      </div>
    </div> -->

    <!-- Вторая карточка -->
    <div class="col-md-6 my-2">
      <div class="card b bg-dark text-white overlay-card">
        <img src="https://img.freepik.com/premium-vector/social-chat-logo-business-chat-logo-people-family-together-human-unity-chat-bubble-logo-template_658057-68.jpg" class="card-img b img-fluid" alt="..." style="height:250px; object-fit: cover;">
        <div class="card-img-overlay d-flex flex-column justify-content-end overlay-content">
          <!-- <h5 class="card-title">Velos Nodes</h5> -->
          <p style="font-size:14px;" class="card-text">{{$t('For maximum convenience')}}</p>
        </div>
      </div>
    </div>

    <!-- Третья карточка -->
    <div class="col-md-6 my-2">
      <div class="card b bg-dark text-white overlay-card">
        <img src="https://swisscognitive.ch/wp-content/uploads/2020/09/the-4-top-artificial-intelligence-trends-for-2021.jpeg" class="card-img b img-fluid" alt="..." style="height:250px; object-fit: cover;">
        <div class="card-img-overlay d-flex flex-column justify-content-end overlay-content">
          <!-- <h5 class="card-title">GLIDE (Global Localized Intelligent Dynamic Engine).</h5> -->
          <p style="font-size:14px;" class="card-text">{{$t('This system')}} </p>
        </div>
      </div>
    </div>
  </div>
</div>

              <p
        class="text-white  text-center  mx-auto  container mt-2"
        style="font-size: 18px"
      >
     {{$t('Users who own FVX tokens')}}
      </p>
      <br/>
  </div>
</div>
  <slider/>
<baner3/>
</template>

<script>
// import sponsor1 from '../../../assets/img/circle.webp';
import sponsor2 from '../../../assets/img/discord.png';
import sponsor3 from '../../../assets/img/g.png';
import sponsor4 from '../../../assets/img/meta.png';
// import sponsor5 from '../../../assets/img/stripe.webp';
// import sponsor6 from '../../../assets/img/shop.png';
import sponsor7 from '../../../assets/img/tg.png';
import sponsor8 from '../../../assets/img/ai.png';

import animation from '../../views/COMPANY/Animation.vue'
import grid from '../../views/COMPANY/Grid.vue'
import cards from '../../views/COMPANY/Cards.vue'
import videoFile from '../../views/COMPANY/Video.vue'
import slider from '../../views/COMPANY/Slider.vue'
import price from '../../views/COMPANY/Price.vue'
import baner from '../../views/COMPANY/Baner.vue'
import baner2 from '../../views/COMPANY/Baner2.vue'
import baner3 from '../../views/COMPANY/Baner3.vue'
import baner4 from '../../views/COMPANY/Baner4.vue'
import five from '../../components/MainHomeComponents/HomeCompFive.vue';
export default {
//   mounted() {
//     // let tbCountElement = document.getElementById("tb-count");
//     // let tbCount = 0;

//     // Фейковый прирост данных (например, 0.01 терабайта каждую секунду)
//     // setInterval(() => {
//     //   tbCount += 0.01; // Увеличиваем на 0.01
//     //   tbCountElement.textContent = tbCount.toFixed(2); // Обновляем счётчик на странице
//     // }, 1000); // Обновление каждую секунду
//   const isMobile = window.innerWidth <= 768;

//   if (!isMobile) {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate__fadeInRight");
//         } else {
//           entry.target.classList.remove("animate__fadeInRight"); // Удаляем класс, если элемент вышел из зоны видимости
//         }
//       });
//     });

//     document.querySelectorAll(".animate-on-scroll").forEach((el) => {
//       observer.observe(el);
//     });
//   }
// }
// mounted() {
//   const isMobile = window.innerWidth <= 768;

//   if (!isMobile || ('IntersectionObserver' in window)) {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate__fadeInRight");
//         } else {
//           entry.target.classList.remove("animate__fadeInRight");
//         }
//       });
//     });

//     document.querySelectorAll(".animate-on-scroll").forEach((el) => {
//       observer.observe(el);
//     });
//   } else {
//     // Если IntersectionObserver не поддерживается или устройство мобильное
//     document.querySelectorAll(".animate-on-scroll").forEach((el) => {
//       el.classList.add("animate__fadeInRight");
//     });
//   }
// }
mounted() {
  const isMobile = window.innerWidth <= 768;

  if (!isMobile || ('IntersectionObserver' in window)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("animated")) {
            entry.target.classList.add("animate__fadeInRight", "animated");
          }
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  } else {
    // Для мобильных устройств или если IntersectionObserver не поддерживается
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("animate__fadeInRight");
    });
  }
}

,
methods: {
    getColor(index) {
      return this.colors[index % this.colors.length];
    }
  },
  data () {
      return {
        colors: ['aqua', 'red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink', 'brown'],
        sponsorLogos: [
        // { src: sponsor1, alt: 'Sponsor 1' },
        { src: sponsor2, alt: 'Sponsor 2' },
        { src: sponsor3, alt: 'Sponsor 3' },
        { src: sponsor4, alt: 'Sponsor 4' },
        // { src: sponsor5, alt: 'Sponsor 5' },
        // { src: sponsor6, alt: 'Sponsor 6' },
        { src: sponsor7, alt: 'Sponsor 7' },
        { src: sponsor8, alt: 'Sponsor 8' }
      ]
      }
    },
    components:{
        five,price,baner,baner2,slider,videoFile,cards,grid,baner3,baner4,animation
    }
};
</script>

<style lang="scss" scoped>
 @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

//  .card1 {
//   position: relative;
//   border-radius: 15px;
//   transition: box-shadow 0.3s ease-in-out;
//   overflow: hidden; /* Чтобы содержимое не выходило за пределы */
// }
.lightning-line {
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  // opacity: 0;
  transition: opacity 0.6s ease-in-out;
  margin: 10px 0;
}
.tb-counter {
  position: absolute;
  top: 200px;
  left: 20px;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  // background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
}
.card1 {
  position: relative;
  border-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden; /* Чтобы содержимое не выходило за пределы */
}

/* Тень и бегущая строка появляются при ховере */
.card1:hover {
  /* Внутренняя бирюзовая тень */
  box-shadow: inset 0 10px 30px rgb(31, 153, 234);
}

.card1:hover .marquee {
  opacity: 1;
  top: 0; /* Показываем бегущую строку при ховере */
}

.marquee {
  position: absolute;
  top: -30px; /* Строка изначально спрятана за верхним краем */
  left: 0;
  width: 100%;
  height: 30px;
  
  overflow: hidden;
  z-index: 10; /* Выше основного контента */
  transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0; /* Изначально скрыта */
}

.marquee p {
  position: absolute;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
  font-size: 14px;
  color: white; /* Цвет текста */
  // font-weight: bold;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

 .card3 {
  border-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
}

.card3:hover {
  /* Тень активируется при наведении */
  box-shadow: inset 0 10px 30px blue
}
.card2 {
  border-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
}

.card2:hover {
  /* Тень активируется при наведении */
  box-shadow: inset 0 10px 30px purple;
}

/* Динамическое создание стилей для каждой карточки */
.hover-card1-0:hover {
  --shadow-color: aqua;
}
.hover-card1-1:hover {
  --shadow-color: red;
}
.hover-card1-2:hover {
  --shadow-color: green;
}
.hover-card1-3:hover {
  --shadow-color: blue;
}
.hover-card1-4:hover {
  --shadow-color: purple;
}
.hover-card1-5:hover {
  --shadow-color: orange;
}
.hover-card1-6:hover {
  --shadow-color: yellow;
}
.hover-card1-7:hover {
  --shadow-color: pink;
}
.hover-card1-8:hover {
  --shadow-color: brown;
}












 .card-title, .card-text {
  
    font-size: clamp(14px, 2.5vw, 18px); /* Динамическое изменение размера текста */
  }
 .card:hover .overlay {
  opacity: 1; /* Показываем затемнение при наведении */
}

.card:hover .image-text {
  opacity: 1; /* Показываем текст при наведении */
}

.card:hover .card-img-top {
  filter: brightness(40%); /* Затемнение изображения при наведении */
  transform: scale(1.05); /* Увеличение изображения при наведении */
}
.overlay-card {
  position: relative;
  transition: transform 0.3s ease, background 0.3s ease;
}

.overlay-card img {
  transition: opacity 0.3s ease;
}

/* Добавляем затемнение при наведении */
.overlay-card:hover img {
  opacity: 0.7;
}

/* Текст скрыт по умолчанию */
.overlay-content {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Показываем текст при наведении */
.overlay-card:hover .overlay-content {
  opacity: 1;
  visibility: visible;
}

.card-img-overlay {
  background: rgba(0, 0, 0, 0.5); /* Начальное небольшое затемнение */
}

/* При наведении усиливаем затемнение */
.overlay-card:hover .card-img-overlay {
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.7); /* Более сильное затемнение */
}


.btn-danger1 {
       
       color: white;
        font-weight: bold;
        margin: 9px;
        font-size: 13px;
      
        z-index: 100;
        padding: 10px 20px;
        border: 1px solid rgb(7, 122, 154);
        border-radius: 17px;
        background-color:#091520; /* Более тёмный оттенок с фиолетово-синим */
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
// .opas:hover{
//   opacity: 1;
// }
a{
  text-decoration: none;
}
.img {
  border-radius: 25px;
}

.animate__animated {
  animation-duration: 2s;
}

.animate__fadeInRight {
  animation-name: fadeInRight;
}

.animate__fadeInLeft {
  animation-name: fadeInLeft;
}

@keyframes fadeInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

 .card:hover img {
    opacity: 1;
  }
 
.sponsors-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; /* В случае, если экран меньше, чем ширина логотипов */
  gap: 20px;
  padding: 10px;
}

.sponsor-logo {
  width: 100px; /* Установите нужный размер логотипов */
  height: auto;
  max-width: 100%;
}
.carousel-item .carousel-caption {
    color: white;
    font-size: 1.25rem;
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 2;
    max-width: 80%;
    text-align: left;
  }

  /* Затемняем изображения */
  .carousel-item img {
    filter: brightness(60%);
  }

  .carousel-caption h5, .carousel-caption p {
    color: white; /* Цвет текста */
  }

  /* Медиазапрос для экранов больше 980px */
  @media (min-width: 980px) {
    .carousel-caption h5 {
      font-size: 2rem;
    }
    .carousel-caption p {
      font-size: 1.25rem;
    }
  }
  
.card{
  opacity: 1;
}



.card-title, .card-text {
  margin: 0;
  padding: 10px;
}

.video-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Высота на весь экран */
  overflow: hidden;
}
.video-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Высота видео на весь экран */
  overflow: hidden;
}

video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10; /* Обеспечиваем отображение поверх видео */
}

.centered-text {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  opacity: 0;
  animation: fadeIn 5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.video-overlay h1 {
    font-size: 5vw;
   font-weight: bold;
  // color: white;
}

.video-overlay p {
    font-size: 3vw; 
  color: white;
}

/* Остальной контент */
.projects-section {
  padding: 100px 0;
}
@media screen and (max-width: 1000px) {
  .card1 {
  /* Внутренняя бирюзовая тень */
  box-shadow: inset 0 10px 30px rgb(31, 153, 234);
}

.card1 .marquee {
  opacity: 1;
  top: 0; /* Показываем бегущую строку при ховере */
}
}
/* Адаптация для мобильных устройств */
@media screen and (max-width: 768px) {
  .video-overlay h1 {
    font-size: 9vw;
  }

  .video-overlay p {
    font-size: 5vw;
  }

  .projects-section h2 {
    font-size: 5vw;
  }

  .projects-section p {
    font-size: 5vw;
  }

  .projects-section {
    padding: 50px 0;
  }
}

@media screen and (max-width: 480px) {
  .video-overlay h1 {
    font-size: 5vw;
  }

  .video-overlay p {
    font-size: 5vw;
  }

  .projects-section h2 {
    font-size: 6vw;
  }

  .projects-section p {
    font-size: 5vw;
  }

  .projects-section {
    padding: 30px 0;
  }
}
.image-overlay {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: auto;
  z-index: 10; /* Ensure the image is on top of the video */
  text-align: center;
}

.image-overlay img {
  width: 100%;
  height: auto;
  display: block; /* Ensure the image displays */
}

.overlay-text {
  color: white;
  font-size: 1rem;
  margin-top: 10px;
}

.logo-img {
  max-width: 250px;
}
@media screen and (max-width: 480px) {
  .video-overlay h1 {
    font-size: 11vw;
  }

  .video-overlay p {
    font-size: 5vw;
  }

  .projects-section {
    padding: 30px 0;
  }
}
@media screen and (max-width: 320px) {
  .logo-img {
    max-width: 200px;
  }
}
.img{
  border-radius:25px;
}
.b{
  border-radius: 25px;
}
.image-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card-img-top {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease; /* Для плавного увеличения изображения */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Тонировка изображения */
  opacity: 0; /* Прячем затемнение */
  transition: opacity 0.5s ease; /* Плавное затемнение */
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
  text-align: center;
  opacity: 0; /* Прячем текст */
  transition: opacity 0.5s ease; /* Плавное появление текста */
}

.card:hover .overlay {
  opacity: 1; /* Показываем затемнение при наведении */
}

.card:hover .image-text {
  opacity: 1; /* Показываем текст при наведении */
}

.card:hover .card-img-top {
  // filter: brightness(35%); 
  transform: scale(1.05); 
}

</style>
