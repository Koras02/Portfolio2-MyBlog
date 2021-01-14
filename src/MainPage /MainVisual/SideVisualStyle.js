import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

// sideBar 전체 부분 
export const SideHeader = styled.div`
   width:15%;
   height:1900px;
   float:left;
   color:#000;
   transition:50s;
   background:#fff;
   border:1px solid red;
   animation-duration: 1s;
   animation-name: slidein;
 }
 
 @keyframes slidein {
   from {
     margin-left:-9%;
     width:20%
   }
 
   to {
     margin-left:-8%;
     width:20%;
   }
`
// --End

// -- 로그인 Form Login부분 
export const SideHeaderLogin = styled(LinkR)`
   float:left;
   padding-left:50px;
   padding-top:40px;
   display:block;
   text-decoration:none;

   &:hover{
     color:red;
     transition:2s;
   }
`

// 로그인 HeaderForm
export const SideHeaderLoginForm = styled.div`
width:100%; 
height:100px;
float:left;
background: #ef32d9;  /* fallback for old browsers */
background: #00c3ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffff1c, #00c3ff);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffff1c, #00c3ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color:#000;
}
`;
// 

// 하단 메뉴 전체부분 
export const SideMenu = styled.div`
  width:100%;
  height:1800px;
  float:left;
  background: #9cecfb; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #9cecfb, #65c7f7, #0052d4); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #9cecfb, #65c7f7, #0052d4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color:red;
`;

//전체 글보기 부분 
export const SideMenuH1 = styled.div`
   color:red;
   padding:20px;
`;

// 글보기 이외 메뉴창 
export const SideMenuP = styled.div`
   color:blue;
   padding:20px;
`;

// 웹개발 하위메뉴 부분
export const SideMenuli = styled.div`
   color:red;
   padding:20px;
   display:none;
`