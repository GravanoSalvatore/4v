<template>
  <br/> <br/> <br/> <br/> <br/>
    <div class="staking text-white">
      <h2 class=" text" style="color:  orange;;">Staking 4V.DEFI</h2>
  <p>
    Подключайте кошелёк , выбирайте условия стакинга и зарабатывайте на пассивном доходе!
  </p>
      <div class="wallet-status" v-if="walletConnected">
        <h3>Кошелек подключен: {{ walletAddress }}</h3>
        <p>Баланс VLS: {{ balance }} FVX</p>
      </div>
  
      <div v-if="!walletConnected">
        <button @click="connectWallet" class=" btn-danger1">Подключить кошелек</button>
      </div>
  
      <div v-if="walletConnected && !isStaking">
        <div class="staking-actions">
          <h2>Стейкинг FVX</h2>
          <p>Введите количество токенов FVX для стейкинга:</p>
          <input type="number" v-model="stakeAmount" placeholder="Количество FVX" class="stake-input" />
          <button @click="stakeTokens" class="main-btn btn-danger1">Начать стейкинг</button>
        </div>
      </div>
  
      <div v-if="walletConnected && isStaking">
        <h2>Вы стейкаете {{ stakedAmount }} FVX</h2>
        <p>Ваши награды: {{ reward }} FVX</p>
        <button @click="unstakeTokens" class="main-btn btn-danger1">Забрать награды и вывести токены</button>
      </div>
  
      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        walletConnected: false,
        walletAddress: null,
        balance: 0,
        stakeAmount: 0,
        stakedAmount: 0,
        reward: 0,
        isStaking: false,
        error: null
      };
    },
    methods: {
      async connectWallet() {
        try {
          // Здесь будет код для подключения MetaMask или другого кошелька
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          this.walletAddress = accounts[0];
          this.walletConnected = true;
          await this.loadBalance();
        } catch (err) {
          this.error = "Не удалось подключить кошелек.";
        }
      },
      async loadBalance() {
        // Код для получения баланса токенов VLS у пользователя
        // Например, через Web3 или Ethers.js
        // this.balance = ...;
      },
      async stakeTokens() {
        if (this.stakeAmount <= 0) {
          this.error = "Введите корректное количество токенов.";
          return;
        }
        // Логика для стейкинга токенов
        // Пример: вызов метода стейкинга контракта через Web3 или Ethers.js
        // this.stakedAmount = this.stakeAmount;
        this.isStaking = true;
        this.reward = this.calculateReward();
      },
      async unstakeTokens() {
        // Логика для вывода токенов и получения наград
        // Пример: вызов метода анстейкинга контракта через Web3 или Ethers.js
        this.balance += this.stakedAmount + this.reward;
        this.stakedAmount = 0;
        this.isStaking = false;
        this.reward = 0;
      },
      calculateReward() {
        // Пример простого расчета награды
        return (this.stakedAmount * 0.1); // 10% награда за стейкинг
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

  .staking {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1, h2 {
    /* color: #333; */
    text-align: center;
    margin-bottom: 20px;
  }
  
  .wallet-status {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .staking-actions {
    text-align: center;
  }
  
  .stake-input {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    margin: 20px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .main-btn {
    /* background-color: #4a90e2; */
    color: white;
    padding: 15px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    border-radius: 10px;
    text-align: center;
  }
  
  .main-btn:hover {
    /* background-color: #357ab7; */
  }
  
  .error {
    color: red;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
  }
  </style>
  