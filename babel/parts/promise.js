"use strict";

require("core-js/modules/es6.promise");

function promise() {
  var display = document.querySelector('#display'),
      bullseye = document.querySelector('#rainbow'),
      body = document.querySelector('body'),
      drink = 0;
  init();

  function init() {
    bullseye.addEventListener('click', shootPromise);
    start();
  }

  function shootPromise() {
    shoot().then(win).catch(loose).then(reset);
  }

  function start() {
    body.removeEventListener('click', init);
    display.style.display = 'none';
    body.classList.add('ready');
    console.log('init launched');
  }

  function shoot() {
    bullseye.removeEventListener('click', shootPromise);
    display.style.display = 'flex';
    display.textContent = 'The arrow is on its way...';
    body.classList.remove('ready');
    body.classList.add('wait');
    console.log('shoot fired');
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random() > .5 ? resolve() : reject();
        body.classList.remove('wait');
      }, 3000);
    });
    return promise;
  }

  function win() {
    display.textContent = 'You hit the target!..';
    console.log('Lucky you!');
    setTimeout(function () {
      display.textContent = 'You won';
      drink = Math.random() * 1000 % 2;
      drink >= 1 ? buyBeer() : giveMoney();
      console.log('win timeout');
    }, 1500);
  }

  function buyBeer() {
    display.textContent = "".concat(display.textContent, " (and got an ice cream)");
    console.log('beer');
  }

  function giveMoney() {
    display.textContent = "".concat(display.textContent, " (and got some cash)");
    console.log('money');
  }

  function loose() {
    display.textContent = 'Sorry, you missed the target!';
    console.error('missed =((');
    setTimeout(function () {
      display.textContent = 'You lost... Try again?';
      console.log('loose timeout');
    }, 1500);
  }

  function reset() {
    drink = '';
    body.classList.remove('ready');
    console.log('reset initiated');
    setTimeout(function () {
      display.textContent = 'Click to give it another shot';
      body.addEventListener('click', init);
      console.log('reset/timeout created!');
    }, 3000);
    console.log('reset finished');
  }
}

;
module.exports = promise;