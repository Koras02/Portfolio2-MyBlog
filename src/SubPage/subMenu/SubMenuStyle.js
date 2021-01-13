import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const MenuHeaderWrapper = styled.div`
    width:200px;
    height:300px;
    position:absolute;
    top:30px;
    left:5%;
    color:red;
    background:pink;

   animate-duration:0.5s;
   animate-name: slidein;
  
   &:hover{
       color:#000;
   }

`;

export const MenuHeaderH1Link = styled(LinkR)`
   font:bold 16px/50px arial;
   color:#fff;
   padding:10px;
 }
   `;

export const MenuHeaderP = styled(LinkR)`
   font:bold 18px/40px arial;
   text-decoration:none;
   display:block;
   color:#fff;
`