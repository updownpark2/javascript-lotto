class LottoJudgement {
  #result = new Map();
  #count = [];

  countReset() {
    this.#count = 0;
  }

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
        winningInputArr.includes(lottoNumber)
      );
      this.#count.push(win.length);
    });
  }

  bonusCheck(lottoArray, bonusInput) {
    lottoArray.forEach((lotto) => {
      if (lotto.includes(bonusInput)) {
        this.#result.set("2등", this.#result.get("2등") + 1);

        return;
      }
      this.#result.set("3등", this.#result.get("3등") + 1);
    });
  }

  countToResult() {
    this.#count.forEach((count) => {
      if (count === 3) {
        this.#result.set("5등", this.#result.get("5등") + 1);
      }
      if (count === 4) {
        this.#result.set("4등", this.#result.get("4등") + 1);
      }
      if (count === 5) {
        tthis.bonusCheck();
      }
      if (count === 6) {
        this.#result.set("1등", this.#result.get("1등") + 1);
      }
    });
  }
}

//lotto array = [[1,2,3,14,25,36],[7,8,9,10,11,12]]
// winningInputArr = [1,2,3,4,5,6]
