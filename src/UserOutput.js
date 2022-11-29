const { Console } = require("@woowacourse/mission-utils");

const UserOutput = {
  showCount: (money) => {
    Console.print(`\n${money / 1000}개를 구매했습니다.`);
  },

  showLotto: (lottoArray) => {
    lottoArray.forEach((lotto) => {
      let splitLotto = lotto.join(`, `).split(`,`);
      Console.print(`[${splitLotto}]`);
    });
  },

  showResult: (result) => {
    Console.print(`3개 일치 (5,000원) - ${result.get("5등")}`);
    Console.print(`4개 일치 (50,000원) - ${result.get("4등")}`);
    Console.print(`5개 일치 (1,500,000원) - ${result.get("3등")}`);
    Console.print(`5개 일치 (30,000,000원) - ${result.get("2등")}`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.get("1등")}`);
  },
};

module.exports = UserOutput;
