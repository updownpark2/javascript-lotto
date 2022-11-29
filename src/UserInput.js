const { Console } = require("@woowacourse/mission-utils");
const UserInput = {
  moneyInput: (callback) => {
    Console.readLine(`구입금액을 입력해 주세요.\n`, callback);
  },

  winningInput: (callback) => {
    Console.readLint(`당첨 번호를 입력해 주세요.`, callback);
  },
};
module.exports = UserInput;
