<template>
  <div class="container">
    <br /><br />
    <h2 class="text-white">{{ $t("privacy.title") }}</h2>
    <p class="text-white-50">{{ $t("privacy.lastUpdated") }}</p>

    <!-- Содержание -->
    <section class="my-4">
      <h3 class="text-white">{{ $t("privacy.contentsTitle") }}</h3>
      <ul class="list-unstyled">
        <li><a href="#info-collection" class="text-info">{{ $t("privacy.contents.infoCollection") }}</a></li>
        <li><a href="#info-usage" class="text-info">{{ $t("privacy.contents.infoUsage") }}</a></li>
        <li><a href="#rights-california" class="text-info">{{ $t("privacy.contents.rightsCalifornia") }}</a></li>
        <li><a href="#rights-europe" class="text-info">{{ $t("privacy.contents.rightsEurope") }}</a></li>
        <li><a href="#data-transfer" class="text-info">{{ $t("privacy.contents.dataTransfer") }}</a></li>
        <li><a href="#cookies" class="text-info">{{ $t("privacy.contents.cookies") }}</a></li>
        <li><a href="#security" class="text-info">{{ $t("privacy.contents.security") }}</a></li>
        <li><a href="#contact" class="text-info">{{ $t("privacy.contents.contact") }}</a></li>
      </ul>
    </section>

    <!-- Сбор информации -->
    <section id="info-collection" class="my-4">
      <h3 class="text-white">{{ $t("privacy.infoCollection.title") }}</h3>
      <p class="text-white-50">{{ $t("privacy.infoCollection.text1") }}</p>
      <p class="text-white-50">{{ $t("privacy.infoCollection.text2") }}</p>
    </section>

    <!-- Использование информации -->
    <section id="info-usage" class="my-4">
      <h3 class="text-white">{{ $t("privacy.infoUsage.title") }}</h3>
      <p class="text-white-50">{{ $t("privacy.infoUsage.text1") }}</p>
      <p class="text-white-50">{{ $t("privacy.infoUsage.text2") }}</p>
    </section>

    <!-- Ваши права на конфиденциальность в Калифорнии -->
    <section id="rights-california" class="my-4">
      <h3 class="text-white">{{ $t("privacy.rightsCalifornia.title") }}</h3>
      <p class="text-white-50">
        {{ $t("privacy.rightsCalifornia.text") }}
        <ul>
          <li>{{ $t("privacy.rightsCalifornia.list.access") }}</li>
          <li>{{ $t("privacy.rightsCalifornia.list.deletion") }}</li>
          <li>{{ $t("privacy.rightsCalifornia.list.optOut") }}</li>
        </ul>
      </p>
    </section>

    <!-- Раскрытие для физических лиц в Европе -->
    <section id="rights-europe" class="my-4">
      <h3 class="text-white">{{ $t("privacy.rightsEurope.title") }}</h3>
      <p class="text-white-50">
        {{ $t("privacy.rightsEurope.text") }}
        <ul class="text-white-50">
          <li>{{ $t("privacy.rightsEurope.list.access") }}</li>
          <li>{{ $t("privacy.rightsEurope.list.correction") }}</li>
          <li>{{ $t("privacy.rightsEurope.list.deletion") }}</li>
          <li>{{ $t("privacy.rightsEurope.list.restriction") }}</li>
          <li>{{ $t("privacy.rightsEurope.list.portability") }}</li>
        </ul>
        <span class="text-white">{{ $t("privacy.rightsEurope.contact") }}</span>
        <a href="mailto:info@4V.com" class="text-info">info@4V.com</a>.
      </p>
    </section>

    <!-- Передача данных и хранение -->
    <section id="data-transfer" class="my-4">
      <h3 class="text-white">{{ $t("privacy.dataTransfer.title") }}</h3>
      <p class="text-white-50">{{ $t("privacy.dataTransfer.text1") }}</p>
      <p class="text-white-50">{{ $t("privacy.dataTransfer.text2") }}</p>
    </section>

    <!-- Использование файлов cookie -->
    <section id="cookies" class="my-4">
      <h3 class="text-white">{{ $t("privacy.cookies.title") }}</h3>
      <p class="text-white-50">{{ $t("privacy.cookies.text") }}</p>
    </section>

    <!-- Безопасность данных -->
    <section id="security" class="my-4">
      <h3 class="text-white">{{ $t("privacy.security.title") }}</h3>
      <p class="text-white-50">{{ $t("privacy.security.text1") }}</p>
      <p class="text-white-50">{{ $t("privacy.security.text2") }}</p>
    </section>

    <!-- Контакты -->
    <section id="contact" class="my-4">
      <h3 class="text-white">{{ $t("privacy.contact.title") }}</h3>
      <p class="text-white-50">
        <!-- {{ $t("privacy.contact.text") }} -->
        <!-- <a href="mailto:info@4V.com" class="text-info">info4V@.com</a>. -->
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy"
};
</script>

<style scoped>
.container {
  padding: 20px;
  /* background-color: #091520; */
  border-radius: 10px;
}

.text-info {
  color: #17a2b8;
  text-decoration: underline;
}

a:hover {
  color: #fff;
}

ul {
  padding-left: 20px;
  list-style-type: disc;
}

p {
  font-size: 0.9rem;
}

ul li {
  margin-bottom: 10px;
}

.list-unstyled li {
  margin-bottom: 10px;
}
</style>
