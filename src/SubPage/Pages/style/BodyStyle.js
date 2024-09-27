import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'


export const BodyWrapper = styled.div`
   width:100%;
   height:3118.94px;
   border:1px solid #000;
   margin-top:10px;
   background:#f5f5f5;
   display:block;
`;

export const SectionWrapper = styled.div`
   width:100%;
   height:3184.94px;
   border:1px solid #000;
   box-sizing:border-box;
   display:block;
   margin:auto;
   padding-top:65px;
   padding-top:4rem;

`;
export const SectionContainer = styled.div`
    max-width:1296px;
    height:3054.94px;
    padding:0px 12px 0px 12px;
    box-sizing:border-box;
    display:block;
 
    border:1px solid #000;
    margin:auto;
`;

export const SectionRow = styled.div`
   max-width:1320px;
   height:3054.940px;
   box-sizing:border-box;
   display:flex;
   flex-wrap:wrap;
   border:1px solid red;
`;

export const SectionRow1 = styled.div`
   max-width:856px;
   height:3054.940px;
   padding:0px 12px 0px 12px;
   border:1px solid #000;
   @media screen and (min-width: 768px) {
       flex: 0 0 auto;
       width: 66.6666666667%;
   }
`;

export const SectionRow1Col = styled.div`
  max-width:760px; 
   height:1262.160px;
   border:1px solid red;
   padding: 48px 48px 48px 48px;
   margin-bottom:48px;
   background:#fff;
`;

export const SectionRow1Post1 = styled.div`
   max-width:760px;
   height:1262.160px;
   display:block;
   border:1px solid #000;
`;

export const SectionRow1PostImage = styled.img`
//   max-width:760px;
  width:100%;
  height:506.156px;
`


export const SectionRow1Col2 = styled.div`
    max-width:760px;
    height:76px;
    margin: 16px 0px 16px 0px;
    border:1px solid #000;
`;

export const SectionRow1Col2Title = styled.div`
   margin-bottom:8px;
   max-width:760px;
   height:36px;
   color:rgb(30,30,30);
   display:block;
   font:bold 28px/36.48px arial; 
`


export const SectionRow1ColUl = styled.ul`
list-style:none;
max-width:756px;
height:24px;
border-left:4px solid rgb(0,120,255);
margin-top:0px;
box-sizing:border-box;
color:rgb(78,78,78);
display:block;

`

export const SectionRow1ColList = styled.li`
max-width:120.297px;
height:24px;
box-sizing:border-box;
display:inline-block;
marign-left:15px;
font:bold 16px/24px arial;
`

export const SectionRow1ColListSapn = styled.div`
box-sizing:border-box;
font-size:16px/24px arial;
position:relative;
bottom:5px;
color:#1e1e1e;
`


export const SectionRow1ColListSapnIcon = styled.image`
border:1px solid #000;
`

export const SecitonRow1ColListSpanIconLink = styled(LinkR)`
color:rgb(0 ,120, 255);
transition:all 0.5 ease-in-out;
display:inline-flex;
font:12px/14px arial;
position:relative;
margin-left:20px;
left:-50px;
top:10px;
border:1px solid #000;
`;


export const SectionRow3Col = styled.div`
 max-width:760px;
 height:632px;
 margin:16px 0px 16px 0px;
 border:1px solid #000;
`
 

export const SectionRow3ColP = styled.div`
   max-width:760px;
   height:100px;
   margin-bottom:10px;
`

export const SectionRow3ColPBlack = styled.div`
   max-width:720px;
   height:60px;
   padding:18px 18px 18px 18px;
   border-left:4px solid rgb(0, 120, 255);
`

export const SectionRow3ColPBlackP = styled.div`
    max-width:720px;
    height:60px;
    font:bold 20px/30px arial;
`