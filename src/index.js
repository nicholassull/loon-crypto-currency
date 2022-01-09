import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './crypto-service.js';




$(document).ready(function() {
  $("#enter").click(function(){
    $("#crypto-display").show();
    $("#splash").hide();
  })
  $("#trade").click(function() {
    $("#trade-display").show();
    $("#crypto-display").hide();
  })
  $("#back").click(function() {
    $("#crypto-display").show();
    $("#trade-display").hide();
  })



  $("#enter").click(function() {
    let promise = CryptoService.getCrypto()
    promise.then(function(response) {
      const body = JSON.parse(response);
      $("#bitcoin-price").text(`$${body.bitcoin.usd}`);
      $("#bitcoin-change").text(`${body.bitcoin.usd_24h_change.toFixed(3)}%`);
      $("#bitcoin-volume").text(`$${Math.round(body.bitcoin.usd_24h_vol)}`);
      $("#bitcoin-cap").text(`$${Math.round(body.bitcoin.usd_market_cap)}`);

      $("#ethereum-price").text(`$${body.ethereum.usd}`);
      $("#ethereum-change").text(`${body.ethereum.usd_24h_change.toFixed(3)}%`);
      $("#ethereum-volume").text(`$${Math.round(body.ethereum.usd_24h_vol)}`);
      $("#ethereum-cap").text(`$${Math.round(body.ethereum.usd_market_cap)}`);

      $("#dogecoin-price").text(`$${body.dogecoin.usd}`);
      $("#dogecoin-change").text(`${body.dogecoin.usd_24h_change.toFixed(3)}%`);
      $("#dogecoin-volume").text(`$${Math.round(body.dogecoin.usd_24h_vol)}`);
      $("#dogecoin-cap").text(`$${Math.round(body.dogecoin.usd_market_cap)}`);

      $("#algorand-price").text(`$${body.algorand.usd}`);
      $("#algorand-change").text(`${body.algorand.usd_24h_change.toFixed(3)}%`);
      $("#algorand-volume").text(`$${Math.round(body.algorand.usd_24h_vol)}`);
      $("#algorand-cap").text(`$${Math.round(body.algorand.usd_market_cap)}`);

      $("#ethereum-info").text(`Price in USD:  $${body.ethereum.usd}`);
      $("#dogecoin-info").text(`Price in USD:  $${body.dogecoin.usd}`);
      $("#algorand-info").text(`Price in USD:  $${body.algorand.usd}`);
    }, function(error) {
      $("#showError").text(`Oops! There was the following error: ${error}`);
    });
  });
});
