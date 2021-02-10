import styled from 'styled-components';

export const AboutWrapper = styled.div`
  max-width:100%;
  height:700px;
  background: #e3e3e3;
  padding-top:60px;
  display:flex;
 
  @media screen and (max-width:1400px) {
    max-width:1440px;
    height:764px;
  }

  @media screen and (max-width:860px) {
    // height:1025.5px;
  }
  
  @media screen and (max-width: 760px) {
    height:1197.5px;
  }

`

export const AboutContainer = styled.div`
  width:1320px;
  height:601.5px;
 
  position:relative;
  margin:10px auto;
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

  @media screen and (max-width:760px) {
    max-width:540px;
    height:1100px;
    border:1px solid red;
  }
  
  
  @media screen and (max-width:540px) {
    max-width:543px;
    height:100px;
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
    width:610px;
    height:473.5px;
    float:left;
    border:1px solid #000;
    padding:0px 10px 0px 12px;

    @media screen and (max-width:1400px) {
      max-width:560px;
    }
   
    @media screen and (max-width:1000px) {
      max-width:312px;
    }

    @media screen and (max-width:760px) {
      min-width:510px;
    }
`

export const RowProfile = styled.div`
   max-width:612px;
   height:182px;
  //  border:1px solid #000;
  @media screen and (max-width:1400px) {
    max-width:560px;
  }
  @media screen and (max-width:1000px) {
    max-width:312px;
  }
`

export const Profile1 = styled.div`
  width:612px;
  height:182px;
  float:left;
  // padding:0px 12px 0px 12px;
  // border:1px solid #000;
`

export const ImgForm = styled.div`
   width:250px;
   height:182px;
   padding:0px 12px 0px 12px;
  //  border:1px solid #000;
   display:inline-flex;float:left;


   @media screen and (max-width:1024px) {
    width:150px;
    float:left
 }
`;

export const ProfileDescription = styled.div`
   
   width:500px;
   display:block;
 

   @media screen and (max-width:1024px) {
      width:182px;
      margin-left:-0px;
      float:left;
   }
   @media screen and (max-width:960px) {
    width:182px;
    margin-left:-20px;
    float:left;
 }
   `;
   
   export const ProfileH1 = styled.div`
   font:bold 16px/18px arial;
   margin-bottom:24px;
 
   @media screen and (max-width:1024px) {
    font:bold 14px/16px arial;
 }
   
`;

export const ImageList = styled.div`
  // border:1px solid #000;
`


export const Img = styled.img`
  width:150px;
  height:150px;
  border-radius:4%;
  box-shadow:1px 1px 1px 1px;

  @media screen and (max-width: 1000px) {
    width:106px;
    height:106px;
    float:left;
  }
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

   @media screen and (max-width:1024px) {
     max-width:300px;
   }
`;
 

