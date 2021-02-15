import styled from 'styled-components';
import Image1 from '../Form/Images/Mount.jpg'

export const ProfileFormWrapper = styled.div`
  width:100%;
  height:607px;
  border:1px solid #fff;
  background:red;
  background:url(${Image1}) no-repeat;
  background-size:cover;
  background-position:center center;
  background-attachment:fixed;
`;

export const ProflieOverflow = styled.div`
width:100%;
height:607px;
background: #667db6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

opacity:80%;
`;

export const ProfileContainer = styled.div`
  max-width:1320px;
  height:351px;
  margin:auto;
  padding:0px 12px 0px 12px;
  border:1px solid #000;
  position:relative;
  top:150px;
`;

export const ProfileSwipper = styled.div`
   width:100%;
   height:100%;
   z-index:1;
   display:flex;
   transition-property: transform;
   box-sizing: content-box;
   border:1px solid #000;
`

export const ProfileForm1 = styled.div`
  width:100%;
  height:100%;
  border:1px solid #000;
  display:block;
 
 
    
`

export const ProfileForm2 = styled.div`
  max-width:1900px;
  height:199px;
  border:1px solid red;
`

 