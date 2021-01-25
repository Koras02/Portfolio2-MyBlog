import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const HomeWrapper = styled.div`
  width:100%;
  height:50px; 
  background-color:#000;
  text-decoration:none;
`;
export const HomeHeaderH1 = styled(LinkR)`
   position:relative;
   top:50%;
   left:50%;
   margin-right:200px;
   margin-left:-500px;
   text-decoration:none;
   color:#fff;font:bold 18px/24px arial;
`;

 export const HomeHeaderP = styled(LinkR)`
   position:relative;left:50%;
   top:20px;
   text-decoration:none;
   margin-top:20px;
   margin-right:100px;
   margin-left:-20px;
   color:#fff;
  
   &:hover {
      color:red;
   }
   &:nth-child(2) {
      color:red;
   }
 `;