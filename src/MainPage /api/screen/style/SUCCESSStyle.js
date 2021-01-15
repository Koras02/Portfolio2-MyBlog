import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const FormWrapper = styled.div`
   height:100vw;
   padding:20px;
   background:gray;
`;
export const FormHeaderH1 = styled(LinkR)`
    color:#000;
    font:bold 18px/90px arial;
    text-decoration:none;
    padding:2% 0% 0% 12%;
`;

export const FormHeader = styled.div`
    width:60%;
    margin: 50px auto;
    display:inline;
    overflow:hidden;
 
`

 
export const FormHeaderH2 = styled.div`
   color:#fff;
   text-align:center;
   font:bold 49px/48px arial;
`;


export const FormHeaderPInput = styled.input`
    width:300px;
    padding:15px;
    margin-left:38%;
    margin-top:2%;
`;

export const FormHeaderLabel = styled.label`
  padding-top:5%;
  padding-left:37%;
  color:#fff
  `;

export const FormLabel = styled.label`
   padding-left:37%;
   padding-top:5%;
   color:#fff;
`;

export const FormButton = styled.button`
  padding:14px;
  margin:10px;
  margin-right:0%;
  display:inline-block;
  margin-left:20px;
  `;

  
  export const FormButton1 = styled.input`
  padding:14px;
  margin:10px;
  margin-right:0%;
  display:inline-block;
  margin-left:20px;
  `;

 