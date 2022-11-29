const UserInput = require("./UserInput");
const Validation = require("./Validation");
const Computer = require("./Computer");
const UserOutput = require("./UserOutput");
const Lotto = require("./Lotto");
const LottoJudgement = require("./LottoJudgement");

class LottoController {
  getMoneyInput() {
    UserInput.moneyInput((money) => {
      Validation.money(money);
      UserOutput.showCount(money);
      this.lottoMakeAndShow(money);
    });
  }

  lottoMakeAndShow(money) {
    const lottoArray = Computer(money);
    UserOutput.showLotto(lottoArray);
    this.getWinningInput(lottoArray);
  }

  getWinningInput(lottoArray) {
    UserInput.winningInput((winningInput) => {
      const lotto = new Lotto(winningInput);
      this.getBonusInput(lottoArray, winningInput);
    });
  }

  getBonusInput(lottoArray, winningInput) {
    UserInput.bonusInput((bonus) => {
      Validation.bonus(bonus);
      this.getResult(lottoArray, winningInput, bonus);
    });
  }

  getResult(lottoArray, winningInput, bonusInput) {
    const lottoJudgement = new LottoJudgement();
    lottoJudgement.totalCalculation(lottoArray, winningInput, bonusInput);
    const result = lottoJudgement.getResult();
    this.showResult(result, lottoArray);
  }

  showResult(result, lottoArray) {
    UserOutput.showResult(result);
    const lottoJudgement = new LottoJudgement();
    const benefit = lottoJudgement.getBenefit(result, lottoArray);
    UserOutput.showBenefit(benefit);
  }
}

module.exports = LottoController;
