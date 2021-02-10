import styled from 'styled-components';

export const AboutWrapper = styled.div`
  max-width:100%;
  height:700px;
  background: #e3e3e3;
  padding-top:60px;
  display:flex;
 
  @media screen and (max-width:1400px) {
    width:1440px;
    height:764px;
  }


`

export const AboutContainer = styled.div`
  width:1320px;
  height:601.5px;
  border:1px solid #000;
  position:relative;
  margin:auto;
  background:#fff;
  
  @media screen and (max-width:1400px) {
    max-width:1140px;
    height:700px;
  }

  @media screen and (max-width:1200px) {
    max-width:960px;
  }

  @media screen and (max-width:1000px) {
    max-width:720px;
  }

  @media screen and (max-width:750px) {
    max-width:540px;
  }
 
  @media screen and (max-width:540px) {
    max-width:543px;
  }
`;

export const AboutCollpase = styled.div`
    max-width:1320px;
    height:649.5px;
    margin:auto;
 
`

export const Box = styled.div`
    max-width:1296px;
    height:649.5px;
    margin:auto;
    padding-top:64px;
`



 export const AboutRow = styled.div`
   max-width:1304px;
   height:473.5px;
   border:1px solid #000;
   margin:auto;
`;

export const ColLeft = styled.div`
    max-width:612px;
    height:473.5px;
    float:left;
    border:1px solid #000;
    padding:0px 12px 0px 12px;
`

export const RowProfile = styled.div`
   max-width:612px;
   height:182px;
  //  border:1px solid #000;
`

export const Profile1 = styled.div`
  width:612px;
  height:182px;
  float:left;
  // padding:0px 12px 0px 12px;
  // border:1px solid #000;
`

export const ImgForm = styled.div`
   width:255px;
   height:182px;
   padding:0px 12px 0px 12px;
  //  border:1px solid #000;
   display:inline-flex;
`;

export const ProfileDescription = styled.div`
  //  border:1px solid #000;
   float:right;
   min-width:320px;
   height:182px;

`;

export const ProfileH1 = styled.div`
   font:bold 16px/18px arial;
   margin-bottom:24px;
   
`;

export const ImageList = styled.div`
  // border:1px solid #000;
`


export const Img = styled.img`
  width:150px;
  height:150px;
  border-radius:4%;
  box-shadow:1px 1px 1px 1px;
`;

export const Skill = styled.div`
   width:588px;
   height:272.31px;
  //  border:1px solid #000;
   float:left;
`;

export const SkillH1 = styled.div`
  display:block;
  margin-bottom:10px;
  font:bold 18px/24px arial;
`

export const SkillP = styled.div`
   display:block;
   font-size:13px;
   margin-top:1%;
`

export const Graph = styled.div`
   max-width:558px;
   height:11.99px;
   border:1px solid #000;
   background:;
 
   opacity:85%;
`;
 

