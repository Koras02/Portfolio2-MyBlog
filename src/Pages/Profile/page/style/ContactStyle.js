import styled from 'styled-components';
import Image from '../../Images/Hannover.jpg'

export const ContactWrapper = styled.div`
  width:100%;
  height:820.32px;
  background:url(${Image}) no-repeat;
  background-size:cover;
  background-position:center center;
  background-attachment:fixed;
  padding-top:64px;
  margin-top:0px;
  border-bottom:1px solid #000;
  top:10px;
  z-index:3;
  `;
 
  export const ContactOverflow = styled.div`
  width:100%;
  height:800px;
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity:80%;
  padding-top:25px;
  margin-top:-64px;
  z-index:2;
  `;

    
export const ContactContainer = styled.div`
  max-width:1320px;
  height:682px;
  margin:auto;
  padding:0px 16px 0px 16px;
 
  background:#fff;
  position:relative;
  bottom:730px;
`
 