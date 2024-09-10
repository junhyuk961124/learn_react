import { useState } from 'react';

const Counter = () => {
  /**
   * 1. 사용자가 'plusButton'을 클릭한다
   * 2. 'counterNumber'의 값이 1 상승한다.
   * 3. 사용자가 'minusButton'을 클릭한다
   * 4. 'counterNumber'의 값이 1 하락한다.
   * 5. 이때 카운터의 값은 0 < conterNumber 이어야한다.
   * 6. 이때 카운터의 값은 conterNumber < 10 이어야한다.
   *
   * 제작가이드
   * 0. counterNumver라는 변수를 만든다
   * 1. counterNumber의 초기값은 0이다
   * 2. counterNumber의 값을 UI에 보여준다
   * 3. 사용자가 'plusButton'을 누른다
   * 4. 'increase'함수를 만든다
   * 5. 사용자가 'plusButton'을 클릭하면, 'increase'함수가 실행된다
   * 6. ['increase'함수 정의] "counterNumber"라는 변수의 값이 1 증가한다
   * 7. ['increase'함수 정의] "counterNumber"라는 변수의 값이 10 미만인
   *    경우에만 변수의 값이 1 증가한다
   * 8. 숫자가 1이되어 변경되는 것을 확인한다
   *
   * 9. 'decrease'함수를 만든다
   * 10. 사용자가 'minusButton'을 클릭하면, 'decrease'함수가 실행된다
   * 11. ['decrease'함수 정의] "counterNumber"라는 변수의 값이 1 감소한다
   * 12. ['decrease'함수 정의] "counterNumber"라는 변수의 값이 0 보다 클
   *    경우에만 변수의 값이 1 감소한다
   * 13. 숫자가 1이되어 변경되는 것을 확인한다
   *
   */
  const [counterNumber, setCounterNumber] = useState(0);
  const increase = () => {
    //counter의 값을 변경
    if (counterNumber < 10) {
      setCounterNumber(counterNumber + 1);
    } else {
    }
  };
  const decrease = () => {
    //counter의 값을 변경
    if (counterNumber > 0) {
      setCounterNumber(counterNumber - 1);
    }
  };

  return (
    <div className="counterbox">
      <div className="counterIntro">Counter</div>
      <h2 className="countNumber">{counterNumber}</h2>
      <button
        type="button"
        className="plusButton counterButton"
        onClick={increase}
      >
        +
      </button>
      <button
        type="button"
        className="minusButton counterButton"
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
