import styled from "styled-components";
import Image from '../Images/Person.jpg'

 

export const CounterConatinerWrapper = styled.div`
  width:100%;
  height:432.8px;
  border:1px solid #000;
  z-index:1;
  background-repeat:no-repeat;
  `;
  
  
  export const CounterBackground = styled.div`
  width:100%;
  height:432px;
  background:blue;
  background:url(${Image}) no-repeat;
  background-size:cover;
  background-position:center center;
  background-attachment: fixed;
  opacity:100%;
`;

  
export const CounterBg = styled.div`
max-width:100%;
height:432px;
border:1px solid red;

`

  
export const CounterOverflow = styled.div`
max-width:100%;
height:432px;
background:#0078ff;
opacity:70%;
`

export const CounterPosition = styled.div`
   max-width:1320px;
   height:176.8px;
   border:1px solid #000;
   margin:auto;
   position:relative;
   top:100px;
`;

export const CounterIcon = styled.div`
  width:300px;
  height:176.8px;
  border:1px solid #000;
  display:inline-flex;
  padding:0px 0px 0px 0px;
  margin:0px 12px 0px 8px;
`;

export const CounterBox = styled.div`
   width:300px;
   height:148px;
   margin-bottom:28px;
   border:1px solid red;
`;

export const CounterIco = styled.div`
   width:300px;
   hegiht:60px;
   display:block;
   margin-bottom:16px;
   border:1px solid #000;
`;

export const IcoBox = styled.div`
   width:60px;
   hieght:60px;
   margin:auto;
   border:10px solid #fff;
   border-radius:100%;
`

export const CheckBox = styled.div`
   width:60px;
   height:60px;
   margin:auto;
   
`


export const CounterNumber = styled.div`
width:300px;
height:72px;
border:1px solid #000;
margin-top:10px;
`;


export const CheckBoxH1 = styled.div`
    text-align:center;
    font:30px/38px arial;
    display:block;
    color:#fff;
`;


export const CheckBoxP = styled.div`
   text-align:center;
   text-align:center;
   font: bold 18px/38px arial;
   color:#fff;
   display:block;
`