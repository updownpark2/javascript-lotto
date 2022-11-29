const UserInput = require("./UserInput");
const Validation = require("./Validation");
const Computer = require("./Computer");
const UserOutput = require("./UserOutput");

class LottoController {
  gameStart() {
    UserInput.moneyInput((money) => {
      Validation.money(money);
      UserOutput.showCount(money);
      this.lottoMakeAndShow(money);
    });
  }

  lottoMakeAndShow(money) {
    const lottoArray = Computer(money);
    UserOutput.showLotto(lottoArray);
  }
}

module.exports = LottoController;
