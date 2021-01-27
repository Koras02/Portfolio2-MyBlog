import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const MainDescriptionWrapper = styled.div`
  width:100%;
  height:800px;
  background:#000;
  overflow:hidden;
 
`;

export const MainDescriptionH1 = styled.div`
  font:bold 48px/35px arial;
  text-align:center;
  color:#fff;
  position:relative;
  top:30%;
  right:210px;

  @media screen and (max-width:640px) {
    margin:-20px 0px 0px 180px;
  }
  @media screen and (max-width:400px) {
    margin:00px 0px 0px 230px;
    color:blue;
    font: bold 32px/38px arial;
  }
`;

export const MainDescriptionH2 = styled.div`
  font:bold 40px/45px arial;
  text-align:center;
  color:red;
  position:relative;
  top:25%;
  left:-10px;  
  overflow:hidden;
  @media screen and (max-width:640px) {
    margin:00px 0px 0px 180px;
  }
  @media screen and (max-width:400px) {
    margin:0px 0px 0px 150px;
    color:blue;
  }
`

export const MainDescriptionP = styled.div`
  font:bold 24px/18px arial;
  color:#fff;
  text-align:center;
  position:relative;
  top:30%;
  right:200px;
  overflow:hidden;

  @media screen and (max-width:640px) {
    margin:0px -90px 0px 180px;
  }
  @media screen and (max-width:400px) {
    margin:-30px -90px 0px 220px;
  }
`

export const MainVisualWrapper = styled.div`
  margin:auto;
  position:relative;
  top:35%;
  left:-250px;
  text-align:center;

  @media screen and (max-width:400px) {
    margin-left:150px;
  }
  
`

export const MainVisualSNS = styled(LinkR)`
  border:1px solid #fff;
  display:inline-flex;
  padding:20px;
  background:#fff;
  margin:10px;
  position:relative;
  left:50px;
  border-radius:20%;
  text-decoration:none;
  color:blue;
  overflow:hidden;

  &:hover {
      background:#fc0;
      transition:2s;
  }

  @media screen and (max-width:640px) {
    margin:0px -150px 0px 20px;
  }
`;

export const MainBtnWrap = styled.div`
   display:flex;
   justify-content:flex-start;
   color:red;
   margin-left:-300px;
   position:relative;
   left:50%;
   top:300px;

   @media screen and (max-width:640px) {
    margin-left:-100px;
  }
`;

export const buttonLable = styled.img`
  color:red;
`