let indhu = require('./node_modules/indhu-test/indhu');
let fact = require('./fact');

let result = fact(5);
let expected = 120;

indhu.test(result).toBeEqualTo(expected);

result = fact(8);
expected = 40320;

indhu.test(result).toBeEqualTo(expected);

/*fail case*/
result = fact(100);
expected = 10000000;

indhu.test(result).toBeEqualTo(expected);