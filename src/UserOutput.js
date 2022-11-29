const { Console } = require("@woowacourse/mission-utils");

const UserOutput = {
  showCount: (money) => {
    Console.print(`${money / 1000}개를 구매했습니다.`);
  },

  showLotto: (lottoArray) => {
    lottoArray.forEach((lotto) => {
      Console.print(`${lotto}\n`);
    });
  },
};

module.exports = UserOutput;
