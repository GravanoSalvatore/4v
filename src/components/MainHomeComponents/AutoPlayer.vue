<template>
    <div>
      <audio ref="audio" controls autoplay style="display: none;">
        <source :src="audioSrc" type="audio/mp3">
        Your browser does not support the audio tag.
      </audio>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        audioSrc: 'assets/2.mp3' 
      };
    },
    mounted() {
      this.$refs.audio.addEventListener('canplaythrough', () => {
        this.$refs.audio.play();
      });
    }
  };
  </script>
  
  <style scoped>
  /* Vash stily zdes' */
  </style>
  