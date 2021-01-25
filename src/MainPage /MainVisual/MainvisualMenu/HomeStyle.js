import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const MenuHeaderWrapper = styled.div`
    width:200px;
    height:250px;
    position:absolute;
    top:30px;
    padding:15px;
    left:5%;
    overflow:hidden;
    color:red;
    background:#000;
    
    `;
    
    export const MenuHeaderH1Link = styled(LinkR)`
    font:bold 16px/24px arial;
    color:#fff;
    text-decoration:none;
    padding:20px;
    &:hover{
       color:#000;
   }
   `;

   export const MenuHeaderP = styled(LinkR)`
   font:bold 18px/20px arial;
   text-decoration:none;
   border-bottom:1px solid #000;
   display:block;
   padding-bottom:10px;
   overflow:hidden;
   
   padding-top:20px;
   padding-left:20px;
   margin-left:2px;
   
   color:#fff;

   &:hover {
       color:red;
   }
`;

