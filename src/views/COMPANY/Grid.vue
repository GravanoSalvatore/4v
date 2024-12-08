

<!-- <template>
  <div class="container my-4">
    <div class="row">
      <div class="col-md-4" v-for="(card, index) in cards" :key="index">
        <div 
          class="card  mb-4" 
          :style="{ backgroundColor: 'hsl(214, 37%, 7%)' }" 
          :class="['hover-card', `hover-card-${index}`]"
        >
          <div class="card-body">
            <h5 class="card-title">
              <span :style="{ color: getColor(index), 'font-size': '30px', 'line-height': '1.5' }">|</span>{{ card.title}}
            </h5>
            <p class="card-text">{{ $t(card.description) }}</p>
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
      counter: 888, // Начальное значение
      intervalId: null,
      cards: [
        { title: '4V.WEB 3.0', description: '4V.WEB 3.0' },
        { title: '4V.DEX', description: '4V.DEX' },
        { title: '4V.ROBOT', description: '4V.ROBOT' },
        { title: '4V.CRYPTO', description: '4V.CRYPTO' },
        { title: 'DISTRIBUTOR (Automatic Content Distributor)', description: 'DISTRIBUTOR (Automatic Content Distributor)' },
        { title: 'CONTENTWISE (Content Wise Engine)', description: 'CONTENTWISE (Content Wise Engine)' },
        { title: '4V.COIN', description: '4V.COIN' },
        { title: 'DAO', description: 'DAO' },
        { title: 'SMARTSHARE (Intelligent Sharing Protocol)', description: 'SMARTSHARE (Intelligent Sharing Protocol)' },
        { title: '4V.DEFI', description: '4V.DEFI' },
        { title: 'GLIDE(Global Localized Intelligent Dynamic Engine)', description: 'GLIDE(Global Localized Intelligent Dynamic Engine)' },
        { title: '4V.NEWS', description: '4V.NEWS' },
      ],
      colors: ['aqua', 'red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink', 'brown', 'rgb(31, 153, 234)', 'magenta', 'lime']
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
        this.counter += 1; // Увеличиваем значение каждую секунду
      }, 100);
    },
    getColor(index) {
      return this.colors[index % this.colors.length];
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: inset 15px 15px 30px -10px var(--shadow-color);
}

/* Динамическое создание стилей для каждой карточки */
.hover-card-0:hover { --shadow-color: aqua; }
.hover-card-1:hover { --shadow-color: red; }
.hover-card-2:hover { --shadow-color: green; }
.hover-card-3:hover { --shadow-color: blue; }
.hover-card-4:hover { --shadow-color: purple; }
.hover-card-5:hover { --shadow-color: orange; }
.hover-card-6:hover { --shadow-color: yellow; }
.hover-card-7:hover { --shadow-color: pink; }
.hover-card-8:hover { --shadow-color: brown; }
.hover-card-9:hover { --shadow-color: rgb(31, 153, 234); }
.hover-card-10:hover { --shadow-color: magenta; }
.hover-card-11:hover { --shadow-color: lime; }

@media screen and (min-width: 1000px) {
  
  .card-text:hover, .card-title:hover { color:white; }
  .card-text, .card-title { color: rgba(255, 255, 255, 0.7); }
}
</style> -->

<template>
  <div class="container my-4">
    <div class="row">
      <template v-for="(card, index) in cards" :key="index">
        <div class="col-md-4">
          <div
            class="card mb-4"
            :style="{ backgroundColor: 'hsl(214, 37%, 7%)' }"
            :class="['hover-card', `hover-card-${index}`, { 'scroll-shadow': shouldShowShadow(index) }]"
          >
            <div class="card-body hover-content">
              <h5 class="card-title">
                <span :style="{ color: getColor(index), fontSize: '30px', lineHeight: '1.5' }">|</span>{{ card.title }}
              </h5>
              <p class="card-text">{{ $t(card.description) }}</p>
            </div>
          </div>
        </div>

        <!-- Линия разряда между строками карточек -->
        <!-- <div
          v-if="(index + 1) % 3 === 0"
          class="col-12 lightning-line"
          :class="{ 'visible-line': hasScrolledPastLine(index) }"
        ></div> -->
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 888,
      intervalId: null,
      isMobile: window.innerWidth < 992,
      scrollPosition: 0,
      cards: [
        { title: '4V.WEB 3.0', description: '4V.WEB 3.0' },
        { title: '4V.DEX', description: '4V.DEX' },
        { title: '4V.ROBOT', description: '4V.ROBOT' },
        { title: '4V.CRYPTO', description: '4V.CRYPTO' },
        
        { title: 'DISTRIBUTOR (Automatic Content Distributor)', description: 'DISTRIBUTOR (Automatic Content Distributor)' },
        { title: 'CONTENTWISE (Content Wise Engine)', description: 'CONTENTWISE (Content Wise Engine)' },
        { title: '4V.COIN', description: '4V.COIN' },
        { title: '4V.BRIDGEX', description: '4V.WEB 3.0' },
        { title: 'DAO', description: 'DAO' },
        { title: '4V.WEB 3.0', description: '4V.WEB 3.0' },
        { title: '4V.BOT', description: '4V.ROBOT' },
        { title: 'SMARTSHARE (Intelligent Sharing Protocol)', description: 'SMARTSHARE (Intelligent Sharing Protocol)' },
        { title: '4V.DEFI', description: '4V.DEFI' },
        { title: 'GLIDE(Global Localized Intelligent Dynamic Engine)', description: 'GLIDE(Global Localized Intelligent Dynamic Engine)' },
        { title: '4V.NEWS', description: '4V.NEWS' },
      ],
      colors: ['aqua', 'red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink', 'brown', 'rgb(31, 153, 234)', 'magenta', 'lime','rgb(34, 60, 77)','violet', 'cornflowerblue' ]
    };
  },
  mounted() {
    this.startCounter();
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
    window.removeEventListener("resize", this.checkWindowSize);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    startCounter() {
      this.intervalId = setInterval(() => {
        this.counter += 1;
      }, 100);
    },
    getColor(index) {
      return this.colors[index % this.colors.length];
    },
    checkWindowSize() {
      this.isMobile = window.innerWidth < 992;
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
    shouldShowShadow(index) {
      const cardPosition = index * 200;
      return this.scrollPosition > cardPosition;
    },
    hasScrolledPastLine(index) {
      const linePosition = (index + 1) * 150; // Позиция для появления линии
      return this.scrollPosition > linePosition;
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: inset 15px 15px 30px -10px var(--shadow-color);
}

.scroll-shadow {
  box-shadow: inset 15px 15px 30px -10px var(--shadow-color);
}

.hover-content:hover .card-title,
.hover-content:hover .card-text {
  color: white;
}

.card-text,
.card-title {
  transition: color 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
}

/* Линия разряда между строками */
.lightning-line {
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
  margin: 10px 0;
}

.visible-line {
  opacity: 1;
  transform: scaleX(1);
}

/* Динамическое создание стилей для каждой карточки */
.hover-card-0:hover { --shadow-color: aqua; }
.hover-card-1:hover { --shadow-color: red; }
.hover-card-2:hover { --shadow-color: green; }
.hover-card-3:hover { --shadow-color: blue; }
.hover-card-4:hover { --shadow-color: purple; }
.hover-card-5:hover { --shadow-color: orange; }
.hover-card-6:hover { --shadow-color: yellow; }
.hover-card-7:hover { --shadow-color: pink; }
.hover-card-8:hover { --shadow-color: brown; }
.hover-card-9:hover { --shadow-color: rgb(31, 153, 234); }
.hover-card-10:hover { --shadow-color: magenta; }
.hover-card-11:hover { --shadow-color: lime; }
.hover-card-12:hover { --shadow-color: rgb(34, 60, 77); }
.hover-card-13:hover { --shadow-color: magenta; }
.hover-card-14:hover { --shadow-color:cornflowerblue; }
@media screen and (max-width: 1000px) {
  .scroll-shadow.hover-card-0 { --shadow-color: aqua; }
  .scroll-shadow.hover-card-1 { --shadow-color: red; }
  .scroll-shadow.hover-card-2 { --shadow-color: green; }
  .scroll-shadow.hover-card-3 { --shadow-color: blue; }
  .scroll-shadow.hover-card-4 { --shadow-color: purple; }
  .scroll-shadow.hover-card-5 { --shadow-color: orange; }
  .scroll-shadow.hover-card-6 { --shadow-color: yellow; }
  .scroll-shadow.hover-card-7 { --shadow-color: pink; }
  .scroll-shadow.hover-card-8 { --shadow-color: brown; }
  .scroll-shadow.hover-card-9 { --shadow-color: cornflowerblue }
  .scroll-shadow.hover-card-10 { --shadow-color: magenta; }
  .scroll-shadow.hover-card-11 { --shadow-color: lime; }
  .scroll-shadow.hover-card-12 { --shadow-color: rgb(31, 153, 234); }
  .scroll-shadow.hover-card-13 { --shadow-color: magenta; }
  .scroll-shadow.hover-card-14 { --shadow-color: lime; }
  .card-text, .card-title { color: rgba(255, 255, 255, 0.8); }
}
</style>
