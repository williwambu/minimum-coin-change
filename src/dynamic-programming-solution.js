"use strict";

/**
 * Calculate minimum number of coins needed to make the amount.
 * Applies memoization to reuse solutions to already solved sub-problems
 * @param {Array} coins Currency denominations
 * @param {number} amount Amount to calculateChange
 * @returns {Array} Array of minimum coin denominations
 */

function makeChange(coins, amount) {
  // An object to store solutions to sub-problem solutions
  var memory = {};

  // Calculates the coins to make the amount
  function calculateChange(amount) {
    // amount === 0, return empty array
    if (amount === 0)
      return [];

    // already calculated, return the solution
    if (memory[amount])
      return memory[amount].slice(0);

    // empty denominations, return empty set
    if (!coins.length)
      return [];

    var minimum = [], // stores minimum coins for provided amount
      newMinimum,  // store recalculated min, compare its length to min
      newAmount; // stores new amount  = amount - current coin

    // loop through denominations
    coins.forEach(function (coin) {
      newAmount = amount - coin; // calculate new amount

      // check newMin in if statement to minimize memory consumption
      if (newAmount >= 0 && ((newMinimum = calculateChange(newAmount)).length < minimum.length - 1 || !minimum.length))
        minimum = [coin].concat(newMinimum);
    });

    memory[amount] = minimum; // final minimum


    return memory[amount].slice(0);
  }

  return calculateChange(amount)
}