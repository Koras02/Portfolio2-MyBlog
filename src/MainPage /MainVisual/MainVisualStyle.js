import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const MainvisualWrapper = styled.div`
background: #FFEFBA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

   margin:auto;
`;


export const MainSideMenu = styled.div`
   display:block;
   color:background: #355C7D;  /* fallback for old browsers */
   color: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
   color: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   
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
  padding:82px;
  margin:auto;
  padding-top:40px;
  display:block;
  border-bottom:1px solid #000;
  border-top:1px solid #000;
  `;
  
  export const MainVisualH1 = styled.div`
  color: #355C7D;  /* fallback for old browsers */
  color: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
  color: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
  text-align:center;
  font:bold 20px/24px arial;
  position:absolute;
  left:45%;
  display:inline-block;

  @media screen and (max-width:1024px) {
    display:none;
  }
`;

export const MainVisualPLinks = styled(LinkS)`
  float:left;
  position:relative;
  left:20%;
  bottom:70%;
  margin-left:40px;
  font:bold 24px/30px arial;
  text-decoration:none;
 
 
  color: #ad5389; /* fallback for old browsers */
  color: -webkit-linear-gradient(to right, #ad5389, #3c1053); /* Chrome 10-25, Safari 5.1-6 */
  color: linear-gradient(to right, #ad5389, #3c1053); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  

  &:hover{
    color:blue;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width:1024px) {
    font:bold 20px/20px arial;
    color:red;
  }
`;

export const MainVisualP = styled.a`
float:left;
position:relative;
left:20%;
bottom:70%;
margin-left:40px;
font:bold 24px/30px arial;
text-decoration:none;
 

color: #ad5389; /* fallback for old browsers */
color: -webkit-linear-gradient(to right, #ad5389, #3c1053); /* Chrome 10-25, Safari 5.1-6 */
color: linear-gradient(to right, #ad5389, #3c1053); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


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
 float:right;
  margin-left:40px;
  position:relative;
  right:28%;
 font:bold 24px/24px arial;
 text-decoration:none;
 color: #ad5389; /* fallback for old browsers */
 color: -webkit-linear-gradient(to right, #ad5389, #3c1053); /* Chrome 10-25, Safari 5.1-6 */
 color: linear-gradient(to right, #ad5389, #3c1053); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 
 
 &:hover{
   color:blue;
   transition: 0.5s ease-in-out;
 }
`; 

export const MainVisualP1 = styled(LinkR)`
float:left;
position:relative;
left:20%;
bottom:70%;
margin-left:40px;
font:bold 24px/30px arial;
text-decoration:none;
 
color: #ad5389; /* fallback for old browsers */
color: -webkit-linear-gradient(to right, #ad5389, #3c1053); /* Chrome 10-25, Safari 5.1-6 */
color: linear-gradient(to right, #ad5389, #3c1053); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

&:hover{
  color:blue;
  transition: 0.5s ease-in-out;
}

@media screen and (max-width:1024px) {
  font:bold 20px/20px arial;
  color:red;
}
`; 


