<template lang="">
    <br/><br/><br/>
    <div>
        <div class="container px-4 px-lg-5 ">
    <div class="card-group mb-4">
     
        <div class="card image-card" style="min-height:300px">
        <div class="overlay"></div>
        <img style="min-height:300px" src="https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-circle-promo/us-bda-infrastructure.png" class="card-img-top " alt="..." />
        <div class="card-body image-text">
            <router-link class="text-white pointer" style="text-decoration:none" to="/news" >  <p class="card-text opas">
            Новости мира блокчейна и криптовалют.
          </p></router-link>
          <!-- <h5 class="card-title">zk-SNARKs</h5> -->
           <!-- <router-link to="/about">
          <p class="card-text opas text-info decoration-none">
           Перейти в VELOS lab.
          </p></router-link> -->
          <!-- <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p> -->
        </div>
      </div>
      <div class="card image-card " style="min-height:300px">
        <div class="overlay"></div>
        <img style="min-height:300px" src="https://media.licdn.com/dms/image/D4E12AQGq6btAUnk_pA/article-cover_image-shrink_600_2000/0/1675467964923?e=2147483647&v=beta&t=qtdsV6tCHfDViVh-5u1zGWXBvd4c60_27naMymtIQ6s" class="card-img-top" alt="..." />
        <div class="card-body image-text">
       <router-link class="text-info" style="text-decoration:none" to="/news" >  <p class="card-text opas">
            Новости мира блокчейна и криптовалют.
          </p></router-link>
        </div>
      </div>
      <div class="card image-card " style="min-height:300px">
        <div class="overlay"></div>
        <img style="min-height:300px" src="https://media.licdn.com/dms/image/D4E12AQGq6btAUnk_pA/article-cover_image-shrink_600_2000/0/1675467964923?e=2147483647&v=beta&t=qtdsV6tCHfDViVh-5u1zGWXBvd4c60_27naMymtIQ6s" class="card-img-top" alt="..." />
        <div class="card-body image-text">
       <router-link class="text-info" style="text-decoration:none" to="/news" >  <p class="card-text opas">
            Новости мира блокчейна и криптовалют.
          </p></router-link>
        </div>
      </div>
     
    </div>
    
     
              </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

 @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
 


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

a{
  text-decoration: none;
}
.img {
  border-radius: 25px;
}


.image-card {
    
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card-img-top {
    border:none !important;
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
  filter: brightness(35%); 
  transform: scale(1.05); 
}

</style>
