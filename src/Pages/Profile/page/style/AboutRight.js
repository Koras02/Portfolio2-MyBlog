import styled from 'styled-components';

export const AboutRightWrapper = styled.div`
   width:650px;
   height:473.5px;
   
   padding:px 12px 0px 12px;
   float:left;
   margin:0px 0px 0px 0px auto;

   @media screen and (max-width:1400px) {
     max-width:400px;
     height:524px;
     float:left;
     padding:0px 12px 0px 12px;
     border:1px solid yellow;
   }
   @media screen and (max-width:1200px) {
    width:300px;
    padding:10px 25px 0px 18px;
    font: bold 16px/18px arial;
    border:1px solid red;
    float:left;
    margin:0px -10px 0px -10px auto;
    position:relative;
    bottom:0%;
}
@media screen and (max-width:1024px) {
  padding:0px 12px 0px 12px;
  font: bold 14px/16px arial;
  border:1px solid blue;
  float:left;
  margin:0px -10px 0px -10px auto;
  position:relative;
  bottom:0%;
  max-width:200px;
 
}

@media screen and (max-width:960px) {
  padding:0px 12px 0px 12px;
  font: bold 14px/16px arial;
  border:1px solid blue;
  float:left;
  margin:0px -10px 0px -10px auto;
  position:relative;
  bottom:0%;
 
}

@media screen and (max-width:860px) {
  padding:0px 12px 0px 12px;
  font: bold 14px/16px arial;
  border:1px solid blue;
  float:left;
  margin:0px -10px 0px -10px auto;
  position:relative;
  top:5%;
}
@media screen and (max-width:800px) {
  padding:0px 12px 0px 12px;
  font: bold 14px/16px arial;
  border:1px solid red;
  float:left;
  margin:0px -10px 0px -10px auto;
  position:relative;
  top:-30%;
}
@media screen and (max-width:760px) {
  padding:0px 12px 0px 12px;
  font: bold 14px/16px arial;
  border:1px solid red;
  float:left;
  margin:0px -10px 0px -10px auto;
  position:relative;
  top:5%;
}


 
`;

export const AboutH1 = styled.div`
  font:bold 30px/44px arial; 
  display:inline;
  float:left;
  margin-bottom:48px;
`;

export const Bottom = styled.div`
  width:100px;
  border-bottom:3px solid red;
`

export const AboutP = styled.div`
  width:588px;
  height:418px;
  float:left;
  // border:1px solid #000;

  @media screen and (max-width:1000px) {
    max-width:300px;
 
    border:1px solid #000;
  }
`;

export const AboutP1 = styled.div`
  font: 16px/26px arial;
  margin-top:1px;
  margin-bottom:2px;

  @media screen and (max-width: 1200px) {
    font: 14px/24px arial;
  }
  @media screen and (max-width: 1200px) {
    font: 12px/24px arial;
    margin-left:-2px;
  }

  @media screen and (max-width:1000px) {
     width:288px;
     height:100px;
     font:bold 12px/10px arial;
    
  }
`;

export const AboutPLead = styled.div`
   width:558px;
   height:140px;
   display:block;
   margin-bottom:12px;
  //  border:1px solid #000;
  font:bold 14px/24px arial;

  @media screen and (max-width:1000px) {
    width:288px;
    height:20px;
    margin-bottom:16px;
    border:1px solid blue;
  }
`