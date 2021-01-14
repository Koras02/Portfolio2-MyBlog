import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const MenuHeaderWrapper = styled.div`
    width:200px;
    height:300px;
    padding-bottom:10%;
    position:absolute;
    top:30px;
    left:5%;
    border:1px solid red;
    color:red;
    background:red;
`;

export const MenuHeaderH1Link = styled(LinkR)`
   font:bold 16px/50px arial;
   color:#fff;
   border:1px solid red;
   &:hover{
       color:#000;
   }
`;

export const MenuHeaderP = styled(LinkR)`
   font:bold 18px/40px arial;
   text-decoration:none;
   display:block;
   color:#fff;
`