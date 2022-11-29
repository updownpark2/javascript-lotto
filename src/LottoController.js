const UserInput = require("./UserInput");
const Validation = require("./Validation");

class LottoController {
  gameStart() {
    UserInput.moneyInput((money) => {
      Validation.money(money);
    });
  }
}

module.exports = LottoController;
