



<template>
  <div class="slider-wrapper">
    <div class="slider" @mouseover="pauseSlider" @mouseleave="resumeSlider" @touchstart="pauseSlider" @touchend="resumeSlider">
   
      <!-- Генерация слайдов с разной высотой -->
      <div v-for="(group, index) in groupedSlides" :key="index" class="slider-item">
        <!-- Для больших блоков -->
        <template v-if="group.type === 'large'">
          <div class="overlay">
            <div class="dark-overlay"></div>
            <div class="text-content ">
              <h2 class="fw-bold">{{ group.slides[0].title }}</h2>
              <!-- <p>{{ group.slides[0].text }}</p> -->
            </div>
            <img :src="group.slides[0].src" :alt="`Slide ${index + 1}`" />
          </div>
        </template>

        <!-- Для маленьких блоков (два блока по 250px) -->
        <template v-else>
          <div class="double-small">
            <div class="small-block" v-for="(slide, smallIndex) in group.slides" :key="smallIndex">
              <div class="overlay">
                <div class="dark-overlay"></div>
                <div class="text-content">
                  <h2 class="fw-bold">{{ slide.title }}</h2>
                  <!-- <p>{{ slide.text }}</p> -->
                </div>
                <img :src="slide.src" :alt="`Slide ${index * 2 + smallIndex + 1}`" />
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pauseSlider() {
      const slider = document.querySelector(".slider");
      slider.style.animationPlayState = "paused";
    },
    resumeSlider() {
      const slider = document.querySelector(".slider");
      slider.style.animationPlayState = "running";
    }
  },
  data() {
    return {
      slides: [
        {
          src: "https://i0.wp.com/coinpasar.sg/wp-content/uploads/2023/09/day-1-highlights-of-token2049-crypto-event.jpg?fit=1250%2C500&ssl=1",
          title: "Blockchain Revolution",
          text: ""
        },
        {
          src: "https://startupregions.eu/wp-content/uploads/2018/04/Blockchain-Hackaton-Groningen-1.jpg",
          title: "4V.ROBOT",
          text: ""
        },
        {
          src: "https://media.licdn.com/dms/image/v2/D5622AQHFObDltzrSuQ/feedshare-shrink_800/feedshare-shrink_800/0/1727162565144?e=2147483647&v=beta&t=VP0_Mx7lLPCyQiMz4JZk45ifl1lVGr8niOGUYlJTl_U",
          title: "IT Evolution",
          text: ""
        },
        {
          src: "https://defabrique.nl/app/uploads/2017/05/Hackathon-DFE-1.jpg",
          title: "Data Science",
          text: ""
        },
        {
          src: "https://img.tradefest.io/filters:quality(80)/filters:format(.webp)/fit-in/1920x0/tradefest/events/pmvkeq-uqat4d",
          title: "HR & AI",
          text: ""
        },
        {
          src: "https://www.gtechme.com/wp-content/uploads/2022/11/Top-10-Blockchain-Events-In-The-UAE-banner.jpg",
          title: "Blockchain Technology",
          text: ""
        },
        {
          src: "https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2022/06/alphagamma-Blockchain-Futurist-Conference-2022-opportunities.jpeg",
          title: "Blockchain Revolution 2",
          text: ""
        },
        {
          src: "https://www.cryptotimes.io/wp-content/uploads/2024/02/Moscow-Will-Bring-Together-Major-Representatives-of-the-Crypto-Website.jpg",
          title: "Artificial Intelligence 2",
          text: ""
        },
        {
          src: "https://www.securities.io/wp-content/uploads/2023/11/Source-Blockchain-Africa-Conference-Speakers-Chirayu-Gandhi-Matthew-Higginson-Crypto-Events.jpg",
          title: "IT Evolution 2",
          text: "Driving the next digital transformation."
        },
        {
          src: "https://www.ashtonaddison.com/images/Ashton%20Addison%20WCC%20Finance%20Panel%20Vegas.jpg",
          title: "Data Science 2",
          text: "Unlocking insights from big data."
        },
        {
          src: "https://ninjapromo.io/wp-content/uploads/2022/10/Blockchain-Futurist-Conference-1.jpg",
          title: "HR & AI 2",
          text: "AI in human resources management."
        },
        {
          src: "https://static.startuptalky.com/2024/04/global-blockchain-show-dubai-vap-group-Startuptalky.jpg",
          title: "Blockchain Technology 2",
          text: "Securing transactions worldwide."
        },
        {
          src: "https://pbs.twimg.com/media/FcmlzQ-XgAYCtgJ.jpg:large",
          title: "Blockchain Revolution",
          text: "The future of finance is here."
        },
      ],
    };
  },
  computed: {
    groupedSlides() {
      const slides = [...this.slides];
      const result = [];
      let i = 0;

      while (i < slides.length) {
        if (i % 3 === 0) {
          // Добавляем большой блок (500px высотой)
          result.push({ type: 'large', slides: [slides[i]] });
          i += 1;
        } else {
          // Добавляем два маленьких блока (по 250px высотой)
          if (i + 1 < slides.length) {
            result.push({ type: 'small', slides: slides.slice(i, i + 2) });
          }
          i += 2;
        }
      }
      return result;
    }
  }
};
</script>

<style scoped>
.slider-wrapper {
  width: 100%;
  height: 500px; /* Высота слайдера */
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  height: 100%;
  width: 100%;
  animation: slide 240s linear infinite;
  animation-direction: alternate; /* Меняет направление анимации при каждой итерации */
}

.slider-item {
  flex: 0 0 auto;
  margin-right: 10px;
  position: relative;
}

.overlay {
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0); /* Затемнение */
  z-index: 1;
  transition: background 0.3s ease;
}

.text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.text-content h2 {
  font-size: 24px;
  margin: 0;
}

.text-content p {
  font-size: 16px;
}

/* Показываем текст при наведении */
.overlay:hover .text-content {
  opacity: 1;
  visibility: visible;
}

.overlay:hover .dark-overlay {
  background: rgba(0, 0, 0, 0.7); /* Увеличиваем затемнение при наведении */
}

/* Для больших блоков */
.slider-item.large {
  height: 500px;
}

/* Для двух маленьких блоков */
.double-small {
  display: flex;
  flex-direction: column;
  height: 500px;
}

.small-block {
  flex: 1;
  height: 50%;
  position: relative;
  border-bottom: 7px solid #091520; /* Добавляем разделительную полосу */
}

.small-block:last-child {
  border-bottom: none; /* Убираем полосу в последнем блоке */
}

.slider-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* Основная анимация */
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-300%);
  }
}

@media screen and (max-width: 768px) {
  .slider {
    animation: slide 480s linear infinite; /* Более медленная анимация 480 секунд для мобильных устройств */
  }
}

</style>
