import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  max-width:100%;
  height:1027.56px;
 
  background:#f5f5f5;
  padding-top:28px;   
  
  @media screen and (max-width:1000px) {
    max-width:1000px;
    height:1271.56px;
    // border:1px solid red;
    // background:#f5f5f5;
    padding-top:20px;   
 }
`;

export const ServicesContainer = styled.div`
  max-width:1400px;
  height:979.56px;
  margin:auto;
  // background:#f5f5f5;
  align-items:center;
  padding-top:48px;


  @media screen and (max-width: 990px) {
    max-width:696px;
    height:1223.560px;
    // borde:1px solid #000;
    // background:red;

  }
`;

export const ServicesRow = styled.div`
  max-width:1320px;
  height:104px;
  margin:  auto;
  display:block;
  margin-bottom:64px;

  @media screen and (max-width:990px) {
    max-width:720px;
    height:1049.56x;
    // border:1px solid #000;
    
    background:#f5f5f5;
    padding-top:48px;   
 }

`;

export const ServicesH1 = styled.div`
  font-size:48px;
  font-weight:bold;
  margin-bottom:20px;
  margin-top:-40px;  
  text-align:center;
`;

export const ServicesP = styled.div`
  display:block;
  text-align:center;
  font-size:16px;
  line-height:10px;
  margin-bottom:16px;

`;


export const Line = styled.div`
  width:40px;
  height: 5px;
  margin:auto;
  background:blue;
`