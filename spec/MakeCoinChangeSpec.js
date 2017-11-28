describe('Make Minimum Coins Change', function () {
  // coin denominations
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];

  // an object to hold change of MakeChange.calculateChange
  var change;

  beforeEach(function () {
    change = {};
  });

  it("123 should equal {'1':1, '2':1,'20':1,'100':1}", function() {
    change['100'] = 1;
    change['20'] = 1;
    change['2'] = 1;
    change['1'] = 1;
    expect(MakeChange.calculateChange(coins, 123)).toEqual(change);
  });

  it("1234 should equal {'2':2, '10':1,'20':1,'200':6}", function() {
    change['200'] = 6;
    change['20'] = 1;
    change['10'] = 1;
    change['2'] = 2;
    expect(MakeChange.calculateChange(coins, 1234)).toEqual(change);
  });

  it("20 should equal {'20':1}", function() {
    change['20'] = 1;
    expect(MakeChange.calculateChange(coins, 20)).toEqual(change);
  });

  it("50 should equal {'50':1}", function() {
    change['50'] = 1;
    expect(MakeChange.calculateChange(coins, 50)).toEqual(change);
  });

  it("100 should equal {'100':1}", function() {
    change['100'] = 1;
    expect(MakeChange.calculateChange(coins, 100)).toEqual(change);
  });

  it("200 should equal {'200':1}", function() {
    change['200'] = 1;
    expect(MakeChange.calculateChange(coins, 200)).toEqual(change);
  });
});