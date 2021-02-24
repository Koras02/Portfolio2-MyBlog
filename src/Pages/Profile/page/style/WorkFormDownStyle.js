import styled from 'styled-components';
import Image from '../Form/Images/Beard.jpg';
import Image2 from '../Form/Images/work2.jpg'
import {Link as LinkR} from 'react-router-dom';

export const WorkForm2Wrapper = styled.div`
  --bs-gutter-x: 10rem;
  --bs-gutter-y: 1rem;
  display:flex;
  flex-wrap:wrap;

//   margin-left: calc(var(--bs-gutter-x)/ -2);

  :after :before {
     box-sizing:border-box;
  }
`;

export const WorkForm2Col = styled.div`
  @media screen and (min-width: 768px) {
     flex:0 0 auto;
     width: 31%;
     padding:0px 12px 0px 12px;
  }
`;

export const WorkFormBox = styled.div`
   margin-bottom: -0rem;
   backface-visibility:hidden;
   background:#fff;
   // border:1px solid #000;
   bax-shadow: 0 13px 8px -10px rgba(0 0 0 / 10%);

`;

export const WorkFormImageLink = styled.div`
    width:416px;
    height:260px;
   color:#1e1e1e;
   background:url(${Image2}) no-repeat;
   background-size:cover;
   margin-left:2px;
   color:#1e1e1e;
   text-decoration:none;
   transition:all 0.5s ease-in-out;

`;

export const WorkFormImg = styled.div`
   display:block;
   overflow:hidden;
   
   &:after,&:before {
      box-sizing:border-box;
   }
`

export const WorkFormImage2 = styled.div`
    width:416px;
    height:290px;
    transition:all 2s;
    background:url(${Image}) no-repeat;
    background-size:cover;
    display:block;
    z-index:-9;
    oveflow:hidden;

    &:after.&:before {
       box-sizing:border-box;
    }

    &:hover {
      padding: 12px 24px;
      background-color: hsl(222, 100%, 95%);
      color: hsl(243, 80%, 62%);
      // position: relative;
      border-radius: 6px;
      // overflow: hidden;
      border:1px solid red;
    }
    &:active {
         padding: 12px 24px;
         background-color: hsl(222, 100%, 95%);
         color: hsl(243, 80%, 62%);
         // position: relative;
         border-radius: 6px;
         // overflow: hidden;
         border:1px solid red;
  
   
     
     .circleScaleBtn span {
  
         position: relative;
     }
     
     .circleScaleBtn::before {
 
     }
     
     .circleScaleBtn:hover span {
         color: hsl(222, 100%, 95%);
     }
     
     .circleScaleBtn:hover::before {
         opacity: 1;
         transition-duration:1s;
         transform: translate3d(-50%,-50%,0) scale3d(1,1,1)
     }
     
 
    } 
`

export const WorkFormContent = styled.div` 
// border:1px solid #000;
// border:1px solid #000;
background:#fff;
z-index:-999;
width:389px;
height:100px;
// overflow:hidden;
// padding:2rem 1% 10rem 1%;
 padding:30px 16px 0px 14px;
  display:block;
//   border:1px solid #000;
margin-bottom:20px;
`;

export const WorkFormRow = styled.div`
   --bs-gutter-x: 1rem;
   --bs-gutter-y: 0;
   display:flex;
   border:2px solid #000;
   flex-wrap:wrap;
   margin-top: calc(var(--bs-gutter-y) * -1);
   margin-right: calc(var(--bs-gutter-x)/ -2);
   margin-left: calc(var(--bs-gutter-x)/ -2);

   `;
   
   export const WorkFormRowLeft = styled.div`
 flex:0 0 auto;
 width:66.6666666667%%;
//  border:1px solid red;
float:left;
`;

export const WorkFormRowLeftTitle = styled.div`
   color:#1e1e1e;
   font-size:1.2rem;
   font-weight:bold;
   margin-bottom:10px;
`;

export const WorkFormRowLeftCategory = styled.div`
   color:#4e4e4e;
   font-size: .8rem;
`;

export const WorkFormRowRight = styled.div`
   flex:0 0 auto;
   width:33.3333333333%;
   // border:1px solid blue;
   float:right;
`;

export const WorkFormWelick = styled.div`
   font-size: 2.5rem;
   color:#0078ff;
   float:right;
`

export const WorkFormWeLink = styled(LinkR)`
    text-decoration:none;
    transition: all 0.5 ease-in-out;
    transition-property:all;
    transition-duration:0.5s;
    transition-timing-function: ease-in-out;
    transition-delay:0s;
`

export const WorkFormIconWrapper = styled.div`
 
`;

export const WorkFormLink = styled.div`
 
`