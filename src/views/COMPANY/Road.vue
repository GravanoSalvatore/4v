<template>
  <section id="about">
    <div>
      <br/> <br/> <br/> <br/>
      <h3 class="text-white text-center">{{ $t('roadmapTitle') }}*</h3>
      <ul class="timeline text-white-50">
        <!-- Q3 2024 -->
        <li class="timeline-item">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title fw-bold">{{ $t('2024StrengtheningAndExpansion') }}</h4>
              <p><small class="text-info">{{ $t('q3_2024') }}</small></p>
            </div>
            <div class="timeline-body">
              <p>{{ $t('launchTelegramBot') }}</p>
              <p>{{ $t('launchWhatsAppBot') }}</p>
              <p>{{ $t('botDevelopmentTesting') }}</p>
              <p>{{ $t('userAttractionCampaign') }}</p>
              <p>{{ $t('integrationWithNewsAggregator') }}</p>
              <p>{{ $t('userFeedbackFeatures') }}</p>
              <p>{{ $t('interfaceOptimization') }}</p>
            </div>
          </div>
        </li>

        <!-- Q4 2024 -->
        <li class="timeline-item timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p><small class="text-info">{{ $t('q4_2024') }}</small></p>
            </div>
            <div class="timeline-body">
              <p>{{ $t('launchVKBot') }}</p>
              <p>{{ $t('botDevelopmentTesting') }}</p>
              <p>{{ $t('userAttractionCampaign') }}</p>
              <p>{{ $t('integrationWithNewsAggregator') }}</p>
              <p>{{ $t('userFeedbackFeatures') }}</p>
              <p>{{ $t('interfaceOptimization') }}</p>
            </div>
          </div>
        </li>

        <!-- Q1 2025 -->
        <li class="timeline-item">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title fw-bold">{{ $t('2025InternationalExpansionInnovation') }}</h4>
              <p><small class="text-info">{{ $t('q1_2025') }}</small></p>
            </div>
            <div class="timeline-body">
              <p>{{ $t('launchFacebookMessengerBot') }}</p>
              
              <p>{{ $t('launchDEFI') }}</p>
              <p>{{ $t('educationWebinars') }}</p>
              <p>{{ $t('cryptocurrencyReach') }}</p>
              <p>{{ $t('exchangeListing') }}</p>
              <p>{{ $t('airdropCampaigns') }}</p>
            </div>
          </div>
        </li>

        <!-- Q2 2025 -->
        <li class="timeline-item timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p><small class="text-info">{{ $t('q2_2025') }}</small></p>
            </div>
            <div class="timeline-body">
              <p>{{ $t('launchInstagramBot') }}</p>
              <p>{{ $t('launch4VNews') }}</p>
              <p>{{ $t('launchDEX') }}</p>
              <p>{{ $t('communityManagement') }}</p>
              <p>{{ $t('userCommunityDevelopment') }}</p>
              <p>{{ $t('feedbackCollection') }}</p>
            </div>
          </div>
        </li>

        <!-- Q3 2025 -->
        <li class="timeline-item">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p><small class="text-info">{{ $t('q3_2025') }}</small></p>
            </div>
            <div class="timeline-body">
              <p>{{ $t('launchLinkedInBot') }}</p>
              <p>{{ $t('launchTikTokBot') }}</p>

              <p>{{ $t('internationalPromotion') }}</p>
              <p>{{ $t('marketAdaptation') }}</p>
              <p>{{ $t('partnershipPrograms') }}</p>
              <p>{{ $t('cryptocurrencyPartnerships') }}</p>
              <p>{{ $t('jointAdvertising') }}</p>
            </div>
          </div>
        </li>

        <!-- Q4 2025 -->
        <li class="timeline-item timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p><small class="text-info">{{ $t('q4_2025') }}</small></p>
            </div>
            <div class="timeline-body">
             
              <p>{{ $t('effectivenessAnalysis') }}</p>
              <p>{{ $t('functionalityExpansion') }}</p>
              <p>{{ $t('newAdvertisingCampaigns') }}</p>
            </div>
          </div>
        </li>

        <!-- Q1 2026 -->
        <li class="timeline-item">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title fw-bold">{{ $t('2026LeadershipStability') }}</h4>
              <p><small class="text-info">{{ $t('q1_2026') }}</small></p>
            </div>
            <div class="timeline-body">
              <p>{{ $t('innovativeDevelopments') }}</p>
              <p>{{ $t('aiIntegration') }}</p>
              <p>{{ $t('personalizedNews') }}</p>
              <p>{{ $t('cryptoInfrastructure') }}</p>
              <p>{{ $t('newMiningOpportunities') }}</p>
              <p>{{ $t('walletsPaymentSystems') }}</p>
              <p>{{ $t('businessOptimization') }}</p>
              <p>{{ $t('scalingTeamGrowth') }}</p>
            </div>
          </div>
        </li>

        <!-- Q2 2026 -->
        <li class="timeline-item timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p><small class="text-info">{{ $t('q2_2026') }}</small></p>
            </div>
            <div class="timeline-body">
              <p>{{ $t('newBotsAndServices') }}</p>
              <p>{{ $t('globalExpansion') }}</p>
              <p>{{ $t('serviceLocalization') }}</p>
              <p>{{ $t('techInnovation') }}</p>
              <p>{{ $t('newProductsTesting') }}</p>
              <p>{{ $t('cryptocurrencyStrengthening') }}</p>
              <p>{{ $t('promotionCampaigns') }}</p>
            </div>
          </div>
        </li>

        <!-- Q3 2026 -->
        <!-- <li class="timeline-item">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p><small class="text-info">{{ $t('q3_2026') }}</small></p>
            </div>
            <div class="timeline-body">

            </div>
          </div>
        </li> -->

        <!-- Q4 2026 -->
        <!-- <li class="timeline-item timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p><small class="text-info">{{ $t('q4_2026') }}</small></p>
            </div>
            <div class="timeline-body">
             
            </div>
          </div>
        </li> -->

        <!-- Q1 2027 -->
        <!-- <li class="timeline-item">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title fw-bold">{{ $t('2027InnovationDevelopment') }}</h4>
              <p><small class="text-info">{{ $t('q1_2027') }}</small></p>
            </div>
            <div class="timeline-body">
              
            </div>
          </div>
        </li> -->
      </ul>
      <h4 class="text-white container">*{{ $t('note') }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>

<style lang="css" scoped>
.card, p {
  font-size: 0.9rem;
}
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  box-sizing: border-box;
}

.timeline-item:before {
  content: '';
  position: absolute;
  top: 1rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: transparent;
  border: none;
  left: 50%;
  margin-left: -5px;
  z-index: 1;
}

.timeline-item:nth-child(odd) {
  left: 0;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-panel {
  position: relative;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
}

.timeline-heading {
  margin-bottom: 1rem;
}

.timeline-title {
  margin-top: 0;
}

.timeline-body > p {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .timeline-item {
    width: 100%;
    padding-right: 0;
  }

  .timeline-item:nth-child(even) {
    left: 0;
  }
}
</style>
