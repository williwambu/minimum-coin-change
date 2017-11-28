describe('Currency Parser', function () {
  describe("Numbers without symbol", function() {
    it("'123' should return 123", function() {
      expect(Parser.parse('4')).toEqual(4);
    });

    it("'432' should return 432", function() {
      expect(Parser.parse('85')).toEqual(85);
    });
  });

  describe("Parsing Pence symbol", function() {
    it("'197p' should return 197", function() {
      expect(Parser.parse('197p')).toEqual(197);
    });

    it("'2p' should return 2", function() {
      expect(Parser.parse('2p')).toEqual(2);
    });
  });


  describe("Parsing Decimal", function() {
    it("'54.04' should return 5404", function() {
      expect(Parser.parse('54.04')).toEqual(5404);
    });
  });

  describe("Parsing Pounds symbol", function() {
    it("'£54.04' should return 123", function() {
      expect(Parser.parse('£54.04')).toEqual(5404);
    });

    it("'£14' should return £14", function() {
      expect(Parser.parse('£2')).toEqual(200);
    });
  });

  describe("Pound & pence decimal", function() {
    it("'£1.87p' should return 187", function() {
      expect(Parser.parse('£1.87p')).toEqual(187);
    });
  });

  describe("Missing pence", function() {
    it("'£1p' should return 100", function() {
      expect(Parser.parse('£1p')).toEqual(100);
    });
  });

  describe("Rounding to two decimal places", function() {
    it("'4.235p' should return 424", function() {
      expect(Parser.parse('4.235p')).toEqual(424);
    });
  });

  describe("Missing pence but present decimal point", function() {
    it("'£1.p' should return 100", function() {
      expect(Parser.parse('£1.p')).toEqual(100);
    });
  });

  describe("Preceding zeros", function() {
    it("'003.45p' should return 345", function() {
      expect(Parser.parse('003.45p')).toEqual(345);
    });
  });
});