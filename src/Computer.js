const { Random } = require("@woowacourse/mission-utils");

function Computer(money) {
  let lotto = [];
  let i = 0;
  for (; i < money / 1000; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    lotto.push(numbers);
  }
  return lotto;
}
module.exports = Computer;
