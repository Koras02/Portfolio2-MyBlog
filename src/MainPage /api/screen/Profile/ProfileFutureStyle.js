import styled from 'styled-components';

export const ProfileFutureWrapper = styled.div`
   width:100%;
   height:800px;
   border:1px solid #fff;
   display:block;
   position:relative;
   bottom:-40px;
`;


export const ProfileFutures = styled.div`
   
`;

export const ProfileFutureH1 = styled.div`
  font:bold 24px/30px arial;
  color:#fff;
  padding-bottom:20px;
  text-align:center;
  margin-top:20px;
  margin-bottom:10px;
 
`


export const ProfileFutureP = styled.div`
   float:left;
   text-align:center;
   font:bold 18px/24px arial;
   color:#fff;
   position:relative;
   left:50%;
   margin-left:-700px;
   margin-right:800px;
   margin-top:200px;
   padding:100px
 
`

export const ImgWrap = styled.div`
  width:100%;
 
`

export const Img = styled.img`
   margin-left:120px;
   max-height:280px;
   float:left;
   max-width:600px;
   position:relative;left:50%;
   top:40px;
   margin-right:500px;
   margin-left:-400px;
   overflow:hidden;

   @media screen and (max-width:1200px) {
      margin-right:550px;
      max-height:260px;
   }   
   @media screen and (max-width:1024px) {
      margin-right:560px;
      max-height:240px;
   
   }
   @media screen and (max-width:960px) {
      margin-right:480px;
      margin-left:-340px;
      max-height:200px;
   }

   @media screen and (max-width:860px) {
      margin-right:400px;
      margin-left:-300px;
      max-height:180px;
   }
   @media screen and (max-width:680px) {
      margin-right:400px;
      margin-left:-300px;
      max-height:160px;
   }
`;

export const Description = styled.div`
   color:#fff;
   display:inline;
   position:relative;
   left:50%;
   top:20px;
   text-align:center;
   margi-top:80px;
   margin-left:-300px;
   margin-right:600px;
   font:bold 20px/24px arial;

   @media screen and (max-width:1200px) {
      margin-right:680px;
   }

   @media screen and (max-width:1100px) {
      margin-right:600px;
   }
   @media screen and (max-width:960px) {
      margin-right:540px;
   }
   @media screen and (max-width:860px) {
      font:bold 16px/18px arial;
      margin-right:450px;
      margin-lefT:-250px;
   }

   @media screen and (max-width:680px) {
      font:bold 14px/18px arial;
      margin-right:450px;
      margin-lefT:-250px;
   }
 
`