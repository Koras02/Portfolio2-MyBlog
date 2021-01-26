import styled from 'styled-components';
import HTC from '../DataPage/img/HTC.png'
import React from '../DataPage/img/react.png';
import Vue from '../DataPage/img/Vue.png';

export const DeveloperWrapper = styled.div`
  width:100%;
  height:400px;
  background:#000;
  border-top:1px solid #fff;
`;

export const DeveloperH1 = styled.div`
  text-align:center;
  color:#fff;
  display:block;
  font:bold 18px/24px arial;
  margin-top:10px;
`;

export const DeveloperGraph = styled.div`
  margin:auto;
  border:1px solid #fff;
  color:red;
`

export const DeveloperP = styled.div`
  text-align:center;
  color:#fff;
  margin-top:20px;
  margin-bottom:20px;
  font:bold 16px/30px arial;
`;

export const DeveloperP1 = styled.div`
   text-align:center;
   display:inline;
   position:relative;
   left:50%;
   margin-left:-300px;
   margin-right:700px;
`;

export const DeveloperPrecent = styled.div`
   text-align:center;
   display:inline;
   position:relative;
   top:150px;
   left:50%;
   padding:80px;
   margin-left:-830px;
   margin-right:130px;
   border:1px solid #fff;
   border-radius:100%;
   background:#fff;

   &:nth-child(4) {
     background-image:url(${HTC});
     background-size:97%;
     :hover{
       background:red;
       background-image:url(${React});
       background-size:98%;
       transition:5s;
     }
   }
  
   &:nth-child(3) {
     background-image:url(${React});
     background-size:98%;
     :hover{
      background-image:url(${Vue});
      transition:5s;
    }
   }
 
 
   }
`