<template>
  <div id="home">
  
    <three />
    <!-- <four /> -->
    <!-- <p>{{ $t('welcome') }}</p>
    <button @click="$changeLanguage('en')">English</button>
    <button @click="$changeLanguage('ru')">Русский</button> -->
  </div>
</template>

<script>
import three from '../components/MainHomeComponents/HomeCompThree.vue';
import four from '../components/MainHomeComponents/HomeCompFour.vue';

export default {
  components: {
    three,
    four,
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: rgb(22, 45, 116);
}
</style>
