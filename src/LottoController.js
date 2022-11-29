const UserInput = require("./UserInput");
const Validation = require("./Validation");
const Computer = require("./Computer");
const UserOutput = require("./UserOutput");
const Lotto = require("./Lotto");

class LottoController {
  getMoneyInput() {
    UserInput.moneyInput((money) => {
      Validation.money(money);
      UserOutput.showCount(money);
      this.lottoMakeAndShow(money);
      this.getWinningInput();
    });
  }

  lottoMakeAndShow(money) {
    const lottoArray = Computer(money);
    UserOutput.showLotto(lottoArray);
  }

  getWinningInput() {
    UserInput.winningInput((winningInput) => {
      const lotto = new Lotto(winningInput);
    });
  }
}

module.exports = LottoController;
