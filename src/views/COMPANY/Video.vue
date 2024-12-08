<!-- <template><br/><br/>
    <section class="video-section">mmmmmmmmmmmmmmm
      <video autoplay muted loop playsinline class="video-element">
        <source src="../../../assets/img/instruct.mp4" type="video/mp4" />
       
        Your browser does not support the video tag.
      </video>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FullScreenVideo',
  };
  </script>
  
  <style scoped>
  /* Секция для видео */
  .video-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  /* Видео для адаптивности */
  .video-element {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Гарантирует, что видео сохраняет свои пропорции */
    transform: translate(-50%, -50%);
  }
  
  /* Адаптация для мобильных устройств */
  @media screen and (max-width: 768px) {
    .video-element {
      width: 100vw;
      height: auto;
      object-fit: contain; /* Гарантирует, что видео не обрезается, а полностью показывается */
    }
  }
  </style>


    -->
    <template>
        <div>
          <!-- Кнопка для открытия модального окна -->
          <span type="" class="  " @click="openModal">
            Открыть видео
          </span>
      
          <!-- Модальное окно Bootstrap -->
          <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class= " modal-content" style="background-color:#091520;border-radius: 25px;">
                <div class="modal-body">
                  <!-- Видео в модальном окне -->
                  <video ref="videoElement" controls class="w-100">
                    <source src="../../../assets/img/testVideo3.mp4" type="video/mp4">
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <div class="modal-footer">
                  <button type="button" class=" btn-danger1" data-bs-dismiss="modal" @click="pauseVideo">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      
      <script>
      export default {
        methods: {
          openModal() {
            const modal = new bootstrap.Modal(document.getElementById('videoModal'));
            modal.show();
            
            // Включаем видео со звуком после открытия модального окна
            this.$refs.videoElement.play().then(() => {
              this.$refs.videoElement.muted = false; // Отключаем mute
            }).catch((error) => {
              console.log("Автоматическое воспроизведение видео было заблокировано браузером: ", error);
            });
          },
          pauseVideo() {
            this.$refs.videoElement.pause();
          }
        }
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
      
      .btn {
        margin-top: 50px;
      }
      
      /* Убираем отступы внутри модального окна */
      .modal-dialog {
        max-width: 90vw;
      }
      
      .video-container {
        width: 100%;
        height: auto;
      }
      </style>
      