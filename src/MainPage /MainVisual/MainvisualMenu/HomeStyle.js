import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const MenuHeaderWrapper = styled.div`
    width:200px;
    height:250px;
    position:absolute;
    top:30px;
    padding:15px;
    left:5%;
    color:red;
    background: #373B44;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    transition: 5s;
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
   
   padding-top:20px;
   padding-left:20px;
   margin-left:2px;
   
   color:#fff;

   &:hover {
       color:red;
   }
`;

