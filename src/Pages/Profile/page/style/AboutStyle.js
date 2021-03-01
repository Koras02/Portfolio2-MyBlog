import styled from 'styled-components';

export const AboutWrapper = styled.div`
  max-width:100%;
  height:679.09px;
 
  background:#f5f5f5;
  padding-top:60px;
 
  @media screen and (max-width:1400px) {
    max-width:1400px;
    hegiht:649.500px;
    padding-top:60px;
    // border:1px solid red;
  }
  @media screen and (max-width:1200px) {
    max-width:1200px;
    height: 790px;
    padding-top:64px;
    // border:1px solid blue;
 }

 @media screen and (max-width:1000px) {
     max-width:991px;
     height:820px;
     padding-top:64px;
 }


`

export const AboutContainer = styled.div`
  width:1320px;
  height:601.5px;
 
  position:relative;
  margin:10px auto;
  background:#fff;
   
  @media screen and (max-width:1400px) {
    max-width:1116px;
    height:649.500px;
    padding:0px 12px 0px 12px;
    // border:1px solid #000;
  }

  @media screen and (max-width:1200px) {
    max-width:936px;
    height:649px;
    padding:0px 12px 0px 12px;
    
  }
  @media screen and (max-width:1000px) {
    max-width:696px;
    height:680px;
    height:padding:0px 12px 0px 12px;
  }

 
`;

export const AboutFirstRow = styled.div`
    width:1320px;
    height:649.500px;
    margin:auto;
    // border:1px solid yellow;

    @media screen and (max-width:1400px) {
        max-width:1140px;
        height:700px;
        margin:auto;
        // border:1px solid blue;
    }

    @media screen and (max-width:1200px) {
      max-width:960px;
      height:790px;
    }
 
    @media screen and (max-width:1000px) {
        max-width:720px;
        height:970px;
    }

`



export const AboutCollpase = styled.div`
    max-width:1320px;
    height:649.5px;
    margin:auto;
  

    @media screen and (max-width:1400px) {
      max-width:1116px;
      height:649.5px;
      padding:0px 12px 0px 12px;
    }

    @media screen and (max-width:1200px) {
      max-width: 936px;
      height:760px;
      padding:0px 12px 0px 12px;
      // border:1px solid red;
    } 

    @media screen and (max-width:1000px) {
      max-width:696px;
      height:970px;
      
    }
`

export const Box = styled.div`
    max-width:1296px;
    height:649.5px;
    margin:auto;
    padding-top:64px;

     @media screen and (max-width:1400px) {
       max-width:1020px;
       height:524px;
       padding:64px 48px 64px 48px;
       margin-bottom:48px;
     }

     @media screen and (max-width:1200px) {
        max-width:840px;
        height:614px;
        padding:64px 48px 64px 48px;
        margin-bottom:48px;
        // border:1px solid yellow;
     }

    @media screen and (max-width:1000px) {
      max-width:600px;
      height:394px;
      padding:64px 48px 64px 48px;
      margin-bottom:48px;
    }

     @media sreena and (min-width: 576px) {
       flex:0 0 auto;
       width:100%;
     }
`



export const AboutRow = styled.div`
   max-width:1304px;
   height:473.5px;   
   margin:auto;
  
   @media screen and (max-width:1400px) {
     max-width:1044px;
     height:524px;
    //  border:1px solid red;
   }

   @media screen and (max-width:1200px) {
     max-width:864px;
     height:614px;
    //  border:1px solid blue;
   }

   @media screen and (max-width:1000px) {
     max-width:624px;
     height:794px;
    //  border:1px solid yellow;
   }
`;

export const ColLeft = styled.div`
    width:610px;
    height:473.5px;
    float:left;
 
    padding:0px 10px 0px 12px;
   
    @media screen and (max-width:1400px) {
      max-width:498px;
      height:524px;
      padding:0px 12px 0px 12px;
      // border:1px solid blue;
    }

    @media screen and (max-width:1200px) {
      max-width:408px;
      height:614px;
      padding:0px 12px 0px 12px;
      // border:1px solid red;
    }

    @media screen and (max-width:1000px) {
      max-width:288px;
      height:794px;
      padding:0px 12px 0px 12px;
      // border:1px solid blue;
    }
`

export const RowProfile = styled.div`
   max-width:612px;
   height:182px;
  //  border:1px solid #000;

  @media screen and (max-width:1400px) {
    max-width:612px;
    height:182px;

    // border:1px solid blue;
  }

  @media screen and (max-width: 1200px) {
    max-width:432px;
    height:182px;
    // border:1px solid yellow;
  }
 
  @media screen and (max-width:1000px) {
    max-width:312px;
    height:264px;
    // border:1px solid red;
  }
`

export const Profile1 = styled.div`
  width:612px;
  height:182px;
  float:left;
  // padding:0px 12px 0px 12px;
  
  @media screen and (max-width: 1400px) {
    max-width:220px;
    height:182px;
    // border:1px solid red;
    padding:0px 12px 0px 12px;
    display:inline-block;
    float:left;
  }

   @media screen and (max-width:1200px) {
    //  border:1px solid yellow;
     max-width:156px;
     height:182px;
     padding:0px 12px 0px 12px;
   }

   @media screen and (max-width: 1000px) {
      max-width:106px;
      height:264px;
      padding:0px 12px 0px 12px;
      // border:1px solid red;
   }
 
`

export const ImgForm = styled.div`
   width:250px;
   height:182px;
   padding:0px 12px 0px 12px;
  //  border:1px solid #000;
   display:inline-flex;float:left;

   @media screen and (max-width:1400px) {
      width:100px;
      height:150px;
      margin-bottom:32px;
      // border:1px solid red;
   }

 
`;
export const Img = styled.img`
  width:150px;
  height:150px;
  border-radius:4%;
  box-shadow:1px 1px 1px 1px;
  // border:1px solid red;

  @media screen and (max-width:1000px) {
    width:106px;
    height:106px;
    // border:1px solid blue;
  }

 
`;

export const ProfileDescription = styled.div`
      width:333px;
      height:182px;
      // border:1px solid red;
      padding:0px 12px 0px 12px;
      display:block;
      box-sizing:border-box;
      float:right;

      @media screen and (max-width:1400px) {
        max-width:280.500px;
        height:182px;
        // padding:0px 12px 0px 12px;
        // border:1px solid red;
        position:relative;
        left:120%;
        bottom:100%;
      }

      @media screen and (max-width:1200px) {
        max-width:240px;
        height:182px;
        padding:0px 12px 0px 12px;
        // border:1px solid blue;
        position:relative;
        left:280px;
      }
     
      @media screen and (max-width:1000px) {
        max-width:158px;
        height:264px;
        padidng:0px 12px 0px 12px;
        // border:1px solid red;
        position:relative;
        left:180%;
        bottom:70%;

      }
   `;

export const ProfileH1 = styled.div`
   font:bold 16px/18px arial;
   margin-bottom:24px;
 
   @media screen and (max-width:1200px) {
       max-width:228px;
       height:26px;
       font:bold 14px/16px arial;
       position:relative;
       left:-20px;
  }
  
   
`;

export const ImageList = styled.div`
  // border:1px solid #000;
`



export const Skill = styled.div`
   width:588px;
   height:272.31px;
  //  border:1px solid #000;
   float:left;

   @media screen and (max-width:1400px) {
     max-width:498px;
     height:272.312px;

   }

   @media screen and (max-width:1200px) {
     max-width:408px;
     height:273.312px;
   }

   @media screen and (max-width:1000px) {
     max-width:288px;
     height:273.312px;
     
   } 
   
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
 
   background:;
   opacity:85%;

   
`;


