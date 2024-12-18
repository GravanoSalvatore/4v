

<template>
<br/><br/>
  <div class="container">
    <div class="overlay">
      <div class="content text-white">
        <h1 class="text-white">{{$t('Welcome to 4V.NEWS1')}}<span class="text-info" style="font-size: 14px;">Beta</span></h1>
        <!-- <p> Мир  новостей!</p> -->
        <a href="https://4v.news/" target="_blank">
          <button class="btn-danger1">{{ $t('Learn More') }}</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import videoFile from '../COMPANY/Video.vue'
export default {
  components: { videoFile },
};
</script>

<style scoped>
.btn-danger1 {
  color: white;
  font-weight: bold;
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

.container {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0);
  height: 70vh;
 
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-image: url('https://media.licdn.com/dms/image/D5612AQH-ZpfPNIuRlA/article-cover_image-shrink_600_2000/0/1713791589118?e=2147483647&v=beta&t=XYVyuuhli8ZlL75c1SrrKZhMBsPufErBCafgpQ6WixE');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.5s ease;
}

.container:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  padding-left: 40px;
  border-radius: 25px;
  transition: background-color 0.5s ease;
}

.container:hover .overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  z-index: 2;
  position: absolute;
  bottom: 40px; /* Позиционируем текст и кнопку внизу */
  left: 40px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.container:hover .content {
  opacity: 1;
  visibility: visible;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 40px;
}
</style>
