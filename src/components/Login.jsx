import React from 'react';
import Email from './Email';
import Password from './Password';
import Checkbox from './Checkbox';
import LoginButton from './LoginButton';
import PartnerNutton from './PartnerButton';

const Login = () => {
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
        <Email />
        <Password />
      </div>
      <Checkbox />
      <LoginButton />
      <PartnerNutton />
    </div>
  );
};

export default Login;
