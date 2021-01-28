import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

// sideBar 전체 부분 
export const SideHeader = styled.div`
   width:1200%;
   float:left;
   color:#000;
   transition:50s;
   position:absolute;
   left:-80px;

 
 
   animation-duration:0.5s;
   animation-name: slideOut;
 }
 
 @keyframes slideOut {
   from {
     position:absolute; 
     top:95%
   }
 
   to {
    position:aboslute; 
    top:100%;
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
background: #43C6AC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F8FFAE, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F8FFAE, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
`;
// 

// 하단 메뉴 전체부분 
export const SideMenu = styled.div`
  width:100%;
  height:600px;
  float:left;
  background:#f8ffde;
  color:red;
`;

//전체 글보기 부분 
export const SideMenuH1 = styled.div`
   color:red;
   padding:25px;
`;

// 글보기 이외 메뉴창 
export const SideMenuP = styled.div`
   color:blue;
   padding:25px;
   padding-left:35px;

   &:hover{
      color:red;
   }
`;

// 웹개발 하위메뉴 부분
export const SideMenuli = styled.div`
   color:red;
   padding:20px;
   display:none;
`