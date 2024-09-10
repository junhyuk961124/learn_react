import React from 'react';
// import Email from './Email';
// import Password from './Password';
import Checkbox from './Checkbox';
// import LoginButton from './LoginButton';
// import PartnerNutton from './PartnerButton';
import InputField from './InputField';
import ButtonField from './ButtonField';

const Login = () => {
  const onLoginButton = () => {
    window.location.href = 'https://www.naver.com';
  };
  const onPartnerButton = () => {
    window.location.href = 'https://blog.naver.com/yogitdog';
  };
  return (
    <div className="loginbox">
      <div className="login-introbox">
        <div className="login-title">로그인</div>
        <div>
          <p className="intro1">펫플 파트너즈에 오신 것을 환영합니다!</p>
          <p className="intro2">
            펫플 파트너스는 광고주 회원만 이용할 수 있습니다.
          </p>
        </div>
        <div className="login-inputboxing"></div>
        <InputField
          label={'email'}
          labelClass={'email-label'}
          type={'email'}
          className={'email-control inputbox'}
          id={'InputEmail'}
          placeholder={'이메일'}
        />
        <InputField
          label={'Password'}
          labelClass={'password-label'}
          type={'password'}
          className={'password-control inputbox'}
          id={'Password'}
          placeholder={'비밀번호'}
        />
      </div>
      <Checkbox />
      {/* <LoginButton />
      <PartnerNutton /> */}
      <ButtonField
        buttonName={'로그인'}
        className={'login-button'}
        onButtonClick={onLoginButton}
      />
      <ButtonField
        buttonName={'파트너 가입'}
        className={'partner-button'}
        onButtonClick={onPartnerButton}
      />
    </div>
  );
};

export default Login;
