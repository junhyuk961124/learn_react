import Login from './components/Login';
// import Counter from './components/Counter';

// import Card from './components/Card';

function App() {
  // logid
  // console.log('App.js');
  // const name = '박주녁';
  // const age = 29;

  // const messge = `안녕하세요. ${name}님! 나이가 ${age}세 이시네요.
  //  환영합니다`;

  // console.log('🚀 ~ App ~ messge:', messge);

  //로그인을 한 상태이면서, 동시에 admin 권한을 가진 유저
  // const user = {
  //   isLoggedIn: true,
  //   name: '박준혁',
  //   id: 'cwsw132',
  //   pw: 'asdqwe123',
  //   role: 'admin',
  // };

  // //사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우엔 "관리자 페이지 접근가능",
  // // 아니면 "관리자 페이지 접근 불가능"

  // if (user.id === "cwsw132" && user.pw === 'asdqwe123') {
  //   console.log('관리자 페이지 접근가능');
  // } else {
  //   console.log('관리자 페이지 접근 불가능');
  // }

  const user2 = {
    isLoggedIn: false,
    name: '박준혁',
    id: 'cwsw132',
    pw: 'asdqwe123',
    role: 'user', //admin
  };

  // const userInput = '';

  if (user2.id === 'cwsw132' && user2.pw === 'asdqwe123') {
    //1차 조건 판별
    user2.isLoggedIn = true;
    console.log('🚀 로그인이 완료되었습니다, isLoggedIn');
    // 2차 조건 판별
    if (user2.isLoggedIn === true && user2.role === 'admin') {
      console.log('관리자 페이지에 접근 가능합니다.');
    } else {
      console.log('관리자가 아닙니다.');
    }
  } else {
    console.log('다시작성해주세요.');
  }

  const linkin = () => {
    window.location.href = 'http://www.naver.com';
  };

  //view
  return (
    <>
      {/* <Card
        title={'안녕하세요'}
        subText="안녕하세요 안녕하세요 하하"
        onCardButton={linkin}
      />
      <Card title={'안녕하십니까'} subText={'안녕안녕하십니까?'} /> */}
      <Login />
      {/* <Counter count={2} /> */}
    </>
  );
}

export default App;

//Default parameter

//함수 정의
const greeting = (input = '고객') => {
  return `${input}님, 반갑습니다!`;
};
const input = '박준혁';

//함수 호출
const aa = greeting(input);
console.log('🚀 ~ aa:', aa);

//구조분해 할당
const classmate = ['박준혁', '박준혁2', '박준혁3', '박준혁4'];
const [a1, a2, a3, a4 = '박박박'] = classmate;
console.log('🚀 ~ 4:', a4);
console.log('🚀 ~ 3:', a3);
console.log('🚀 ~ 2:', a2);
console.log('🚀 ~ 1:', a1);

//객체 구조분해 할당
const dragNdrop = [
  {
    name: '박준혁',
    age: 29,
    email: 'cwsw132@naver.com',
  },
  {
    name: 'junhyuk',
    age: 99,
    email: 'junhyuk99@naver.com',
  },
  {
    name: '혁준박',
    age: 55,
    email: 'gurwnsqkr@naver.com',
  },
];

for (let i = 0; i < 3; i++) {
  const { name, age, email } = dragNdrop[i];
  console.log('🚀 ~ email:', email);
  console.log('🚀 ~ age:', age);
  console.log('🚀 ~ name:', name);
}
// const name = dragNdrop.name;
// const age = dragNdrop.age;
// const email = dragNdrop.email;

// const [name, age, email] = dragNdrop;
// console.log('🚀 ~ email:', email);
// console.log('🚀 ~ age:', age);
// console.log('🚀 ~ name:', name);

//spread syntax
const studentList = {
  name: '박준혁',
  age: 29,
  email: 'cwsw132@naver.com',
};

const studentListPlus = {
  message: '안녕하세요',
  hobby: '농구',
};

const PlusFriend = {
  ...studentList,
  ...studentListPlus,
  name: '준혁박',
  nickName: '혁준박',
};
console.log('🚀 ~ PlusFriend:', PlusFriend);

const exercise = ['농구', '축구', '배구', '탁구'];
const exerciseplus = ['야구', '테니스'];

const myExercise = [...exercise, ...exerciseplus, '풋볼'];
console.log('🚀 ~ myExercise:', myExercise);
