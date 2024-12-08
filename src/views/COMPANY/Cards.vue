<template>
    <div class="container my-4">
      <h3 style=" " class="text-center mb-3 ">
       {{ $t('Powerful tools and integrations') }}
      </h3>
      <h5 class="text-white-50 text-center">
       {{ $t('Convenient tools') }} </h5>
  
      <div class="row">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="col-md-4 my-2"
          :class="{ 'visible': isVisible[index] }"
          ref="card"
        >
          <div class="card b bg-dark text-white">
            <img :src="card.imgSrc" class="card-img b img-fluid" alt="..." style="height: 200px; object-fit: cover;">
            <div class="card-img-overlay d-flex flex-column justify-content-end" style="background: rgba(0, 0, 0, 0.1); transition: background 0.3s;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: [], // Для отслеживания видимости каждой карточки
        cards: [
          { imgSrc: "https://media.kasperskydaily.com/wp-content/uploads/sites/90/2024/08/27171521/telegram-privacy-security-backup-aug2024-featured.jpg" },
          { imgSrc: "https://cdn6.aptoide.com/imgs/c/7/6/c7644008f58970f3d495d2d68958652a_fgraphic.png" },
          { imgSrc: "https://i.macuser.ua/article/356.jpg?_=1485872663" },
          { imgSrc: "https://martech.org/wp-content/uploads/2016/12/instagram-logo-gradient3-ss-1920.jpg" },
          { imgSrc: "https://web-promo.ua/wp-content/uploads/2024/02/facebook-76536_1280.png" },
          { imgSrc: "https://www.cmswire.com/-/media/effe75a4f8a0449698f68e8896c38d1c.ashx" },
        //   { imgSrc: "https://blog.bitnovo.com/wp-content/uploads/2021/01/Que%CC%81-es-Polkadot_Mesa-de-trabajo-1-1-scaled-1.jpeg" },
        //   { imgSrc: "https://www.coinkolik.com/wp-content/uploads/2022/09/cardano-yetkilisi.jpg" },
        //   { imgSrc: "https://miro.medium.com/v2/resize:fit:1200/1*Lh2rc2kYjh7FxmpO4xr2gg.jpeg" }
        // 
        ],
      };
    },
    mounted() {
      this.initObserver();
    },
    methods: {
      // Инициализация Intersection Observer
      initObserver() {
        const options = {
          threshold: 0.1, // Карточка считается видимой, если хотя бы 10% её площади видны
        };
        const observer = new IntersectionObserver(this.handleIntersect, options);
        
        this.$refs.card.forEach((card, index) => {
          observer.observe(card);
          this.isVisible.push(false); // Изначально все карточки скрыты
        });
      },
      // Обработчик события пересечения
      handleIntersect(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(this.$refs.card).indexOf(entry.target);
            this.isVisible[index] = true; // Делаем карточку видимой
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Изначально карточки скрыты и анимируются при появлении */
  .col-md-4 {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 10s ease-out, transform 10s ease-out;
  }
  
  /* Когда карточка становится видимой */
  .col-md-4.visible {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  