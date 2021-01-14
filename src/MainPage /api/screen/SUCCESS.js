// 로그인 페이지를 눌렀을때 이동하는 로그인 페이지

import React from 'react';
import {
  FormWrapper,
  FormHeaderH1,
  FormHeaderP1,
  FormHeaderH2,
  FormInput,
  FormInput2,
  FormHeaderP
} from './style/SUCCESSStyle';

function SUCCESS() {
     return (
        <FormWrapper>
          <FormHeaderH1 to="/">Tistory</FormHeaderH1>
          <FormHeaderP1>가입하기</FormHeaderP1>
          <FormHeaderH2>티스토리에 로그인 하세요</FormHeaderH2>
          <FormInput type="text" value="ID" required></FormInput>
          <FormInput type="text" value="Password" required></FormInput>
          <FormInput type="submit" value="로그인"></FormInput>
          <FormInput2 type="radio">로그인 상태 유지</FormInput2>
          <FormHeaderP>아이디/</FormHeaderP>
          <FormHeaderP>비밀번호 찾기</FormHeaderP>
        </FormWrapper>
     );
 }


 export default SUCCESS;