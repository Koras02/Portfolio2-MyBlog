import styled from 'styled-components';

export const ProfileStoryWrapper = styled.div`
  width:100%;
  height:600px;
  background:#000;
  overflow:hidden;
  margin-top:100px;
  border-top:1px solid #fff;
`;

export const ProfileStoryHeader = styled.div`
   padding:4%;
   margin:0px auto;
   border-bottom:1px solid #fff;
 
`;

export const ProfileStoryHeaderH1 = styled.div`
   margin-left:-100px;
   font:bold 18px/24px arial;
   color:#fff;
   text-align:center;
   margin-right:800px;

   @media screen and (max-width:1024px) {
      color:red;
      font:bold 16px/18px arial;
      margin-left:50px;
   }
   
`;

export const ProfileStoryHeaderP = styled.div`
   font:bold 16px/18px arial;
   margin-top:40px;
   margin-right:50px;
   color:#fff;
   position:relative;left:50%;
   overflow:hidden;
   margin-left:-500px;

   @media screen and (max-width:1024px) {
      color:red;
      font:bold 14px/18px arial;
      margin-left:-440px;
   }

   @media screen and (max-width:960px) {
      color:blue;
      font:bold 14px/18px arial;
      margin-left:-400px;
   }
`;

export const Img1 = styled.img`
   margin-left:-100px;
   float:left;
   max-width:200px;
   position:relative;left:50%;
   bottom:200px;
   overflow:hidden;

   @media screen and (max-width:960px) {
      margin-left:-120px;
      margin-top:20px;
      margin-right:-80px;
      max-width:180px;
   }
`

export const Img2 = styled.img`
   margin-left:100px;
   float:left;
   max-width:350px;
   position:relative;left:50%;
   bottom:200px;
   overflow:hidden;

   @media screen and (max-width:960px) {
      margin-left:100px;
      max-width:250px;
      margin-top:20px;
   }

`