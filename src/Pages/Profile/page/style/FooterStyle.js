import styled from 'styled-components';
import Image from '../Form/Images/Mount.jpg';


export const FooterWrapper = styled.div`
  max-width:100%;
  height:746px;
  padding-bottom:30px;
  margin-bottom:0px;
  background:url(${Image});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center center;
 
  background-attachment:fixed;
  z-index:0;

  @media screen and (max-width:1400px) {
    max-width:1400px;
    height:682px;
    // padding-top:64px;
    border:1px solid #000;
  }
  `;

export const FooterOverflow = styled.div`
  width:100%;
  height:775px;
  border:1px solid #000;
  background:#0d6efd;
  z-index:-999;
  opacity:95%;
  @media screen and (max-width:1400px) {
    max-width:1400px;
    height:770px;
    // padding-top:64px;
    border:1px solid #000;
  }
  `;

export const FooterContainer = styled.div`
  width:1320px;
  height:682px;
  opacity:100%;
  z-index:1;
   margin:150px auto;
 
   padding:0px 16px 0px 16px;

   @media screen and (max-width:1400px) {
     max-width:1116px;
     height:682px;
     padding:0px 12px 0px 12px;
     position:relative;
     top:-100px;
   }

   @media screen and (max-width:1200px) {
     max-width:936px;
     height:682px;
     pdding:0px 12px 0px 12px;
     border:1px solid yellow;
   }
`

export const FooterContainerRow = styled.div`
  width:1320px;
  height:682px;

  @media screen and (max-width:1400px) {
    max-width:1140px;
    height:682px;
    border:1px solid red;
  }

  @media screen and (max-width:1200px) {
    max-width:960px;
    height:682px;
    border:1px solid blue;
  }
 

`

export const FooterContainerRowCol = styled.div`
  width:1320px;
  height:682px;
  padding:0px 12px 0px 12px;

  @media screen and (max-width:1400px) {
    max-width:1116px;
    height:682px;
    padding:0px 12px 0px 12px;
    border:1px solid #000;
  }

  @media screen and (max-width:1200px) {
    max-width:936px;
    height:682px;
    padding:0px 12px 0px 12px;
  }
 
`;

export const FooterContainerContent = styled.div`
   width:1296px;
   height:570px;
   margin:auto;
   
   margin-top:48px;
  
    @media screen and (max-width:1400px) {
      max-width:1116px;
      height:570px;
      border:1px solid red;
    }

    @media screen and (max-width:1200px) {
      max-width:936px;
      height:570px;
      margin-top:64px;
    }
`;

export const FooterContent = styled.div`
   width:1200px;
   height:424px;
  //  border:1px solid #000;
   margin-bottom:48px;
   padding:48px 48px 48px 48px;
   background:#fff;
   @media screen and (max-width:1400px) {
     max-width:1020px;height:474px;
     padding:48px 48px 48px 48px;
   }

   @media screen and (max-width:1200px) {
     max-width:840px;
     height:474px;
     padding:48px 48px 48px 48px;
     margin-bottom:48px;
   }
`;
export const FooterRow = styled.div`
   width:1200px;
   height:474px;
  //  border:1px solid #000;
   display:flex;

   @media screen and (max-width:1200px) {
     max-width:864px;
     height:474px;
     border:1px solid #000;
   }

`;

export const FooterCol1 = styled.div`
  width:612px;
  height:474px;
 
  padding:0px 0px 0px 0px;
  display:inline-block;
  margin-left:12px;

  @media screen and (max-width:1200px){
    max-width:408px;
    height:474px;
    padding:0px 12px 0px 12px;
    border:1px solid pink;
    background:red;
  }
  @media screen and (min-width: 768px) {
    flex: 0 auto;
    width:48%;
  }
`;

export const FooterTitle = styled.div`
  height:38px;
  margin-bottom:30px;
 
  font:bold 28px/30px arial;


  @media screen and (max-width:1200px) {
    border:1px solid #000;
    width:408px;
    height:38px;
  }
`;

export const Border = styled.div`
   
`

export const FooterForm = styled.div`
  width:588px;
  height:388px;
  // border:1px solid #000;
  margin-bottom:48px;

  @media screen and (max-width:1200px) {
    max-width:498px;
    height:388px;
    border:1px solid red;
  } 
`;

export const FooterFormRow = styled.form`
   width:612px;
   height:388px;

   @media screen and (max-width:1200px) {
     max-width:408px;
     height:388px;
     border:1px solid yellow;
     background:red;
   }
 
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

  @media screen and (max-width:1200px) {
    max-width:408px;
    height:41px;
    // padding:0px 12px 0px 12px;
  }
   `

export const FooterFormCol1 = styled.div`
    width:554px;
    height:131px;
    @media screen and (max-width:1200px) {
      width:408px;
      height:108px;
      border:1px solid yellow;
      // padding:0px 12px 0px 12px;
    }

    @media screen and (max-width:1200px) {
      max-width:408px;
      border:1px solid powederblue;
    }

    
   `

export const FooterFormText = styled.input`
   width:554px;
   height:100px;
   
   
   `;

export const FooterButtonForm = styled.div`
     width:588x;
     height:48px;
     padding:0px 12px 0px 12px;

     @media screen and (max-width:1200px) {
       margin-top:16px;
       position:relative;
       top:20px;
     }
   `

export const FooterFormButton = styled.button`
      width:172.08px;
      height:48px;
      background:#007aff;
      border:4px solid #e3edfc;
       margin:auto;
       position:relative;
       left:30%;
       border-radius:100px;
       outline:none;

       &:focus {
        border:3px solid #0d6efd;
       }
    `;

export const FooterLead = styled.div`
      width:588px;
      height:120px;
      margin-bottom:16px;
      font:16px/34px arial;

      @media screen and (max-width:1200px) {
        max-width:408px;
        height:190px;
        border:1px solid #000;
        font:bold 14px/28px arial;
      }
    `;

export const FooterIcon = styled.div`
      width:588px;
      height:96px;
      display:block;
     
      margin-top:30px;
    `;

export const FooterIconList = styled.div`
       width:588px;
       height:32px;
       
       display:flex;
       `;

export const FooterIconH1 = styled.div`
       font:14px/24px arial;
       margin-left:10px;
    `;

export const FooterSocial = styled.div`
       width:588px;
       height:88px;
   
       display:block;
       padding:24px 0px 24px 0px;
    ` ;

export const FooterSocialIcons = styled.div`
      width:588px;
      height:40px;
      
    `

export const FooterIconsList = styled.a`
       width:40px;
       height:40px;
       border:1px solid #000;
       border-radius:100%;
       float:left;
       margin-left:0px;
       margin-right:10px;
       border:3px solid blue;
    `