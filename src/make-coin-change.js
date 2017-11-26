"use strict";
/**
 * Calculate minimum number of coins needed to make the amount.
 */
var MakeChange = {

  /**
   * Calculates minimum number of coins to form the amount
   * return an object where key is the number of pennies and value is the frequency
   * @param coins coins Currency denominations
   * @param amount  Amount to calculate change for
   *
   * @returns {object}
   */
  calculateChange: function (coins, amount) {
    var results = {},
      currentCoin;

    // Init of counter, to hold index of coin
    var x = 0;
    // While the amount != 0
    while (amount) {
      currentCoin = coins[x++];

      // If the coin is smaller/equal to the current amount
      if (amount >= currentCoin) {
        results[currentCoin] = Math.floor(amount / currentCoin); // whole coins that can divide into the amount
        amount = amount % currentCoin; //using modules to calculate number of remaining pennies
      }
    }

    return results;
  }
};