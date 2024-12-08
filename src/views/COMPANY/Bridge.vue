<!-- <template>
<br/><br/><br/><br/><br/><br/><br/><br/>
  <div class="bridge text-white">
    <h1 style="" class="text-success ">BridgeX</h1>

    <div class="wallet-actions">
      <button @click="connectWallet" class="main-btn btn-danger1">Подключить кошелек</button>
      <button @click="generatePublicAddress" class="main-btn btn-danger1">Сгенерировать публичный адрес</button>
      <button @click="viewPrivateAddresses" class="main-btn btn-danger1">Просмотреть приватные адреса</button>
    </div> 

    <div v-if="publicAddress" class="address-section">
      <h2>Ваш единый публичный адрес:</h2>
      <p>{{ publicAddress }}</p>
      <button @click="copyToClipboard(publicAddress)" class="btn-danger1">Скопировать адрес</button>
    </div>

    <div v-if="privateAddresses.length > 0" class="private-addresses">
      <h2>Ваши приватные адреса:</h2>
      <ul>
        <li v-for="(address, index) in privateAddresses" :key="index">{{ address }}</li>
      </ul>
      <button @click="copyPrivateAddresses" class="btn-danger1">Скопировать все приватные адреса</button>
    </div>

    <div v-if="walletConnected" class="status">
      <h3>Кошелек подключен: {{ walletAddress }}</h3>
    </div>

    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>
  </div>
  <br/><br/><br/><br/><br/>
</template>

<script>
export default {
  data() {
    return {
      walletConnected: false,
      walletAddress: null,
      publicAddress: null,
      privateAddresses: [],
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
      } catch (err) {
        this.error = "Не удалось подключить кошелек.";
      }
    },
    generatePublicAddress() {
      // Генерация единого публичного адреса
      this.publicAddress = "0xYourGeneratedPublicAddress";
    },
    viewPrivateAddresses() {
      // Пример списка приватных адресов (может быть заменен реальной логикой)
      this.privateAddresses = [
        "0xPrivateAddress1",
        "0xPrivateAddress2",
        "0xPrivateAddress3"
      ];
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
      alert("Адрес скопирован в буфер обмена!");
    },
    copyPrivateAddresses() {
      const allAddresses = this.privateAddresses.join("\n");
      navigator.clipboard.writeText(allAddresses);
      alert("Все приватные адреса скопированы в буфер обмена!");
    }
  }
};
</script>

<style scoped>
.btn-danger1 {
  margin: 9px;
  color: rgb(51, 148, 57); /* Цвет текста */
  font-weight: bold;
  margin-top: 10px;
  font-size: 13px;
  position: relative;
  z-index: 100;
  padding: 10px 20px;
  border: 1px solid;
  border-radius: 17px;
  background-color:#091520; /* Более тёмный оттенок с фиолетово-синим */
  background-size: 200% 200%;
  box-shadow: 0px 5px 10px rgba(77, 75, 75, 0.6), inset 0px -2px 8px rgba(255, 255, 255, 0.2);
  transform: perspective(500px) translateZ(30px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-danger1:hover {
  transform: perspective(500px) translateZ(20px);
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.8), inset 0px -3px 12px rgba(255, 255, 255, 0.2);
}

.btn-danger1:active {
  transform: perspective(500px) translateZ(5px);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4), inset 0px -1px 5px rgba(255, 255, 255, 0.1);
}

.bridge {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  /* color: #333; */
  text-align: center;
  margin-bottom: 30px;
}

.wallet-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.main-btn {
  
  color: white;
  padding: 15px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 10px;
  text-align: center;
}

.main-btn:hover {
  background-color: #0a1926;
}

.secondary-btn {
  background-color: #7b8d9d;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 15px;
}

.secondary-btn:hover {
  background-color: #5c6c7c;
}

.address-section, .private-addresses, .status {
  margin-top: 30px;
}

h2 {
  /* color: #2a2a2a; */
  font-size: 22px;
}

p, li {
  font-size: 16px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

.error {
  color: red;
  font-weight: bold;
  margin-top: 20px;
}
</style> -->
<template>
  <br/><br/>
  <div class="container ">
    <div class="bridge text-white">
      <h1 style="color: orange;">4V.DEX</h1>
      <h6 class="text-white mb-3">
    Покупайте, продавайте и обменивайте вашу криптовалюту на нашем DEX - 4V.DEX! Наш межсетевой мост поддерживает основные сети, такие как TON, Ethereum, TRON, Binance Smart Chain, Polygon, TON, Avalanche, Fantom и другие, обеспечивая широкие возможности для пользователей.
      </h6>
      <br/>
      <div class="wallet-actions">
        <button @click="connectWallet" class="main-btn btn-danger1  text-white-50">Подключить кошелек</button>
        <button @click="generatePublicAddress" class="main-btn btn-danger1  text-white-50">Межсетевой мост</button>
        <button @click="viewPrivateAddresses" class="main-btn btn-danger1  text-white-50">Перейти в DEX</button>
      </div>

      <div v-if="publicAddress" class="address-section">
        <h2>Ваш единый публичный адрес:</h2>
        <p>{{ publicAddress }}</p>
        <button @click="copyToClipboard(publicAddress)" class="btn-danger1">Скопировать адрес</button>
      </div>

      <div v-if="privateAddresses.length > 0" class="private-addresses">
        <h2>Ваши приватные адреса:</h2>
        <ul>
          <li v-for="(address, index) in privateAddresses" :key="index">{{ address }}</li>
        </ul>
        <button @click="copyPrivateAddresses" class="btn-danger1">Скопировать все приватные адреса</button>
      </div>

      <div v-if="walletConnected" class="status">
        <h3>Кошелек подключен: {{ walletAddress }}</h3>
      </div>

      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>

      <!-- Логотипы с ссылками -->
      <div class="wallet-logos">
        <a href="https://metamask.io/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/640px-MetaMask_Fox.svg.png" alt="MetaMask" />
        </a>
        <a href="https://www.exodus.com/" target="_blank">
          <img src="https://crypto-central.io/library/uploads/Exodus-Wallet-Logo-298x300.png" alt="Exodus" />
        </a>
        <a href="https://trustwallet.com/" target="_blank">
          <img src="https://crypto-central.io/library/uploads/Trust-Wallet-Logo.png" alt="Trust Wallet" />
        </a>
        <a href="https://electrum.org/" target="_blank">
          <img src="../../../assets/img/electrum.png" alt="Electrum" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      walletConnected: false,
      walletAddress: null,
      publicAddress: null,
      privateAddresses: [],
      error: null
    };
  },
  methods: {
    async connectWallet() {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        this.walletAddress = accounts[0];
        this.walletConnected = true;
      } catch (err) {
        this.error = "Не удалось подключить кошелек.";
      }
    },
    generatePublicAddress() {
      this.publicAddress = "0xYourGeneratedPublicAddress";
    },
    viewPrivateAddresses() {
      this.privateAddresses = [
        "0xPrivateAddress1",
        "0xPrivateAddress2",
        "0xPrivateAddress3"
      ];
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
      alert("Адрес скопирован в буфер обмена!");
    },
    copyPrivateAddresses() {
      const allAddresses = this.privateAddresses.join("\n");
      navigator.clipboard.writeText(allAddresses);
      alert("Все приватные адреса скопированы в буфер обмена!");
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

.bridge {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.wallet-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.wallet-logos {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: px;
}

.wallet-logos img {
  height: 50px;
  transition: transform 0.3s ease;
}

.wallet-logos img:hover {
  transform: scale(1.1);
}
</style>
