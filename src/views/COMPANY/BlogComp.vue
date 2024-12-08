<!-- <template>
  <section class="about-section text-center" id="about">
    
    <div
      class="component-container container text-white component-1"
      v-if="showComponent1"
    >
      <div class="row">
        <div class="col-6">
          
          <br/> <br/>
          <h1 style="">{{ $t("4V Company White Paper") }}</h1>
          <p class="lea text-white-50">
            {{ $t("4V Company aims to become a leading provider of news and information services by leveraging cutting-edge technologies such as artificial intelligence (AI), machine learning (ML), and blockchain. This document outlines the key directions and technical aspects that will be implemented to achieve the set goals over the next three years.") }}
            {{ $t("All bots will be integrated with the 4V.News news aggregator. This will ensure data synchronization and personalized news feeds for each user. The bots will receive data from the aggregator and provide it to users in a convenient format.") }}

          
          </p>
        </div>
        <div class="col-6">
          <br/> <br/>
          <img
            src="https://media.licdn.com/dms/image/D5612AQFcrtOTjPg0NQ/article-cover_image-shrink_600_2000/0/1713955841917?e=2147483647&v=beta&t=Nn85wxQf6-TeamyY-szdnA9Cpc7NrTuTM5PYLud1EPI"
            alt="Web3 Development Image"
            class="img-fluid mt-3"
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <img
            src="https://miro.medium.com/v2/resize:fit:626/0*QETGdgOJLey5O2Ir.jpg"
            alt="Introduction Image"
            class="img-fluid mt-3"
          />
        </div>
        <div class="col-6">
          <br/>
          <h1 style="">{{ $t("Main DirectionsInnovative Approach") }}</h1>
          <p class="text-white-50">
            {{ $t(" Using AI to create personalized news feeds.Broad Coverage: Collecting and aggregating news from around the world on various topics.Convenient Tools: Developing bots and aggregators for easy access to newsOwn Cryptocurrency: Promoting and integrating 4V cryptocurrency.Web 3.0 Development: Launching decentralized exchanges (DEX), DeFi services, and NFT platforms.") }}
            
          </p>
          
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <br/> <br/>
          <h1 style="">{{ $t("Innovative Approach") }}</h1>
          <p class="text-white-50">
            {{ $t("") }}
            {{ $t("Aggregating news from various sources is the foundation for creating personalized news feeds. This includes collecting information from news sites, social networks, blogs, and other sources.") }}
            {{ $t("To prepare data for analysis, it goes through filtering and normalization stages. This helps to exclude irrelevant information and standardize the data format.") }}
            {{ $t("Developing and training AI models to analyze user preferences and personalize news content. The models will be trained on large volumes of data to accurately determine users' interests.") }}
            {{ $t("Integrating AI models into bots and web applications to provide personalized news. This will allow users to receive relevant and interesting news in a convenient format.") }}
            
          </p>
         
        </div>

        <div class="col-6 mt-16">
          <br /><br />
          <img
            src="https://cdn.wan-ifra.org/wp-content/uploads/2023/10/25095108/AI-market-watch-2.png"
            alt="Data Processing Image"
            class="img-fluid mt-3"
          />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <br />
          <img
            src="https://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/blockchain-network%20Cropped.jpg"
            alt="AI Models Image"
            class="img-fluid mt-3"
          />
        </div>
        <div class="col-6">
          <br />
          <br />
          <br />
          <h1 style="">{{ $t("Broad Coverage") }}</h1>
          <p class="text-white-50">
            {{ $t("News Collection and Aggregation. 4V Company collects and aggregates news from various sources around the world. This ensures users have access to diverse and up-to-date information on various topics. The 4V.News aggregator will be integrated with bots for various messengers and social networks, allowing users to receive news in a convenient format.") }}

          </p>
         
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <br/>
          <h1 style="">{{ $t("Launch ") }}</h1>
          <p class="text-white-50">{{ $t("Public launch of the platform and integration with 4V cryptocurrency. Users will be able to trade 4V cryptocurrency on decentralized exchanges and use DeFi services") }}</p>

         
        </div>
        <div class="col-6">
          <img
            src="https://crypto.ru/wp-content/uploads/post/387930/defi-servisy-4.jpg"
            alt="AI Models Image"
            class="img-fluid mt-3"
          />
        </div>
      </div>

     
      <div class="row mt-4">
        <div class="col-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/488/800/non_2x/social-media-icons-on-transparent-background-instagram-facebook-messenger-twitter-tiktok-whatsapp-youtube-logo-set-3d-editorial-illustration-free-png.png"
            alt="AI Models Image"
            class="img-fluid mt-3"
          />
        </div>
        <div class="col-6">
          <br/><br/><br/>
          <h1 style="">{{ $t("Bot and Aggregator Development ") }}</h1>
          <p class="text-white-50">
            {{ $t("Bots will be developed for popular messengers and social networks such as WhatsApp, Facebook Messenger, Instagram, LinkedIn, and TikTok. Each bot will provide users with access to news and personalized feeds based on their interests.") }}

            <br/><router-link to="/benefits"> 
              <br/><br/><br/>
              <button class="btn-danger1 ">Техническая документация</button></router-link>
          </p>
        
        </div>
      </div>
      <br/> <br/>
      <div class="tokenomika text-white">
        <h1>Токеномика FVX </h1>

        <div class="row">
          <div class="col-12">
            <br /><br /><br />
            <h1 style="">
              {{
                $t(
                  "FVX — это основной токен в экосистеме 4V, который выполняет несколько функций:"
                )
              }}
            </h1>
            <p class="text-white-50 lea">
              {{
                $t(
                  "Оплата транзакций. Пользователи оплачивают комиссии за кроссчейн-переводы с использованием FVX. Комиссии включают оплату миксинга транзакций, использование мостов и проверку оракулами."
                )
              }}
              {{
                $t(
                  "Стейкинг. Пользователи могут застейкать FVX, чтобы участвовать в сети 4V, получая за это вознаграждения. Стейкинг повышает безопасность сети, так как больше средств привлекается для обеспечения надежности мостов и валидаторов."
                )
              }}

              {{
                $t(
                  "Голосование. Владельцы FVX будут иметь право голосовать по важным вопросам развития экосистемы 4V, что делает проект децентрализованным и демократичным."
                )
              }}
            </p>
          </div>
         
        </div>

        <div class="row mt-4">
          <div class="col-6">
            <img
              src="https://www.mitsuiwa.co.jp/mitsuiwa2/wp-content/uploads/2022/11/20221107090337-960x504.jpg"
              alt="Introduction Image"
              class="img-fluid "
            />
          </div>
          <div class="col-6">
            <br/><br/>
            
            <p class="text-white-50">
              
              {{ $t('Делегирование стейкинга Пользователи смогут делегировать свои токены FVX другим валидаторам, получая процент от их вознаграждений. Делегирование будет стимулировать держателей токенов оставлять их в системе и увеличивать ликвидность проекта.') }}

              {{ $t("whitepaper.innovativeApproach.dataCollectionText") }}
            </p>
           
          </div>
        </div>
        <br/>
        <h2 class=" mt-4">Распределение токенов FVX </h2>
        <div class="row mt-4">
         
          <div class="col-6">
            <br/><br/><br/><br/>
            <h1>{{ $t("Распределение токенов") }}</h1>
            <h5>
              <h5 class="text-white">Общее количество токенов: 444 000 000 (444 мил)</h5> 
              {{ $t('37% — для пользователей через стейкинг, вознаграждения за участие и другие активности.') }}</h5>
              <h5>  {{ $t("17% — команда и разработчики.") }}</h5>
              <h5> {{ $t("24% — для ликвидности (в пулах ликвидности и на биржах).") }}</h5>
              <h5> {{ $t("22% — для программы раннего доступа и баунти-кампаний.") }}</h5>
              <h5> {{ $t(" партнёрских программ и реферальных бонусов.") }}</h5>
            
           
          </div>
          <div class="col-6">
            <img
              src="https://escoin.ee/wp-content/uploads/infographic.png"
              alt="Introduction Image"
              class="img-fluid mt-3"
            />
          </div>
        </div>
      </div>
     
      <div class="row mt-4">
        <div class="col">
          <h1>{{ $t("whitepaper.conclusion") }}</h1>
          <p>{{ $t("4V — это инновационная платформа, объединяющая новейшие технологии сбора, обработки и распространения новостей и контента по всему миру. Мы сосредоточены на предоставлении актуальной и качественной информации, используя мощные инструменты анализа и искусственного интеллекта") }}</p>
        </div>
      </div>
    </div>
















    <div v-else class="container text-white component-2 component-container">
     
      <div class="row">
        <div class="col-12">
          <br /><br /><br /><br />
          <h1 style="">{{ $t("4V Company White Paper") }}</h1>
          <img
            src="https://media.licdn.com/dms/image/D5612AQFcrtOTjPg0NQ/article-cover_image-shrink_600_2000/0/1713955841917?e=2147483647&v=beta&t=Nn85wxQf6-TeamyY-szdnA9Cpc7NrTuTM5PYLud1EPI"
            alt="Introduction Image"
            class="img-fluid "
          />
        </div>
        <div class="col-12">
         
         
          <h5 class="text-white-50 lea">
            {{ $t("4V Company aims to become a leading provider of news and information services by leveraging cutting-edge technologies such as artificial intelligence (AI), machine learning (ML), and blockchain. This document outlines the key directions and technical aspects that will be implemented to achieve the set goals over the next three years.") }}
            {{ $t("All bots will be integrated with the 4V.News news aggregator. This will ensure data synchronization and personalized news feeds for each user. The bots will receive data from the aggregator and provide it to users in a convenient format.") }}

          </h5>
        </div>

        <div class="col-12">
          <img
            src="https://miro.medium.com/v2/resize:fit:626/0*QETGdgOJLey5O2Ir.jpg"
            alt="Web3 Development Image"
            class="img-fluid"
          />
        </div>
        <div class="col-12">
          <br/>
          <h1 style="">{{ $t("Main DirectionsInnovative Approach") }}</h1>
          <p class="text-white-50">
            {{ $t(" Using AI to create personalized news feeds.Broad Coverage: Collecting and aggregating news from around the world on various topics.Convenient Tools: Developing bots and aggregators for easy access to newsOwn Cryptocurrency: Promoting and integrating 4V cryptocurrency.Web 3.0 Development: Launching decentralized exchanges (DEX), DeFi services, and NFT platforms.") }}
            
          </p>
         
        </div>
      
        <div class="col-12">
          <img
            src="https://cdn.wan-ifra.org/wp-content/uploads/2023/10/25095108/AI-market-watch-2.png"
            alt="Data Processing Image"
            class="img-fluid "
          />
        </div>

        <div class="col-12">
          <h1 style="">{{ $t("Innovative Approach") }}</h1>
          <p class="text-white-50">
            {{ $t("") }}
            {{ $t("Aggregating news from various sources is the foundation for creating personalized news feeds. This includes collecting information from news sites, social networks, blogs, and other sources.") }}
            {{ $t("To prepare data for analysis, it goes through filtering and normalization stages. This helps to exclude irrelevant information and standardize the data format.") }}
            {{ $t("Developing and training AI models to analyze user preferences and personalize news content. The models will be trained on large volumes of data to accurately determine users' interests.") }}
            {{ $t("Integrating AI models into bots and web applications to provide personalized news. This will allow users to receive relevant and interesting news in a convenient format.") }}
            
          </p>
          
        </div>
        <div class="col-12">
          <img
            src="https://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/blockchain-network%20Cropped.jpg"
            alt="AI Models Image"
            class="img-fluid"
          />
        </div>
        <div class="col-12">
          <h1 style="">{{ $t("Broad Coverage") }}</h1>
          <p class="text-white-50">
            {{ $t("News Collection and Aggregation. 4V Company collects and aggregates news from various sources around the world. This ensures users have access to diverse and up-to-date information on various topics. The 4V.News aggregator will be integrated with bots for various messengers and social networks, allowing users to receive news in a convenient format.") }}
            
          </p>
        </div>
        <div class="col-12">
          <img
            src="https://crypto.ru/wp-content/uploads/post/387930/defi-servisy-4.jpg"
            alt="AI Models Image"
            class="img-fluid "
          />
        </div>
        <div class="col-12">
          <h1 style="">{{ $t("Launch ") }}</h1>
          <p class="text-white-50">{{ $t("Public launch of the platform and integration with 4V cryptocurrency. Users will be able to trade 4V cryptocurrency on decentralized exchanges and use DeFi services") }}</p>

        </div>
   
       
        <div class="col-12">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/488/800/non_2x/social-media-icons-on-transparent-background-instagram-facebook-messenger-twitter-tiktok-whatsapp-youtube-logo-set-3d-editorial-illustration-free-png.png"
            alt="AI Models Image"
            class="img-fluid "
          />
        </div>
        <div class="col-12">
          
         
            <h1 style="">{{ $t("Bot and Aggregator Development ") }}</h1>
            <p class="text-white-50">
            {{ $t("Bots will be developed for popular messengers and social networks such as WhatsApp, Facebook Messenger, Instagram, LinkedIn, and TikTok. Each bot will provide users with access to news and personalized feeds based on their interests.") }}

            <router-link to="/benefits"> 
             
              <br/><button class="btn-danger1 mt-2">Техническая документация</button></router-link>
          </p>
        </div>

        <h2>Токеномика FVX</h2>
        
        <div class="col-12">
          <h1 style="">
              {{
                $t(
                  "FVX — это основной токен в экосистеме 4V, который выполняет несколько функций:"
                )
              }}
            </h1>
            <p class="text-white-50 lea">
              {{
                $t(
                  "Оплата транзакций. Пользователи оплачивают комиссии за кроссчейн-переводы с использованием FVX. Комиссии включают оплату миксинга транзакций, использование мостов и проверку оракулами."
                )
              }}
              {{
                $t(
                  "Стейкинг. Пользователи могут застейкать FVX, чтобы участвовать в сети 4V, получая за это вознаграждения. Стейкинг повышает безопасность сети, так как больше средств привлекается для обеспечения надежности мостов и валидаторов."
                )
              }}

              {{
                $t(
                  "Голосование. Владельцы FVX будут иметь право голосовать по важным вопросам развития экосистемы 4V, что делает проект децентрализованным и демократичным."
                )
              }}
            </p>
        </div>
     

     
          <div class="col-12">
            
           
     
          <div class="col-12">
            <img
              src="https://www.mitsuiwa.co.jp/mitsuiwa2/wp-content/uploads/2022/11/20221107090337-960x504.jpg"
              alt="Introduction Image"
              class="img-fluid "
            />
          </div>
          <div class="col-12">
            
            <p class="text-white-50">
              
              {{ $t('Делегирование стейкинга Пользователи смогут делегировать свои токены FVX другим валидаторам, получая процент от их вознаграждений. Делегирование будет стимулировать держателей токенов оставлять их в системе и увеличивать ликвидность проекта.') }}

              {{ $t("whitepaper.innovativeApproach.dataCollectionText") }}
            </p>
           
          </div>
          </div>




          <h2 class=" mt-4">Распределение токенов FVX</h2>
     
         
          <div class="col-12">

            <h1>{{ $t("Распределение токенов") }}</h1>
           
              <h5 class="text-white">Общее количество токенов: 444 000 000 (444 мил)</h5> 
             
              <h5>{{ $t('37% — для пользователей через стейкинг, вознаграждения за участие и другие активности.') }}</h5>
              <h5>  {{ $t("17% — команда и разработчики.") }}</h5>
              <h5> {{ $t("24% — для ликвидности (в пулах ликвидности и на биржах).") }}</h5>
              <h5> {{ $t("22% — для программы раннего доступа и баунти-кампаний.") }}</h5>
              <h5> {{ $t(" партнёрских программ и реферальных бонусов.") }}</h5>
            
           
          </div>
          <div class="col-12">
            <img
              src="https://escoin.ee/wp-content/uploads/infographic.png"
              alt="Introduction Image"
              class="img-fluid "
            />
          </div>
       
        <div class="col-12">
          <h1>{{ $t("whitepaper.conclusion") }}</h1>
          <p>{{ $t("4V — это инновационная платформа, объединяющая новейшие технологии сбора, обработки и распространения новостей и контента по всему миру. Мы сосредоточены на предоставлении актуальной и качественной информации, используя мощные инструменты анализа и искусственного интеллекта") }}</p>
        </div>
      </div>
    </div>
  </section>
</template> -->



<template>
  <section class="about-section text-center" id="about">
    <div class="component-container container text-white component-1" v-if="showComponent1">
      <!-- Первый компонент -->
      <div class="row">
        <div class="col-6">
          <br /><br />
          <h1>{{ $t("whitepaper.title") }}</h1>
          <p class="lea text-white-50">
            {{ $t("whitepaper.introduction") }}
          </p>
        </div>
        <div class="col-6">
          <br /><br />
          <img src="https://media.licdn.com/dms/image/D5612AQHFLVj0T0UX2A/article-cover_image-shrink_720_1280/0/1710596806311?e=2147483647&v=beta&t=XNMksUcbxjl3IIU_SPpU3WT-Qzqtnk-pWuIX35rxctg" alt="Web3 Development Image" class="img-fluid mt-3" />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <img src="https://miro.medium.com/v2/resize:fit:626/0*QETGdgOJLey5O2Ir.jpg" alt="Introduction Image" class="img-fluid mt-3" />
        </div>
        <div class="col-6">
          <br />
          <h1>{{ $t("whitepaper.mainDirections") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.mainDirectionsDescription") }}
          </p>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <br /><br />
          <h1>{{ $t("whitepaper.innovativeApproach") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.innovativeApproachDescription") }}
          </p>
        </div>
        <div class="col-6 mt-16">
          <br /><br />
          <img src="https://media.licdn.com/dms/image/v2/D5612AQET9SaDe12h5w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662539923647?e=2147483647&v=beta&t=f4z_BwtTrpKvY7uXmbRPcsNuAbhUZ_KyidQwu2G5p2k" alt="Data Processing Image" class="img-fluid mt-3" />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <br />
          <img src="https://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/blockchain-network%20Cropped.jpg" alt="AI Models Image" class="img-fluid mt-3" />
        </div>
        <div class="col-6">
          <br /><br /><br />
          <h1>{{ $t("whitepaper.broadCoverage") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.broadCoverageDescription") }}
          </p>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <br />
          <h1>{{ $t("whitepaper.launch") }}</h1>
          <p class="text-white-50">{{ $t("whitepaper.launchDescription") }}</p>
        </div>
        <div class="col-6">
          <img src="https://crypto.ru/wp-content/uploads/post/387930/defi-servisy-4.jpg" alt="Launch Image" class="img-fluid mt-3" />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <img src="https://static.vecteezy.com/system/resources/previews/022/488/800/non_2x/social-media-icons-on-transparent-background-instagram-facebook-messenger-twitter-tiktok-whatsapp-youtube-logo-set-3d-editorial-illustration-free-png.png" alt="Social Media Icons" class="img-fluid mt-3" />
        </div>
        <div class="col-6">
          <br /><br /><br />
          <h1>{{ $t("whitepaper.botDevelopment") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.botDevelopmentDescription") }}
            <br />
            <router-link to="/benefits">
              <button class="btn-danger1 mt-2">{{ $t("whitepaper.technicalDocumentation") }}</button>
            </router-link>
          </p>
        </div>
      </div>

      <br /><br />
      <div class="tokenomika text-white">
        <h1>{{ $t("whitepaper.tokenomicsTitle") }}</h1>

        <div class="row">
          <div class="col-12">
            <br />
            <!-- <h1>{{ $t("whitepaper.tokenUsage") }}</h1> -->
            <p class="text-white-50 lea">
              {{ $t("whitepaper.tokenUsageDescription") }}
            </p>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-6">
            <img src="https://www.mitsuiwa.co.jp/mitsuiwa2/wp-content/uploads/2022/11/20221107090337-960x504.jpg" alt="Introduction Image" class="img-fluid" />
          </div>
          <div class="col-6">
            <br /><br />
            <p class="text-white-50">
              {{ $t("whitepaper.stakingDelegation") }}
            </p>
          </div>
        </div>

        <br />
        <h2>{{ $t("whitepaper.tokenDistributionTitle") }}</h2>
        <div class="row mt-4">
          <div class="col-6">
            <br /><br /><br /><br />
            <h1>{{ $t("whitepaper.tokenDistribution") }}</h1>
            <h5 class="text-white">{{ $t("whitepaper.totalTokens") }}</h5>
            <h5>{{ $t("whitepaper.userStaking") }}</h5>
            <h5>{{ $t("whitepaper.teamDevelopers") }}</h5>
            <h5>{{ $t("whitepaper.liquidity") }}</h5>
            <h5>{{ $t("whitepaper.earlyAccess") }}</h5>
          </div>
          <div class="col-6">
            <img src="https://escoin.ee/wp-content/uploads/infographic.png" alt="Token Distribution Image" class="img-fluid mt-3" />
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <h1>{{ $t("whitepaper.conclusionTitle") }}</h1>
          <p>{{ $t("whitepaper.conclusionDescription") }}</p>
        </div>
      </div>
    </div>

    <div v-else class="container text-white component-2 component-container">
      <!-- Второй компонент -->
      <div class="row">
    <div class="col-12">
        <br /><br /><br /><br />
        <h1>{{ $t("whitepaper.title") }}</h1>
        
        <img  src="https://media.licdn.com/dms/image/D5612AQHFLVj0T0UX2A/article-cover_image-shrink_720_1280/0/1710596806311?e=2147483647&v=beta&t=XNMksUcbxjl3IIU_SPpU3WT-Qzqtnk-pWuIX35rxctg" alt="Introduction Image" class="img-fluid mt-2" />
    </div>
    <div class="col-12 mt-4">
        <h5 class="text-white-50 lea">
            {{ $t("whitepaper.introduction") }}
        </h5>
    </div>
    <div class="col-12">
        <img src="https://miro.medium.com/v2/resize:fit:626/0*QETGdgOJLey5O2Ir.jpg" alt="Web3 Development Image" class="img-fluid" />
    </div>
    <div class="col-12">
        <br />
        <h1>{{ $t("whitepaper.mainDirections") }}</h1>
        <p class="text-white-50">
            {{ $t("whitepaper.mainDirectionsDescription") }}
        </p>
    </div>
    <div class="col-12">
        <img src="https://media.licdn.com/dms/image/v2/D5612AQET9SaDe12h5w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662539923647?e=2147483647&v=beta&t=f4z_BwtTrpKvY7uXmbRPcsNuAbhUZ_KyidQwu2G5p2k" alt="Data Processing Image" class="img-fluid" />
    </div>
    <div class="col-12">
        <h1 class="mt-4">{{ $t("whitepaper.innovativeApproach") }}</h1>
        <p class="text-white-50 ">
            {{ $t("whitepaper.innovativeApproachDescription") }}
        </p>
    </div>
    <div class="col-12">
        <img src="https://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/blockchain-network%20Cropped.jpg" alt="AI Models Image" class="img-fluid" />
    </div>
    <div class="col-12 mt-3">
        <h1>{{ $t("whitepaper.broadCoverage") }}</h1>
        <p class="text-white-50">
            {{ $t("whitepaper.broadCoverageDescription") }}
        </p>
    </div>
    <div class="col-12">
        <img src="https://crypto.ru/wp-content/uploads/post/387930/defi-servisy-4.jpg" alt="DeFi Services Image" class="img-fluid" />
    </div>
    <div class="col-12 mt-3">
        <h1>{{ $t("whitepaper.launch") }}</h1>
        <p class="text-white-50">{{ $t("whitepaper.launchDescription") }}</p>
    </div>
    <div class="col-12">
        <img src="https://static.vecteezy.com/system/resources/previews/022/488/800/non_2x/social-media-icons-on-transparent-background-instagram-facebook-messenger-twitter-tiktok-whatsapp-youtube-logo-set-3d-editorial-illustration-free-png.png" alt="Social Media Icons" class="img-fluid" />
    </div>
    <div class="col-12">
        <h1>{{ $t("whitepaper.botDevelopment") }}</h1>
        <p class="text-white-50">
            {{ $t("whitepaper.botDevelopmentDescription") }}
            <router-link to="/benefits">
                <button class="btn-danger1 mt-2">{{ $t("whitepaper.technicalDocumentation") }}</button>
            </router-link>
        </p>
    </div>

    <!-- Добавлен раздел токеномики FVX с изображениями -->
    <div class="col-12">
        <h1>{{ $t("whitepaper.tokenomicsTitle") }}</h1>
        <p class="text-white-50">{{ $t("whitepaper.tokenUsageDescription") }}</p>
        <h3>{{ $t("whitepaper.stakingDelegation") }}</h3>
    </div>
    <div class="col-12">
        <img src="https://www.mitsuiwa.co.jp/mitsuiwa2/wp-content/uploads/2022/11/20221107090337-960x504.jpg" alt="Token Staking Image" class="img-fluid mt-3" />
    </div>
    <div class="col-12">
        <h2>{{ $t("whitepaper.tokenDistributionTitle") }}</h2>
        <h5 class="text-white">{{ $t("whitepaper.totalTokens") }}</h5>
        <ul class="text-white-50">
            <li>{{ $t("whitepaper.userStaking") }}</li>
            <li>{{ $t("whitepaper.teamDevelopers") }}</li>
            <li>{{ $t("whitepaper.liquidity") }}</li>
            <li>{{ $t("whitepaper.earlyAccess") }}</li>
        </ul>
    </div>
    <div class="col-12">
        <img src="https://escoin.ee/wp-content/uploads/infographic.png" alt="Token Distribution Infographic" class="img-fluid mt-3" />
    </div>

    <div class="col-12">
        <h1>{{ $t("whitepaper.conclusionTitle") }}</h1>
        <p class="text-white-50">{{ $t("whitepaper.conclusionDescription") }}</p>
    </div>
</div>

      <!-- <div class="row">
        <div class="col-12">
          <br /><br /><br /><br />
          <h1>{{ $t("whitepaper.title") }}</h1>
          <img src="https://media.licdn.com/dms/image/D5612AQFcrtOTjPg0NQ/article-cover_image-shrink_600_2000/0/1713955841917?e=2147483647&v=beta&t=Nn85wxQf6-TeamyY-szdnA9Cpc7NrTuTM5PYLud1EPI" alt="Introduction Image" class="img-fluid" />
        </div>
        <div class="col-12">
          <h5 class="text-white-50 lea">
            {{ $t("whitepaper.introduction") }}
          </h5>
        </div>
        <div class="col-12">
          <img src="https://miro.medium.com/v2/resize:fit:626/0*QETGdgOJLey5O2Ir.jpg" alt="Web3 Development Image" class="img-fluid" />
        </div>
        <div class="col-12">
          <br />
          <h1>{{ $t("whitepaper.mainDirections") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.mainDirectionsDescription") }}
          </p>
        </div>
        <div class="col-12">
          <img src="https://cdn.wan-ifra.org/wp-content/uploads/2023/10/25095108/AI-market-watch-2.png" alt="Data Processing Image" class="img-fluid" />
        </div>
        <div class="col-12">
          <h1>{{ $t("whitepaper.innovativeApproach") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.innovativeApproachDescription") }}
          </p>
        </div>
        <div class="col-12">
          <img src="https://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/blockchain-network%20Cropped.jpg" alt="AI Models Image" class="img-fluid" />
        </div>
        <div class="col-12">
          <h1>{{ $t("whitepaper.broadCoverage") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.broadCoverageDescription") }}
          </p>
        </div>
        <div class="col-12">
          <img src="https://crypto.ru/wp-content/uploads/post/387930/defi-servisy-4.jpg" alt="AI Models Image" class="img-fluid" />
        </div>
        <div class="col-12">
          <h1>{{ $t("whitepaper.launch") }}</h1>
          <p class="text-white-50">{{ $t("whitepaper.launchDescription") }}</p>
        </div>
        <div class="col-12">
          <img src="https://static.vecteezy.com/system/resources/previews/022/488/800/non_2x/social-media-icons-on-transparent-background-instagram-facebook-messenger-twitter-tiktok-whatsapp-youtube-logo-set-3d-editorial-illustration-free-png.png" alt="AI Models Image" class="img-fluid" />
        </div>
        <div class="col-12">
          <h1>{{ $t("whitepaper.botDevelopment") }}</h1>
          <p class="text-white-50">
            {{ $t("whitepaper.botDevelopmentDescription") }}
            <router-link to="/benefits">
              <button class="btn-danger1 mt-2">{{ $t("whitepaper.technicalDocumentation") }}</button>
            </router-link>
          </p>
        </div>
      </div> -->
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      isLargeScreen: window.innerWidth > 1000,
    };
  },
  computed: {
    showComponent1() {
      return this.isLargeScreen;
    },
  },
  methods: {
    handleResize() {
      this.isLargeScreen = window.innerWidth > 1000;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="css" scoped>
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

img{
  border-radius: 25px;
}
#about {
  background-color:#091520;
}
 
h1 {
  font-size: 2vw; /* Адаптация шрифтов к размеру экрана */
  /* font-weight: bold; */
}

p ,h5{
  font-size: 1.2vw; /* Адаптация для абзацев */
}
@media screen and (max-width: 1000px) {
  h1{
    font-size: 2.5vw; 
  }

  p ,h5{
    font-size: 3vw;
  }
}
@media screen and (max-width: 768px) {
  h1{
    font-size: 3vw; 
  }

  p ,h5{
    font-size: 3vw;
  }
}

@media screen and (max-width: 480px) {
  h1{
    font-size: 6vw; 
  }

  p ,h5{
    font-size: 5vw;
  }
}





/* img {
  width: 100%;
  height: auto;
}


@media screen and (max-width: 768px) {
  h1, h2 ,h3{
    font-size: 5vw; 
  }

  p {
    font-size: 3vw;
  }
}

@media screen and (max-width: 480px) {
  

  p {
    font-size: 4vw;
  }
} */

</style>
