const { Console } = require("@woowacourse/mission-utils");

const UserOutput = {
  showCount: (money) => {
    Console.print(`${money / 1000}개를 구매했습니다.`);
  },

  showLotto: (lottoArray) => {
    lottoArray.forEach((lotto) => {
      let splitLotto = lotto.join(`, `).split(`,`);
      Console.print(`[${splitLotto}]`);
    });
  },
};

module.exports = UserOutput;
