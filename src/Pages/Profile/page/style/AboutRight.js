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
    width:300px;
    padding:0px 12px 0px 12px;
    font: bold 14px/16px arial;
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
  display:block;
  float:left;
  margin-top:10px;
  font-size:18px;
  font-weight:serif;
  line-height:28px;
  margint-bottom:16px;

  @media screen and (max-width: 1400px) {
 
}

@media screen and (max-width:1200px) {
    margin-top:10px;
    font-size:11px;
    font-weight:serif;
    line-height:22px;
    margint-bottom:16px;
}
@media screen and (max-width:790px) {
  margin-top:10px;
  font-size:11px;
  font-weight:serif;
  line-height:22px;
  margint-bottom:16px;
}
`