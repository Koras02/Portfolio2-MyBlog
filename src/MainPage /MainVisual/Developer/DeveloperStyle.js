import styled from 'styled-components';
import HTC from '../DataPage/img/HTC.png'
import React from '../DataPage/img/react.png';
import Vue from '../DataPage/img/Vue.png';
import HTML from './images/HTML.png';
import CSS from './images/CSS.png';
import JS from './images/JS.png';

export const DeveloperWrapper = styled.div`
  width:100%;
  height:600px;
  background:#000;
  overflow:hidden;
`;

export const DeveloperH1 = styled.div`
  text-align:center;
  color:#fff;
  display:block;
  font:bold 18px/24px arial;
  margin-top:10px;
  overflow:hidden;
`;

export const DeveloperGraph = styled.div`
  margin:auto;
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

   @media screen and (max-width:1024px) {
        margin-left:-200px;
        margin-right:400px;
   }
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


   @media screen and (max-width:1024px) {
    margin-left:-520px;
    margin-right:12px;
}

   &:nth-child(4) {
    //  background-image:url(${HTC});
     background-size:100%;
     background-repeat:no-repeat;
     animation: auto 6s infinite;


     @keyframes auto {
       0% {
         background-image:url(${HTML});
       }
       50% {
        background-image:url(${CSS});
       }
       100% {
        background-image:url(${JS});
       }
     }
     }
   }
  
   &:nth-child(3) {
    //  background-image:url(${HTC});
     background-size:100%;
     background-repeat:no-repeat;
     animation: anto 6s infinite;


     @keyframes anto {
       0% {
         background-image:url(${React});
       }
       100% {
        background-image:url(${Vue});
       }
     }
     }
   }
   }
 
 
   }
`