export default class CryptoService {

  static getCrypto() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=Algorand,Bitcoin,Ethereum,Dogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  static exchange(rate1, rate2, amount ) {
    return (rate1 * amount) / rate2;
  }

  static findRate(cryptoNumber) {
    switch (cryptoNumber) {
    case '1': { // Bitcoin 
      let promise = CryptoService.getCrypto();
      promise.then(function(response) {
        let body = JSON.parse(response);
        console.log(body.bitcoin.usd);
        return body.bitcoin.usd;
      });
      break;
    }
    case '2': { // Ethereum
      let promise2 = CryptoService.getCrypto();
      promise2.then(function(response) {
        let body = JSON.parse(response);
        console.log(body.ethereum.usd);
        return body.ethereum.usd;
      });
      break;
    }
    case '3': { // Dogecoin
      let promise3 = CryptoService.getCrypto();
      promise3.then(function(response) {
        let body = JSON.parse(response);
        console.log(body.dogecoin.usd);
        return body.dogecoin.usd;
      });
      break;
    }
    case '4': { // Algorand
      let promise4 = CryptoService.getCrypto();
      promise4.then(function(response) {
        let body = JSON.parse(response);
        console.log(body.algorand.usd);
        return body.algorand.usd;
      });
      break;
    }
    }
  }
}

