// 로그인 페이지를 눌렀을때 이동하는 로그인 페이지
import React from 'react';
import {
  FormHeaderH1,
  FormWrapper,
  FormHeaderH2,
  FormHeaderPInput,
  FormHeaderLabel,
  FormLoginForm,
  
  FormLabel2,
  // FormButton,
  // FormButton1
  // FromLoginForm
} from './style/SUCCESSStyle';

export const SUCCESS = () => {
     return (
          <FormWrapper>
              <FormHeaderH1>TISTORY</FormHeaderH1>
            <FormLoginForm> 
              <FormHeaderH2>TIHSTORY</FormHeaderH2>
             <FormHeaderLabel htmlFor="for">아이디</FormHeaderLabel>
             <FormHeaderPInput type="id" required/>
             <FormHeaderPInput type="password"  required />
             <FormLabel2 htmlFor="for">비밀번호</FormLabel2>
             {/* <FormButton type="submit">로그인</FormButton>
            <FormButton1 type="radio" required/>  */}
             </FormLoginForm>
          </FormWrapper>
     );
 }


 export default SUCCESS;