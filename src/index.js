import $ from 'jquery';
import 'bootstrap';
import CryptoService from './crypto-service.js';



$(document).ready(function() {
  $("#test").click(function() {
    let promise = CryptoService.getCrypto()
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      console.log(body.bitcoin.usd);
      $("#bitcoin").text(`Bitcoin Price in USD:  ${body.bitcoin.usd}`);
      $("#ethereum").text(`Ethereum Price in USD:  ${body.ethereum.usd}`);
      $("#dogecoin").text(`Dogecoin Price in USD:  ${body.dogecoin.usd}`);
      $("#algorand").text(`Algorand Price in USD:  ${body.algorand.usd}`);
    }, function(error) {
      $("#showError").text(`Oops! There was the following error: ${error}`);
    });
  });
});
