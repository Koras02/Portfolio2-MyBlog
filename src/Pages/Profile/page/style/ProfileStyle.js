import styled from 'styled-components';
import Image1 from '../Form/Images/Mount.jpg'
import Image2 from '../Form/Images/Profile3.jpg'
import Image3 from '../Form/Images/Beard.jpg'

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
  width:1320px;
  height:351px;
  margin:auto;
  padding:0px 12px 0px 12px;
 
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
   outline:none;
`

export const ProfileForm1 = styled.div`
  max-width:1296px;
  height:100%;
  display:block;
  overflow:hidden;
  position:relative;
  outline:none;
  overflow:none;
    
`

export const ProfileForm2 = styled.div`
  width:1296px;
  height:307px;
  overflow:hidden;
  position:relative;
 
`;

export const ProfileForm3 = styled.div`
   width:1290px;
   height:307px;
 
`
 export const ProfileFormTab = styled.div`
    width:1296px;
    height:199px;
    margin-top:16px;
 
 `;

 export const ProfileImg1 = styled.div`
    width:150px;
    height:150px;
    margin:auto;
    display:block;
 
    border-radius:100%;
    background:url(${Image2}) no-repeat;
    background-size:cover;
 
 `;

 export const ProfileImg2 = styled.div`
 width:150px;
 height:150px;
 margin:auto;
 display:block;
 border:1px solid #000;
 border-radius:100%;
 background:url(${Image3}) no-repeat;
 background-size:cover;

`

export const ProfileImg3 = styled.div`
width:150px;
height:150px;
margin:auto;
display:block;
border:1px solid #000;
border-radius:100%;
background:url(${Image2}) no-repeat;
background-size:cover;

`