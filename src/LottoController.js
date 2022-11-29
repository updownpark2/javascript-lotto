const UserInput = require("./UserInput");
const Validation = require("./Validation");
const Computer = require("./Computer");
const UserOutput = require("./UserOutput");
const Lotto = require("./Lotto");
const { bonus } = require("./Validation");

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
      this.getBonusInput();
    });
  }

  getBonusInput() {
    UserInput.bonusInput((bonus) => {
      Validation.bonus(bonus);
    });
  }
}

module.exports = LottoController;
