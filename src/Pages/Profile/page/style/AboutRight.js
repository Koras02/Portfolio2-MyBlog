import styled from 'styled-components';

export const AboutRightWrapper = styled.div`
   width:650px;
   height:473.5px;
   
   padding:px 12px 0px 12px;
   float:right;
   margin:0px 0px 0px 0px auto;

   @media screen and (max-width:1400px) {
          width:500px;
          padding:0px 22px 0px 12px;
          float:left;
          margin:0px -10px 0px -0px auto;
   }
   @media screen and (max-width:1200px) {
    width:360px;
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
 
}

@media screen and (max-width:800px) {
  padding:0px 12px 0px 12px;
  font: bold 14px/16px arial;
  border:1px solid blue;
  float:left;
  margin:0px -10px 0px -10px auto;
  position:relative;
  bottom:40%;
 
}


@media screen and (max-width:790px) {
  width:400px;
  padding:20px 12px 0px 12px;
  font: bold 20px/24px arial;
  border:1px solid yellow;
  float:left;
  margin:0px -10px 0px -10px auto;
  position:relative;
  bottom:40%;
 
}
`;

export const AboutH1 = styled.div`
  font:bold 30px/44px arial; 
  display:inline;
  float:left;
`;

export const Bottom = styled.div`
  width:100px;
  border-bottom:3px solid red;
`

export const AboutP = styled.div`
  width:588px;
  height:418px;
  float:left;
  font:20px/24px arial;

  @media screen and (max-width:1400px) {
    font:16px/30px arial;
  }
  @media screen and (max-width:1200px) {
    font:13px/34px arial;
  }
  @media screen and (max-width:1024px) {
    font:12px/34px arial;
  }
`