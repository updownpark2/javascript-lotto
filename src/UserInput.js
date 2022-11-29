const { Console } = require("@woowacourse/mission-utils");
const UserInput = {
  moneyInput: (callback) => {
    Console.readLine(`구입금액을 입력해 주세요.`, callback);
  },
};
module.exports = UserInput;
