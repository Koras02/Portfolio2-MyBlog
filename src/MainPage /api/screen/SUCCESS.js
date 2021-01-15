// 로그인 페이지를 눌렀을때 이동하는 로그인 페이지
import React from 'react';
import {
  FormHeader,
  FormHeaderH1,
  FormWrapper,
  FormHeaderH2,
  FormHeaderPInput,
  FormHeaderLabel,
  FormLabel,
  FormButton,
  FormButton1
} from './style/SUCCESSStyle';

const SUCCESS = () => {
     return (
          <FormWrapper>
              <FormHeaderH1>TISTORY</FormHeaderH1>
            <FormHeader>
              <FormHeaderH2>TIHSTORY</FormHeaderH2>
             <FormHeaderLabel htmlFor="for">아이디</FormHeaderLabel>
             <FormHeaderPInput type="id" required/>
             <FormLabel htmlFor="for">비밀번호</FormLabel>
             <FormHeaderPInput type="password" required />
             <FormButton type="submit">로그인</FormButton>
             <FormButton1 type="radio" required/>
            </FormHeader>
          </FormWrapper>
     );
 }


 export default SUCCESS;