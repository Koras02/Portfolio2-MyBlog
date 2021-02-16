import styled from 'styled-components';
import Image from './Images/1672440.jpg'
 

 export const HeroImage = styled.div`
 width:100%;
 height:100vh;
 z-index:-990;
 background:url(${Image}) no-repeat;
 background-size:cover;
 background-position:center center;
 position:fixed;
 border:1px solid #fff;  
 opacity:100%;
 
 ::befor {
   box-sizeing
  }
  ::after {
    box-sizing:border-box;
  }
  `;
  
  
  
  
  export const HeroContainer = styled.div`
  max-width:100%;
  height:1000px;
  display:flex;
  z-index:-999;
  opacity:100%;
  opacity:100%;
  justify-content:center;
  align-items:center;
  border-bottom:1px solid red;
  z-index:1
  
`;

export const HeroBg = styled.div`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%; 
  overflow:hidden;
  z-index:-990;
  
`

export const BackgroundBg = styled.img`
  width:100%;
  height:836px;
  -o-object-fit:cover;
  object-fit:cover;
  position:fixed;z-index:-990;
  
`

export const HeroContent = styled.div`
  max-width:1200px;
  position:relative;
  z-index:-990;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const HeroH1 = styled.h1`
  color:#fff;
  font-size: 70px;
  text-align:center;
  z-index:3;
 

  @media screen and (max-width: 768px) {
      font-size: 40px;
      text-align:left;
 
  }

  @media screen and (max-width: 480px) {
      font-size:40px;
      text-align:left;
 
  }
`

export const HeroP = styled.p`
  margin-top:24px;
  color:#fff;
  font-size:24px;
  text-align:center;
  max-width:600px;
  z-index:2;
 
  @media screen and (max-width: 768px){
    font-size:40px;
    text-align:left;
  }
  @media screen and (max-width: 480px){
    font-size:40px;
      text-align:left;
  }
  `