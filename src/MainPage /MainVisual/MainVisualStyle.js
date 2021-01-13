import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const MainvisualWrapper = styled.div`
   margin:auto;
`;


export const MainSideMenu = styled.div`
   display:block;
   color:red;
   float:left;
   position:absolute;
   left:20%;
 

   &:hover {
      color:rgb(189,185,255);
      color:radial-gradient(circle, rgba(189,185,255,1) 0%, rgba(190,176,255,1) 75%, rgba(0,212,255,1) 100%);
      trasition:5s;
    }
`;

 

export const MainVisualHeader = styled.div`
  padding:80px;
  margin:auto;
  padding-top:35px;
  background:	#d9f7ff;
  display:block;
  border-bottom:1px solid #000;
  border-top:1px solid #000;
  `;
  
  export const MainVisualH1 = styled.div`
  color:red;
  text-align:center;
  font:bold 20px/24px arial;
  position:absolute;
  left:45%;
  display:inline-block;

  @media screen and (max-width:1024px) {
    display:none;
  }
`;

export const MainVisualP = styled(LinkR)`
  float:left;
  height:0px;
  position:relative;
  left:20%;
  bottom:0%;
  margin-left:40px;
  padding-top:0px;
  font:bold 24px/30px arial;
  text-decoration:none;
  border:1px solid #000;
 
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

