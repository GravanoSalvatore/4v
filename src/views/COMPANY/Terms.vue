<template>
  <div class="container">
    <br /><br />
    <h2 class="text-white">{{ $t("terms.title") }}</h2>
    <!-- <p class="text-white-50">{{ $t("terms.lastUpdated") }}</p> -->

    <!-- Содержание -->
    <section class="my-4">
      <h3 class="text-white">{{ $t("terms.contentsTitle") }}</h3>
      <ul class="list-unstyled">
        <li><a href="#agreement" class="text-info">{{ $t("terms.contents.agreement") }}</a></li>
        <li><a href="#license" class="text-info">{{ $t("terms.contents.license") }}</a></li>
        <li><a href="#prohibited" class="text-info">{{ $t("terms.contents.prohibited") }}</a></li>
        <li><a href="#data-security" class="text-info">{{ $t("terms.contents.dataSecurity") }}</a></li>
        <li><a href="#disputes" class="text-info">{{ $t("terms.contents.disputes") }}</a></li>
        <li><a href="#california-rights" class="text-info">{{ $t("terms.contents.californiaRights") }}</a></li>
        <li><a href="#miscellaneous" class="text-info">{{ $t("terms.contents.miscellaneous") }}</a></li>
        <li><a href="#contact" class="text-info">{{ $t("terms.contents.contact") }}</a></li>
      </ul>
    </section>

    <!-- Согласие с условиями -->
    <section id="agreement" class="my-4">
      <h3 class="text-white">{{ $t("terms.agreement.title") }}</h3>
      <p class="text-white-50">{{ $t("terms.agreement.text1") }}</p>
      <p class="text-white-50">{{ $t("terms.agreement.text2") }}</p>
    </section>

    <!-- Область лицензии для пользователей -->
    <section id="license" class="my-4">
      <h3 class="text-white">{{ $t("terms.license.title") }}</h3>
      <p class="text-white-50">{{ $t("terms.license.text1") }}</p>
      <p class="text-white-50">{{ $t("terms.license.text2") }}</p>
    </section>

    <!-- Запрещенные виды деятельности -->
    <section id="prohibited" class="my-4">
      <h3 class="text-white">{{ $t("terms.prohibited.title") }}</h3>
      <p class="text-white-50">{{ $t("terms.prohibited.text1") }}</p>
      <p class="text-white-50">{{ $t("terms.prohibited.text2") }}</p>
    </section>

    <!-- Безопасность данных -->
    <section id="data-security" class="my-4">
      <h3 class="text-white">{{ $t("terms.dataSecurity.title") }}</h3>
      <p class="text-white-50">{{ $t("terms.dataSecurity.text") }}</p>
    </section>

    <!-- Разрешение споров -->
    <section id="disputes" class="my-4">
      <h3 class="text-white">{{ $t("terms.disputes.title") }}</h3>
      <p class="text-white-50">{{ $t("terms.disputes.text1") }}</p>
      <p class="text-white-50">
        <!-- {{ $t("terms.disputes.text2") }} -->
        <!-- <a href="mailto:support@4V.com" class="text-info">support@4V.com</a>. -->
      </p>
    </section>

    <!-- Права жителей Калифорнии -->
    <section id="california-rights" class="my-4">
      <h3 class="text-white">{{ $t("terms.californiaRights.title") }}</h3>
      <p class="text-white-50">{{ $t("terms.californiaRights.text") }}</p>
    </section>

    <!-- Прочие положения -->
    <section id="miscellaneous" class="my-4">
      <h3 class="text-white">{{ $t("terms.miscellaneous.title") }}</h3>
      <p class="text-white-50">{{ $t("terms.miscellaneous.text") }}</p>
    </section>

    <!-- Контакты -->
    <section id="contact" class="my-4">
      <!-- <h3 class="text-white">{{ $t("terms.contact.title") }}</h3> -->
      <p class="text-white-50">
        <!-- {{ $t("terms.contact.text") }} -->
        <!-- <a href="mailto:support@4V.com" class="text-info">support@4V.com</a>. -->
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "TermsOfService",
};
</script>

<style scoped>
.container {
  padding: 20px;
  border-radius: 10px;
}

.text-white {
  color: #fff;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5);
}

.text-info {
  color: #17a2b8;
  text-decoration: underline;
}

ul {
  padding-left: 20px;
  list-style-type: disc;
}

a:hover {
  color: #fff;
}

p {
  font-size: 0.9rem;
}
</style>
