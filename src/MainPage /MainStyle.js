import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const HomeWrapper = styled.div`
   width:97%;
   height:30px;
   display:inline-block;
   background:white;
   border-bottom:1px solid #000;
   text-decoration:none;
   padding:20px;
 
`;

export const HomeHeaderLeft = styled.div`
   float:left;
   display:inline; 
   opacity:80%;
`;

export const HomeHeaderH1 = styled(LinkR)`
   font:bold 18px/24px arial;
   color:red;
   float:left;
   opacity:80%;
   text-decoration:none;
   padding-left:24px;
   padding:5px;
   border-right: 2px solid #000;
 
  
   &:hover{
     color: blue;
     opactiy: 100%;
     transition: 0.5s;
   }
`;

export const HomeHeaderP = styled.div`
   font:bold 18px/24px arial;
   color:red;
   float:left;
   opacity:80%;

   &:hover{
     color:blue;
     opacity:100%;
     transtition: 0.5s;
   }
`;

export const HomeHeaderCenter = styled.div`  
   color:red;
   display:inline;
   position:absolute;
   font:bold 38px/24px arial;
   left:50%;
`;
 

export const HomeHeaderRight = styled.div`
   float:right;
   opacity: 80%;
`

export const HomeHeaderInput = styled.div`
   font:bold 18px/24px arial;
   text-align:left;
   float:left;
   padding-right:50px;
   display:block;
   opacity: 80%;
`;