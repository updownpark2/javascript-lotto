class LottoJudgement {
  #result = new Map();
  #count = [];

  resultSetting() {
    this.#result.set("5등", 0);
    this.#result.set("4등", 0);
    this.#result.set("3등", 0);
    this.#result.set("2등", 0);
    this.#result.set("1등", 0);
  }

  makeSplitArr(winningInput) {
    return winningInput.split(`,`);
  }

  getResult() {
    return this.#result;
  }

  countPush(lottoArray, winningInput) {
    const winningInputArr = this.makeSplitArr(winningInput);
    lottoArray.forEach((lotto) => {
      let win = lotto.filter((lottoNumber) =>
        winningInputArr.includes(String(lottoNumber))
      );
      this.#count.push(win.length);
    });
  }

  bonusCheck(lottoArray, bonusInput, index) {
    if (lottoArray[index].includes(parseInt(bonusInput)) === true) {
      this.#result.set("2등", this.#result.get("2등") + 1);
      return;
    }
    this.#result.set("3등", this.#result.get("3등") + 1);
  }

  countToResult(lottoArray, bonusInput) {
    this.#count.forEach((count, index) => {
      if (count === 3) {
        this.#result.set("5등", this.#result.get("5등") + 1);
      }
      if (count === 4) {
        this.#result.set("4등", this.#result.get("4등") + 1);
      }
      if (count === 5) {
        this.bonusCheck(lottoArray, bonusInput, index);
      }
      if (count === 6) {
        this.#result.set("1등", this.#result.get("1등") + 1);
      }
    });
  }

  totalCalculation(lottoArray, winningInput, bonusInput) {
    this.countPush(lottoArray, winningInput);
    this.resultSetting();
    this.countToResult(lottoArray, bonusInput);
  }

  getBenefit(result, lottoArray) {
    let sum =
      result.get("5등") * 5000 +
      result.get("4등") * 50000 +
      result.get("3등") * 1500000 +
      result.get("2등") * 30000000 +
      result.get("1등") * 2000000000;
    let money = parseInt(lottoArray.length * 1000);

    return `${((sum / money) * 100).toFixed(2)}`;
  }
}
module.exports = LottoJudgement;

//lotto array = [[1,2,3,14,25,36],[7,8,9,10,11,12]]
// winningInputArr = [1,2,3,4,5,6]
