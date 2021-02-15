import styled from "styled-components";
import Image from '../Images/Person.jpg'

 

export const CounterConatinerWrapper = styled.div`
  width:100%;
  height:432.8px;
 
  z-index:1;
  background-repeat:no-repeat;

  @media screen and (max-width:1400px) {
     max-width:1400px;
     
  }
  @media screen and (max-width:1024px) {
   max-width:1024px;
  }

  @media screen and (max-width:1024px) {
   background-attachment: scroll;
   }
  `;
  
  
  export const CounterBackground = styled.div`
  width:100%;
  height:432px;
  background:blue;
  background:url(${Image}) no-repeat;
  background-size:cover;
  background-position:center center;
  background-attachment: fixed;
  opacity:100%
  
  @media screen and (max-width: 1600px) {
   background:url(${Image}) no-repeat;
   background-size:cover;
   background-position:center center;
   background-attachment: scroll;
   opacity:100%
   }

  @media screen and (max-width: 1024px) {
   background:url(${Image}) no-repeat;
   background-size:cover;
   background-position:center center;
   background-attachment: scroll;
   opacity:100%
   }
`;

  
export const CounterBg = styled.div`
max-width:100%;
height:432px;
`

  
export const CounterOverflow = styled.div`
max-width:100%;
height:432px;
background:#0078ff;
opacity:70%;
`

export const CounterPosition = styled.div`
   max-width:1320px;
   height:176.8px;
 
   margin:auto;
   position:relative;
   top:100px;

   @media screen and (max-width:1400px) {
      max-width:1140px;
      height:176.8px;
   }

   @media screen and (max-width:1200px) {
      max-width:960px;
      height:176.8px;
   }
   @media screen and (max-width:980px) {
      max-width:720px;
      height:176.8px;
   }
`;

export const CounterIcon = styled.div`
  width:300px;
  height:176.8px;
  display:inline-flex;
  padding:0px 0px 0px 0px;
  margin:0px 12px 0px 8px;
  @media screen and (max-width:1400px) {
        max-width:285px;
        margin:0px 0px 0px 0px;
   }
   @media screen and (max-width:1200px) {
      max-width:240px;
      margin:0px -10px 0px 0px;
      padding:0px 2px 0px 0px;
   }

   @media screen and (max-width:980px) {
      max-width:180px;
      margin:0px -12px 0px -0px;
      padding:0px 2px 0px 0px;
      position:relative;
      left:-50px;
   }
  `;
  
  export const CounterBox = styled.div`
  width:300px;
  height:148px;
   margin-bottom:28px;
 
`;

export const CounterIco = styled.div`
   width:300px;
   hegiht:60px;
   display:block;
   margin-bottom:16px;
 
`;

export const IcoBox = styled.div`
   width:60px;
   hieght:60px;
   margin:auto;
   border:10px solid #fff;
   border-radius:100%;
`

export const CheckBox = styled.div`
   width:60px;
   height:60px;
   margin:auto;
   
`


export const CounterNumber = styled.div`
width:300px;
height:72px;
 
margin-top:10px;
`;


export const CheckBoxH1 = styled.div`
    text-align:center;
    font:30px/38px arial;
    display:block;
    color:#fff;
`;


export const CheckBoxP = styled.div`
   text-align:center;
   text-align:center;
   font: bold 18px/38px arial;
   color:#fff;
   display:block;
`