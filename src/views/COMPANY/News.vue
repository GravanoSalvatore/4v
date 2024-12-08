<!-- <template>
    <div class="container ">
        <br/> <br/> <br/> <br/> <br/> <br/> 
      <div class="row">
        <div v-for="news in newsData" :key="news.id" class="col-md-3 mb-4">
          <div class="card h-100" style="background-color: rgba(20, 18, 45, 1);">
            <div class="card-img-top overlay-container">
              <img
              style="border-radius:none"
                :src="news.imageurl"
                class="img-fluid"
                alt="news image"
              />
              <div class="overlay"></div>
            </div>
            <div class="card-body text-white-50" style="background-color: rgba(20, 18, 45, 1);">
              <h5 class="card-title">{{ news.title }}</h5>
              <p class="card-text text-white">{{ news.body }}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">By {{ news.source_info.name }}</small><br>
              <small class="text-muted">Published on: {{ formatDate(news.published_on) }}</small>
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
        newsData: [],
      };
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      async fetchNews() {
        try {
          const response = await fetch(
            "https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite"
          );
          const data = await response.json();
          this.newsData = data.Data;
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      },
      formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString();
      },
    },
  };
  </script>
  
  <style scoped>
  .overlay-container {
    position: relative;
  }
  
  .overlay-container img {
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Притонированное изображение */
    z-index: 1;
  }
  .overlay:hover{
    background-color: rgba(0, 0, 0, 0.1);
  }
  .card-body {
    position: relative;
    z-index: 2;
  }
  </style>
   -->
   <!-- <template>
    <div class="container">
      <br/> <br/> <br/> <br/> 
     
      <div v-if="loading" class="text-center ">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
  
     
      <div v-else>
        <div class="row mt-3">
          <div v-for="news in paginatedNews" :key="news.id" class="col-md-3 mb-4">
            <div class="card h-100 rounded-4" style="background-color: rgba(20, 18, 45, 1);">
              <div class="card-img-top overlay-container">
                <img style="border-radius:none" :src="news.imageurl" class="img-fluid" alt="news image" />
                <div class="overlay"></div>
              </div>
              <div class="card-body text-white-50" style="background-color: rgba(20, 18, 45, 1);">
               <div class="card-text-overlay">
                <h5 style="font-size: 2.5vh;" class="card-title">{{ news.title }}</h5>
                <p class="card-text text-white">{{ news.body }}</p></div>
              </div>
              <div class="card-footer">
                <small class="text-muted">By {{ news.source_info.name }}</small><br>
                <small class="text-muted">Published on: {{ formatDate(news.published_on) }}</small>
              </div>
            </div>
          </div>
        </div>
  
       
        <nav aria-label="Page navigation example" class="">
          <ul class="pagination justify-content-center ">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link  bg-black text-white-50" href="#" @click.prevent="previousPage">Previous</a>
            </li>
            <li class="page-item text-white" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
              <a style="background-color: rgba(20, 18, 45, 1);" class="page-link text-white" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link bg-black text-white-50" href="#" @click.prevent="nextPage">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsData: [],
        loading: true, // Для отображения прелоадера
        currentPage: 1,
        newsPerPage: 4,
      };
    },
    computed: {
      paginatedNews() {
        const start = (this.currentPage - 1) * this.newsPerPage;
        const end = start + this.newsPerPage;
        return this.newsData.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.newsData.length / this.newsPerPage);
      },
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      async fetchNews() {
        try {
          const response = await fetch(
            "https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite"
          );
          const data = await response.json();
          this.newsData = data.Data;
          this.loading = false; // Отключаем прелоадер
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      },
      formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString();
      },
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      goToPage(page) {
        this.currentPage = page;
      }
    },
  };
  </script>
  
  <style scoped>
  .card-text-overlay {
    overflow-x: hidden;
    overflow-x: auto;
    height: 100px;
  }
  .overlay-container {
    position: relative;
  }
  
  .overlay-container img {
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Притонированное изображение */
    z-index: 1;
  }
  
  .overlay:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    position: relative;
    z-index: 2;
  }
  
  .spinner-border {
    width: 3rem;
    height: 3rem;
  }
  </style>
   -->
   <!-- <template>
    <div class="container">
      <br/> <br/> <br/> <br/> 
    
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
  
    
      <div v-else>
        <div class="row">
          <div v-for="news in paginatedNews" :key="news.id" class="col-md-3 col-12 mb-4">
            <div class="card  " style="background-color:#091520;">
             <div class="card-text-overlay">
                <div class="card-img-top overlay-container">
                <img style="border-radius:none" :src="news.imageurl" class="img-fluid" alt="news image" />
                <div class="overlay"></div>
              </div>
              <div class="card-body text-white-50" style="background-color:#091520;">
              <a :href="news.url" target="_blank">  <h5 class="card-title">{{ news.title }}</h5>
                <p class="card-text text-white ">{{ news.body }}</p></a>
              </div>
            </div>
              <div class="card-footer">
                <small class="text-muted">By {{ news.source_info.name }}</small><br>
                <small class="text-muted">Published on: {{ formatDate(news.published_on) }}</small>
              </div>
            </div>
          </div>
        </div>
  
       
        <nav aria-label="Page navigation example" class="pagination-container">
          <ul class="pagination justify-content-center flex-wrap">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link bg-black text-success" href="#" @click.prevent="previousPage">Previous</a>
            </li>
            <li class="page-item text-white" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
              <a style="background-color:#091520;" class="page-link text-white" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link bg-black text-success" href="#" @click.prevent="nextPage">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsData: [],
        loading: true,
        currentPage: 1,
        newsPerPage: 4,
      };
    },
    computed: {
      paginatedNews() {
        const start = (this.currentPage - 1) * this.newsPerPage;
        const end = start + this.newsPerPage;
        return this.newsData.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.newsData.length / this.newsPerPage);
      },
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      async fetchNews() {
        try {
          const response = await fetch(
            "https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite"
          );
          const data = await response.json();
          this.newsData = data.Data;
          this.loading = false;
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      },
      formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString();
      },
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      goToPage(page) {
        this.currentPage = page;
      }
    },
  };
  </script>
  
  <style scoped>
   .card-text-overlay {
    overflow-x: hidden;
    overflow-x: auto;
    height: 370px;
  }
  .overlay-container {
    position: relative;
  }
  
  .overlay-container img {
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Притонированное изображение */
    z-index: 1;
  }
  
  .overlay:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    position: relative;
    z-index: 2;
  }
  
  /* Пагинация */
  .pagination-container {
    margin-top: 20px;
  }
  
  .pagination .page-item.active .page-link {
   
    border-color: black; 
  }
  
  .pagination .page-link {
    color: white;
  }
  
  /* Flexbox для мобильных устройств */
  .pagination {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Пагинация будет переноситься на новые строки при необходимости */
  }
  
  /* Адаптивность для мобильных устройств */
  @media (max-width: 768px) {
    .pagination {
      font-size: 12px;
    }
  
    .pagination .page-item {
      margin: 0 2px;
    }
  
    .col-md-3 {
      width: 100%;
    }
  }
  h5{
    font-size:2.3vh;
  }
  </style>
   -->
   <template>
    <div class="container">
      <br/> <br/> <br/> <br/> 
      <!-- Прелоадер -->
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
  
      <!-- Новости -->
      <div v-else>
        <div class="row">
          <div v-for="news in paginatedNews" :key="news.id" class="col-md-3 col-12 ">
            <div class="card" style="background-color:#091520;">
              <div class="card-text-overlay">
                <div class="card-img-top overlay-container">
                  <img style="border-radius:none" :src="news.imageurl" class="img-fluid" alt="news image" />
                  <div class="overlay"></div>
                </div>
                <div class="card-body text-white-50" style="background-color:#091520;">
                  <a :href="news.url" target="_blank">
                    <h5 class="card-title">{{ news.title }}</h5>
                    <p class="card-text text-white ">{{ news.body }}</p>
                  </a>
                </div>
              </div>
              <div class="card-footer">
                <small class="text-muted">By {{ news.source_info.name }}</small><br>
                <small class="text-muted">Published on: {{ formatDate(news.published_on) }}</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Логотипы с ссылками -->
        <div class="logos text-center ">
          <a href="https://www.coindesk.com/" target="_blank">
            <img src="https://companieslogo.com/img/orig/coindesk-9ad29b43.png?t=1720244494" alt="Coindesk" class="logo-img">
          </a>
          <a href="https://cointelegraph.com/" target="_blank">
            <img src="https://cdn.newsroom.gg//medium/000/002/623/T7pHRvDzZH9Ktym-.png" alt="Newsroom" class="logo-img">
          </a>
          <a href="https://www.cryptocompare.com/news/list/latest/" target="_blank">
            <img src="https://img.cryptorank.io/coins/crypto_compare1702547385068.png" alt="CryptoRank" class="logo-img">
          </a>
        </div>

        <!-- Пагинация -->
        <nav aria-label="Page navigation example" class="pagination-container">
          <ul class="pagination justify-content-center flex-wrap">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link bg-black text-success" href="#" @click.prevent="previousPage">Previous</a>
            </li>
            <li class="page-item text-white" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
              <a style="background-color:black;" class="page-link text-white" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link bg-black text-success" href="#" @click.prevent="nextPage">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newsData: [],
      loading: true,
      currentPage: 1,
      newsPerPage: 4,
    };
  },
  computed: {
    paginatedNews() {
      const start = (this.currentPage - 1) * this.newsPerPage;
      const end = start + this.newsPerPage;
      return this.newsData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.newsData.length / this.newsPerPage);
    },
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite"
        );
        const data = await response.json();
        this.newsData = data.Data;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавная прокрутка
    });
  },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.scrollToTop();
    }
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: orange;
}
.card-text-overlay {
  overflow-x: hidden;
  overflow-y: auto;
  height: 370px;
}

.overlay-container {
  position: relative;
}

.overlay-container img {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Притонированное изображение */
  z-index: 1;
}

.overlay:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.card-body {
  position: relative;
  z-index: 2;
}

/* Пагинация */
.pagination-container {
  margin-top: 20px;
}

.pagination .page-item.active .page-link {
  background-color: black; /* Активная страница теперь черного цвета */
  border-color: black; /* Устанавливаем черный цвет для границы */
}

.pagination .page-link {
  color: white;
}

/* Flexbox для мобильных устройств */
.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Пагинация будет переноситься на новые строки при необходимости */
}

/* Логотипы */
.logos {
  margin-top: 20px;
}

.logo-img {
  height: 50px;
  margin: 0 10px;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .pagination {
    font-size: 12px;
  }

  .pagination .page-item {
    margin: 0 2px;
  }

  .col-md-3 {
    width: 100%;
  }

  .logo-img {
    height: 40px;
    margin: 5px;
  }
}

h5 {
  font-size: 2.3vh;
}
</style>
