import styled from 'styled-components';

export const AboutRightWrapper = styled.div`
   width:550px;
   height:473.5px;
   border:1px solid #000;
   padding:px 12px 0px 12px;
   float:right;
   margin:0px 0px 0px 0px auto;

   @media screen and (max-width:1400px) {
          width:400px;
          padding:0px 12px 0px 12px;
          float:left;
          margin:0px -10px 0px -10px auto;
   }
   @media screen and (max-width:1400px) {
    width:300px;
    padding:0px 12px 0px 12px;
    float:left;
    margin:0px -10px 0px -10px auto;
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
`