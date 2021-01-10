import styled from 'styled-components';

export const SideHeader = styled.div`
   width:20%;
   height:1900px;
   float:left;
   color:#000;
   transition:50s;
   background:#fff;
   border:1px solid red;
   animation-duration: 1s;
   animation-name: slidein;
 }
 
 @keyframes slidein {
   from {
     margin-left:-9%;
     width:20%
   }
 
   to {
     margin-left:-8%;
     width:20%;
   }
`