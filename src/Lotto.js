class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    let checkNumber = numbers.split(",");
    this.checkLength(checkNumber);
    this.checkRange(checkNumber);
    this.checkComma(checkNumber);
    this.checkDuplicate(checkNumber);
  }

  checkRange(checkNumber) {
    checkNumber.forEach((number) => {
      if (number <= 0 || number > 45) {
        throw new Error(`당첨 번호는 1~45 사이의 숫자입니다.`);
      }
    });
  }

  checkLength(checkNumber) {
    if (checkNumber.length !== 6) {
      throw new Error(`,를 제외한 6개의 숫자를 입력해주세요`);
    }
  }

  checkComma(checkNumber) {
    if (checkNumber.includes(``)) {
      throw new Error(`,,가 연속으로 입력되었습니다.`);
    }
  }
  checkDuplicate(checkNumber) {
    let checkArr = [];
    let i = 0;
    for (; i < checkNumber.length; i++) {
      if (checkArr.includes(checkNumber[i])) {
        throw new Error(`당첨번호에 중복값은 존재하지 않습니다.`);
      }
      checkArr.push(checkNumber[i]);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
