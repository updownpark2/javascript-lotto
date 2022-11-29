const Validation = {
  money: (money) => {
    if (money % 1000 !== 0) {
      throw new Error(`1000원 단위의 돈을 입력해주세요!`);
    }
    if (/^[0-9]*$/g.test(money) === false) {
      throw new Error(`숫자만 입력해주세요!`);
    }
    if (money <= 0) {
      throw new Error(`최소 1000원은 입력해야합니다!`);
    }
  },
};

module.exports = Validation;
