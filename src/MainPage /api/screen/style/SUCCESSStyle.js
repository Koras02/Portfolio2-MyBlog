import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const FormWrapper = styled.div`
  width:100%;
  height:948px;
  background: gray;
`

export const FormHeaderH1 = styled(LinkR)`
  float:left;
  text-align:left;
  padding:16px;
  color:#fff;
`;

export const FormHeaderP1 = styled(LinkR)`
  width:10%;
  font:bold 14px/16px arial;
  border:1px solid #fff
  background:#fff;
  color:#000;
`;

export const FormHeaderH2 = styled.div`
  margin: 0 auto;
  font:bold 16px/18px arial;
  display:block;
  color:#fff;
`;

export const FormInput = styled.div`
  width:20%; 
  display:block; 
  float:left;
`;

export const FormInput2 = styled.div`
   border-radius:2px;
   display:inline;
`;

export const FormHeaderP = styled.div`
   font:bold 12px/14px arial;
   float:left;
   color:#fff;
`
