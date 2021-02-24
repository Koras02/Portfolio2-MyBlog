import styled from 'styled-components';
// import {Link as LinkR} from 'react-router-dom';
// import Image from '.././Form/Images/DeskTop.jpg'
// import Image2 from '.././Form/Images/Food.jpg'
 
export const WorkFormWrpaper = styled.div`
 width:100%;
 height:1096px;
 display:block;
 padding-top:64px;
 line-height:24px;
 font:bold 16px/24px arial;
 color:#000;
 background:#fff;
`;;

export const WorkFormContainer = styled.div` 
  max-width:1296px;
  height:1026px;
  margin:auto;
  border:1px solid #000;
  display:block;
  padding:0px 12px 0px 12px;
  
`;

export const WorkFormRow1 = styled.div`
   max-width:1296px;
   height:174px;
   box-sizing:border-box;
   display:flex;
   flex-wrap:wrap;
   margin:auto;
   border:1px solid #000;
`
export const WorkFormRow1Col = styled.div`
   box-sizing:border-box;
   display:block;
   flex-grow:auto;
   max-width:100%;
   width:1296px;
   height:174px;
`;

export const WorkFormRow1TextBox = styled.div`
   box-sizing:border-box;
   display:block;
   margin-bottom: 64px;
`;

export const WorkFormRow1Title = styled.div`
   box-sizing:border-box;
   display:block;
   margin-bottom:8px;
   margin-top:6px;
   font:bold 48px/57.6px arial;
   text-align:center;
`

export const WorkFormRowSubTitle = styled.div`
    box-sizing:border-box;
    display:block;
    margin-bottom:16px;
    font:16px/24px arial;
    font-weight:400px;
    text-align:center;
`

export const WorkFormLine = styled.div`
   box-sizing:border-box;
   display:block;
   width:40px;
   height:5px;
   margin:auto;
   border:1px solid #000;
   color:rgb(78,78,78);
   background-color:rgb(0, 120, 255);
`