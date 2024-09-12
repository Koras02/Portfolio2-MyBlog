import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const BodyRight2Wrapper = styled.div`
   width:360px;
   height:300px;
   padding:48px 48px 48px 48px;
   margin-bottom:48px;
//    border:1px solid #000;
   display:block;
   box-sizing:border-box;
   background:#fff;
`

export const BodyRight2SidebarTitle = styled.div`
    padding-left:15px;
    margin-bottom:24px;
    font-size:1.6rem;
    font-weight:600;
    border-left:5px solid #0078ff;
    text-transform uppercase;
    margin-bottom:24px;
`;

export const BodyRight2SliderContent = styled.div`
    box-sizing:border-box;
    display:block;
    font:bold 16px/24px arial;
    

`

export const BodyRight2SliderList = styled.div`
     display:block;
     box-sizing:border-box;
`;

export const BodyRight2SliderListUl = styled.div`
    width:320px;
    height:180px;
    // border:1px solid #000;
    display:block;
`

export const BodyRight2SliderListli = styled.div`
    width:296px;
    height:24px;
    padding:6px; 24px 6px;
    position:relative;
    margin-right:10px;

`

export const BodyRight2SlideListLink = styled(LinkR)`
     color:#1e1e1e;
     text-decoration:none;
     transition: all 0.5s ease-in-out;
     cursor: pointer;
     margin-left:10px;
     font-size:14px;
     line-height:24px;
     font-weight:400;
   
`