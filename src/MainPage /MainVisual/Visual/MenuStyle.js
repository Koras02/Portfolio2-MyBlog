import styled from 'styled-components';

export const MainSideMenu = styled.div`
   display:block;
   color:red;
   float:left;
   position:absolute;
   left:20%;
   border: 1px solid red;
 

   &:hover {
      color:rgb(189,185,255);
      color:radial-gradient(circle, rgba(189,185,255,1) 0%, rgba(190,176,255,1) 75%, rgba(0,212,255,1) 100%);
      trasition:5s;
    }
`;