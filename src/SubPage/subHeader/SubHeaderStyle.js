import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
   
export const MainSideMenu = styled.div`
   display:block;
   color:red;
   float:left;
   position:relative;
   right:4%;
 

   &:hover {
      color:rgb(189,185,255);
      color:radial-gradient(circle, rgba(189,185,255,1) 0%, rgba(190,176,255,1) 75%, rgba(0,212,255,1) 100%);
      trasition:5s;
    }
`;

export const MainvisualWrapper = styled.div`
   margin:auto;
`;
 

export const MainVisualHeader = styled(LinkR)`
  padding:80px;
  margin:auto;
  position:relative;
  bottom:50px;
  display:block;
  border-bottom:1px solid #000;
  `;
  
  export const MainVisualH1 = styled(LinkR)`
  color:red;
  text-align:center;
  font:bold 20px/24px arial;
  position:absolute;
  left:45%;
  display:inline-block;
  text-decoration:none;

  @media screen and (max-width:1024px) {
    display:none;
  }
`;

export const MainVisualP = styled(LinkR)`
  float:left;
  position:relative;
  left:20%;
  bottom:20%;
  margin-left:40px;
  font:bold 24px/24px arial;
  text-decoration:none;
 
  color:powderblue;

  &:hover{
    color:blue;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width:1024px) {
    font:bold 20px/20px arial;
    color:red;
  }

  
  
`;

export const MainVisualP2 = styled(LinkR)`
 position:relative;
 float:right;
 padding-right:40px;
 right:25%;
 font:bold 24px/24px arial;
 text-decoration:none;
 color:powderblue;

 &:hover{
   color:blue;
   transition: 0.5s ease-in-out;
 }

 
`; 
