import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const WorkFormRowWrapper = styled.div`
   width:100%;
   height:832px;
   box-sizing:border-box;
   display:flex;
   flex-wrap: wrap;
   margin:auto;
   border:1px solid #000;

   @media screen and (max-width:1400px) {
      max-width:1140px;
      height:757px;
      border:1px solid red;
   }

   @media screen and (max-width:1200px) {
      max-width:960px;
      height:694.969px;
      border:1px solid yellow;
   }

 
`;

export const WorkBox = styled.div`
   width:416px;
   height:368px;
   margin-bottom:3rem;
   backfack-visibility:hidden;
   background-color:#fff;
   box-shadow:0 13px 8px -10px rgb(0 0 0 / 10%)

   @media screen and (max-width:1400px) {
        width:356px;
        height:330px;
      //   border:1px solid red;
        margin-bottom:48px;
        backface-visibility:hidden;
   }
   @media screen and (max-width:1200px) {
      max-width:295.984px;
      height:305px;
   }
`

export const WorkImage = styled.div`
     display:block;
     overflow:hidden;
     width:416px;
     height:260px;
     border:1px solid red;
  
     @media screen and (max-width:1400px) {
        max-width:356px;
        height:222.500px;
     }
     @media screen and (max-width:1200px) {
      max-width:295.984px;
      height:222px;
   }
 

`;

export const Image = styled.img`
   width:416px;
   height:260px;
   transition:all 1s;
   display:block;
  
   @media screen and (max-width: 1400px) {
      max-width:356px;
      height:225px;
   }
 
        @media screen and (max-width:1200px) {
      max-width:295.984px;
      height:222px;
   }
 
   @media screen and (max-width: 1200px) {
      max-width:295.984px;
      height:222.984px;
   }
`

export const WorkBoxLink = styled(LinkR)`
width:auto;
height:auto;
box-sizing:border-box;
text-decoration: none;

 
`