describe('User Input Validation', function () {
  // create a default validity object before the tests begins
  var validityObject;
  beforeEach(function () {
    validityObject = {
      valid: false,
      error: ''
    };
  });

  describe("Empty string", function () {
    it("to fail with error 'Empty string not allowed'", function () {
      validityObject.error = 'Empty string not allowed';
      expect(Validator.validate('')).toEqual(validityObject);
    });
  });

  describe("Invalid Characters", function () {
    it("to fail with error 'Invalid characters'", function () {
      validityObject.error = 'Invalid characters';
      expect(Validator.validate('13x')).toEqual(validityObject);
    });
  });

  describe("Missing Value", function () {
    it("to fail with error 'Input contains no numbers'", function () {
      validityObject.error = 'Input contains no numbers';
      expect(Validator.validate('£p')).toEqual(validityObject);
    });
  });

  describe("Valid Character In The Wrong Position", function () {
    it("to fail with error 'Current symbols in the wrong position'", function () {
      validityObject.error = 'Currency symbols in the wrong position';
      expect(Validator.validate('13p.02')).toEqual(validityObject);
    });
  });
});