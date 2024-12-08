<template lang="">
  <div class="container text-white-50">
    <br/><br/>
    <h1>{{ $t("techDoc.title") }}</h1>

    <ul>
      <li><a href="#intro">{{ $t("techDoc.introduction") }}</a></li>
      <li><a href="#architecture">{{ $t("techDoc.architecture") }}</a></li>
      <li><a href="#glide">{{ $t("techDoc.glide") }}</a></li>
      <li><a href="#newsAggregation">{{ $t("techDoc.newsAggregation") }}</a></li>
      <li><a href="#robot">{{ $t("techDoc.robot") }}</a></li>
      <li><a href="#crypto">{{ $t("techDoc.crypto") }}</a></li>
      <li><a href="#dex">{{ $t("techDoc.dex") }}</a></li>
      <li><a href="#defi">{{ $t("techDoc.defi") }}</a></li>
      <li><a href="#coin">{{ $t("techDoc.coin") }}</a></li>
      <li><a href="#dao">{{ $t("techDoc.dao") }}</a></li>
      <li><a href="#conclusion">{{ $t("techDoc.conclusion") }}</a></li>
    </ul>
    <br/>

    <!-- Введение -->
    <h2 id="intro">{{ $t("techDoc.introduction") }}</h2>
    <p>{{ $t("techDoc.introDescription") }}</p>
    <p>{{ $t("techDoc.introObjective") }}</p>

    <h3>{{ $t("techDoc.mainDirections") }}</h3>
    <ul>
      <li>{{ $t("techDoc.innovativeApproach") }}</li>
      <li>{{ $t("techDoc.aiForPersonalization") }}</li>
      <li>{{ $t("techDoc.broadCoverage") }}</li>
      <li>{{ $t("techDoc.integrationFinancialTools") }}</li>
      <li>{{ $t("techDoc.web3Development") }}</li>
    </ul>

    <!-- 4V.ROBOT -->
    <h2 id="robot">{{ $t("techDoc.robot") }}</h2>
    <p>{{ $t("techDoc.robotDescription1") }}</p>
    <p>{{ $t("techDoc.robotDescription2") }}</p>
    <p>{{ $t("techDoc.robotDescription3") }}</p>

    <h3>{{ $t("techDoc.technologiesAndTools") }}</h3>
    <ul>
      <li><span class="text-info">{{ $t("techDoc.glideEngine") }}</span></li>
      <li><span class="text-info">{{ $t("techDoc.contentwiseEngine") }}</span></li>
      <li><span class="text-info">{{ $t("techDoc.distributor") }}</span></li>
      <li><span class="text-info">{{ $t("techDoc.smartshare") }}</span></li>
    </ul>

    <!-- Общая архитектура -->
    <h2 id="architecture">{{ $t("techDoc.architecture") }}</h2>
    <p>{{ $t("techDoc.architectureDescription") }}</p>
    <ul>
      <li>{{ $t("techDoc.newsAggregator") }}</li>
      <li>{{ $t("techDoc.glideModule") }}</li>
      <li>{{ $t("techDoc.cryptoModule") }}</li>
      <li>{{ $t("techDoc.dexAndDefiModules") }}</li>
    </ul>

    <!-- GLIDE -->
    <h2 id="glide">{{ $t("techDoc.glide") }}</h2>
    <p>{{ $t("techDoc.glideDescription") }}</p>

    <!-- Агрегация новостей -->
    <h2 id="newsAggregation">{{ $t("techDoc.newsAggregation") }}</h2>
    <p>{{ $t("techDoc.newsAggregationDescription") }}</p>

    <!-- 4V.CRYPTO -->
    <h2 id="crypto">{{ $t("techDoc.crypto") }}</h2>
    <p>{{ $t("techDoc.cryptoDescription") }}</p>
    <ul>
      <li>{{ $t("techDoc.marketMonitoring") }}</li>
      <li>{{ $t("techDoc.secureTransactions") }}</li>
      <li>{{ $t("techDoc.defiIntegration") }}</li>
    </ul>

    <!-- 4V.DEX -->
    <h2 id="dex">{{ $t("techDoc.dex") }}</h2>
    <p>{{ $t("techDoc.dexDescription") }}</p>

    <!-- 4V.coin -->
    <h2 id="coin">{{ $t("techDoc.coin") }}</h2>
    <p>{{ $t("techDoc.coinDescription") }}</p>

    <h3>{{ $t("techDoc.tokenFeatures") }}</h3>
    <ul>
      <li>{{ $t("techDoc.transactionFees") }}</li>
      <li>{{ $t("techDoc.staking") }}</li>
      <li>{{ $t("techDoc.voting") }}</li>
      <li>{{ $t("techDoc.stakingDelegation") }}</li>
    </ul>

    <p>{{ $t("techDoc.interoperability") }}</p>

    <!-- DAO -->
    <h2 id="dao">{{ $t("techDoc.dao") }}</h2>
    <p>{{ $t("techDoc.daoDescription1") }}</p>
    <p>{{ $t("techDoc.daoDescription2") }}</p>

    <!-- Заключение -->
    <h2 id="conclusion">{{ $t("techDoc.conclusion") }}</h2>
    <p>{{ $t("techDoc.conclusionDescription") }}</p>
  </div>
</template>

<script>
export default {
  name: "TechDocumentation",
};
</script>

<style lang="css" scoped>
.container {
  padding: 20px;
}
h1 {
  font-size: 1.75rem;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.2rem;
}
h1, h2, h3 {
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;
}
p, ul {
  margin-bottom: 20px;
  line-height: 1.6;
}
ul {
  list-style-type: disc;
  padding-left: 20px;
}
a {
  color: #00bfff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
