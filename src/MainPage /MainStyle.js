import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const HomeWrapper = styled.div`
  width:100%;
  height:100px; 
  background: ${({scrollNav}) => (scrollNav ? '#000': 'red' )};
  text-decoration:none;
  position:fixed;
  top:${({scrollNav}) => (scrollNav ? '0%': '-200%')};
  margin:0px;
  transition:${({scrollNav}) => scrollNav ? '2s' : '3s'};
  border:1px solid #fff;
  overflow-:hidden;
`;
export const HomeHeaderH1 = styled(LinkR)`
   position:relative;
   top:50%;
   left:50%;
   margin-right:200px;
   margin-left:-500px;
   text-decoration:none;
   color:#fff;font:bold 18px/24px arial;
   overflow:hidden;
`;

 export const HomeHeaderP = styled(LinkS)`
   position:relative;left:50%;
   top:50px;
   text-decoration:none;
   margin-top:100px;
   margin-right:100px;
   margin-left:-20px;
   color:#fff;
   overflow:hidden;

   &:hover {
      color:red;
   }
   &:nth-child(2) {
      color:red;
   }
 `;