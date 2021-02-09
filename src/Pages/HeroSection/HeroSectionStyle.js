import styled from 'styled-components';


export const HeroContainer = styled.div`
  width:100%;
  height:836px;
  background:#000;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:0;
  
  
  position:relative;
  border-bottom:1px solid #fff; 
 
`;

export const HeroBg = styled.div`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
 
 
  
  overflow:hidden;
`

export const BackgroundBg = styled.img`
  width:100%;
  height:836px;
  -o-object-fit:cover;
  object-fit:cover;
  position:fixed;
  background: #000;
  z-index:2;
 
`

export const HeroContent = styled.div`
  z-index:2;
  max-width:1200px;
  position:relative;
  border:1px solid #fff;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const HeroH1 = styled.h1`
  color:#fff;
  font-size: 90px;
  text-align:center;

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
 
  @media screen and (max-width: 768px){
    font-size:40px;
    text-align:left;
  }
  @media screen and (max-width: 480px){
    font-size:40px;
      text-align:left;
  }
  `