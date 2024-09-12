import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const BodyRight3Wrapper = styled.div`
   width:260px;
   height:234px;
   padding:48px 48px 48px 48px;
//    border:1px solid #000;
   background:rgb(255,255,255);
   margin-bottom:48px;
   display:block;
`

export const BodyRight3Title = styled.div`
  font-size:1.6rem;
  font-weight:600;
  border-left: 5px solid #0078ff; 
  text-transform: uppercase;
  margin-bottom:24px;
  padding-left:15px;
`
export const BodyRightContent = styled.div`
    width:320px;
    heiight:180px;
    display:block;
    box-sizing:border-box;
    font-size:16px;
    font-weight:400;
    line-height:24px;
`;

export const BodyRightListContainer = styled.div`
     width:320px;
     height:180px;
     display:block;

`;


export const BodyRightListContainerList = styled.div`
     width:296px;
     height:24px;
     padding:6px 24px 6px;
     position:relative;
     
 `;

export const BodyRightListContainerListLink = styled(LinkR)`
    &:before {
        position:absolute;
        content: "";
        width:10px;
        height:1px;
        left:0;
        background-color:#0078ff;
        top:20px;
    }
    font-size:14px;
    font-weight:400;
    line-height:24px;
    transition: all 0.5s ease-in-out;
`