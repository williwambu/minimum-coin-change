"use strict";
/**
 * Validate a string against checks given
 */
var Validator = {

  /**
   * Actual validation of string from user input happens here
   * Returns an object with key valid(boolean) and error(string) if string is invalid
   * @param string
   */
  validate: function (string) {
    var validityObject = {
      valid: false,
      error: ''
    };

    // strip white space
    string = string.replace(/\s+/g, '');

    //convert to lowercase, incase of capital P
    string = string.toLowerCase();

    if (!string) {
      validityObject.error = 'Empty string not allowed';
    }
    else if (this.checkInvalidCharacters(string)) {
      validityObject.error = 'Invalid characters';
    }
    else if (this.missingValue(string)) {
      validityObject.error = 'Input contains no numbers';
    }
    else if (this.checkWrongPosition(string)) {
      validityObject.error = 'Current symbols in the wrong position';
    }
    else {
      //we are safe
      validityObject.valid = true;
    }

    return validityObject;
  },

  /**
   * Check if string contains characters other than £, ., p, 0-9
   * Return true if invalid characters are found, otherwise false
   * @param string string to be checked
   * @returns {boolean}
   */
  checkInvalidCharacters: function (string) {
    var valid = /[^£.p\d]/g;
    return valid.test(string);
  },

  /**
   * Check if the string contains 0-9, that is it has a numeric value
   * @param string
   * @returns {boolean}
   */
  missingValue: function (string) {
    var valid = /\d+/g;
    return !valid.test(string);
  },

  /**
   * Checks if currency symbols are in the correct position, i.e., £ at the beginning and p at the end
   * Returns true if currency symbols are in the wrong position
   * @param string
   * @returns {boolean}
   */
  checkWrongPosition: function (string) {
    if (string[0] === '£')
      string = string.substring(1, string.length - 1); // remove £ if it is there

    if (string[string.length - 1] === 'p') // remove p if it is there
      string = string.substring(0, string.length - 1);

    var validSymbols = /[£p]/g; // check if there are any more £ or p left

    return validSymbols.test(string);
  }
};