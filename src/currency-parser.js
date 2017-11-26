"use strict";

/**
 * Parse a sterling string to its actual value, and convert to pennies
 * @type {{parse: Parser.parse, _convertPoundToPennies: Parser._convertPoundToPennies}}
 */
var Parser = {
  parse: function (string) {
    // a boolean used to decide if to convert amount to pennies
    // based on presence of £ in the string
    var convertToPennies = false;

    // check if string contains pound
    if (string.indexOf('£') !== -1)
      convertToPennies = true;

    // remove £ and/or p from string
    string = string.replace(/[£p]+/g, '');

    // get currency value as a float, preserves decimals
    var amount = parseFloat(string);

    // convert to pennies if string contained £ or amount parsed contained a decimal point
    // we check if amount is a decimal by calculating its modulus
    if ((amount % 1 !== 0) || convertToPennies) {
      amount = this._convertPoundToPennies(amount)
    }

    return amount;
  },

  /**
   * Helper function to convert pounds to pennies
   * @param {number} pounds Number of pounds
   * @returns {number} pounds *100
   */
  _convertPoundToPennies: function (pounds) {
    // round off to 2 decimal places
    pounds = pounds.toFixed(2);

    return pounds * 100;
  }
};