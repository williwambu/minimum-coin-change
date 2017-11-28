"use strict";
// Angular app
var app = angular.module('MakeCoinChange', []);

// Angular constant to hold coin denominations
app.constant('COINS', [200, 100, 50, 20, 10, 5, 2, 1]);

// MakeCoinChangeController
app.controller('MakeCoinChangeController', ['$scope', 'COINS', makeCoinChangeController]);

function makeCoinChangeController($scope, COINS) {
  // currency input value
  $scope.currencyInput = null;

  // called on form submit
  $scope.makeChangeSubmit = makeChangeSubmit;


  function makeChangeSubmit(formValid) {
    if (!formValid)
      return;

    // validation validationError
    $scope.validationError = null;

    var userInput = $scope.currencyInput;

    //validate user input
    var validationObject = Validator.validate(userInput);
    if (!validationObject.valid) {
      $scope.validationError = validationObject.error;
      $scope.result = null;
      return;
    }
    else
      processInput(userInput);
  }

  /**
   * Process user input by calling makeChange and summarizeCoinChange functions
   * assign change to $scope
   * @param {string} userInput
   */
  function processInput(userInput) {
    var amount = Parser.parse(userInput);
    if (!isNaN(amount)) {
      var result = MakeChange.calculateChange(COINS, amount);
      result = summarizeCoinChange(result);
      $scope.result = result;
    }
  }

  /**
   * Adds currency prefix, £ or p
   * and calculates frequency of each denomination
   * returns an object where key is the currency denomination like £1 or 2p and value
   * is the frequency of that denomination
   *
   * @param change
   * @returns {object}
   */
  function summarizeCoinChange(change) {
    var summary = {};
    for (var key in change) {
      if (change.hasOwnProperty(key))
        summary[addCurrencyPrefix(key)] = change[key];
    }

    return summary;
  }

  /**
   * Add a currency symbol to an amount
   * @param coin
   * @returns {string}
   */
  function addCurrencyPrefix(coin) {
    if (coin === '100' || coin === '200') {
      coin = '£' + coin[0] // first character;
    } else {
      coin += 'p';
    }

    return coin;
  }
}