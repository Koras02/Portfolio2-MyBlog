import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const FormWrapper = styled.div`
   width:100%;
   height:100vh;
   background:gray;
   border:1px solid #000;
   overflow:hidden;
 
`;
export const FormHeaderH1 = styled(LinkR)`
    color:#000;
    font:bold 20px/90px arial;
    text-decoration:none;
    padding:2% 0% 0% 18%;
  `;

export const FormLoginForm = styled.div`
    width:30%;
    min-width:auto;
    height:50vh;
    margin:100px auto;
    border:1px solid #000;
    background-color:#fff;
    align-items:center;

    @media screen and (max-width:1024px) {
      padding:10px;
    }
`
 
export const FormHeaderH2 = styled.div`
    font:bold 18px/24px arial;
    margin:20px auto;
    text-align:center;
    align-items:center;
`;


export const FormHeaderLabel = styled.div`
    font:bold 20px/28px arial;
    margin: 24px 0px 50px 27%;
    float:left;
`;

export const FormHeaderPInput = styled.input`
   max-width:auto;
   min-width:auto;
  margin:70px 0px 20px -8%;
   box-sizing:border-box;
 
  
`; 

export const FormLabel = styled.div`  
font:bold 20px/28px arial;
display:inline-block;
 
float:left;
 
`;

export const FormLabel2 = styled.div`  
max-width:80%;
min-width:-30%;
font:bold 20px/28px arial;
display:inline-block;
margin: 24px 0px 50px 23%;
float:left;
 
`;

export const FormButton = styled.button`
   
  `;

  
  export const FormButton1 = styled.input`
    
  `;

 