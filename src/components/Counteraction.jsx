import React from 'react';

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
const Counteraction = () => {
  return <div>Counteraction</div>;
};

export default Counteraction;
