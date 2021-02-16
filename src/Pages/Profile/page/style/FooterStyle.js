import styled from 'styled-components';
import Image from '../Form/Images/Mount.jpg';

export const FooterWrapper = styled.div`
  max-width:100%;
  height:746px;
  padding-bottom:30px;
  margin-bottom:0px;
  background:#fff;
  z-index:1;
  `;
  
  export const FooterOverflow = styled.div`
  width:100%;
  height:775px;
  border:1px solid #000;
  background:blue;
  background:url(${Image});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center center;
  background-attachment:fixed;
  opacity:70%;
  z-index:999;
  `;
  
  export const FooterContainer = styled.div`
  width:1320px;
  height:682px;
 
   margin:150px auto;
 
   padding:0px 16px 0px 16px;
`

export const FooterContainerRow = styled.div`
  width:1320px;
  height:682px;
 

`

export const FooterContainerRowCol = styled.div`
  width:1320px;
  height:682px;
  padding:0px 12px 0px 12px;
 
`;

export const FooterContainerContent = styled.div`
   width:1296px;
   height:570px;
   margin:auto;
   border:1px solid red;
   margin-top:64px;
  
   
`;

export const FooterContent = styled.div`
   width:1200px;
   height:424px;
   border:1px solid #000;
   margin-bottom:48px;
   padding:48px 48px 48px 48px;
   background:#fff;
`;
export const FooterRow = styled.div`
   width:1200px;
   height:474px;
   border:1px solid #000;
   display:flex;
`;

export const FooterCol1 = styled.div`
  width:612px;
  height:474px;
  border:1px solid #000;
  padding:0px 0px 0px 0px;
  display:inline-block;
  margin-left:12px;

  @media screen and (min-width: 768px) {
    flex: 0 auto;
    width:48%;
  }
`;

export const FooterTitle = styled.div`
  height:38px;
  margin-bottom:48px;
  border:1px solid #000;
  font:bold 28px/30px arial;
`;

export const Border = styled.div`
   
`

export const FooterForm = styled.div`
  width:588px;
  height:388px;
`;

export const FooterFormRow = styled.div`
   width:612px;
   height:388px;
 
`

export const FooterFormCol = styled.input`
   width:554px;
   height:43px;
   margin-bottom:16px;
   
   &:focus {
     border:3px solid #d7e3f5;
     outline:none;
     background:#fff;
    //  border:${props => (props.onClick ? '1px solid red' : '1px solid blue')};
  }
   `

   export const FooterFormCol1 = styled.div`
    width:554px;
    height:131px;
   `

   export const FooterFormText = styled.input`
   width:554px;
   height:100px;
   
   `
 