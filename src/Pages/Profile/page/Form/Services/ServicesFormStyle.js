import styled from 'styled-components';

export const ServicesForm = styled.div`
   max-width:1884px;
   height:805.56px;
   margin:40px auto; 

   @media screen and (max-width:1400px) {
      max-width:1400px;
      height:1027.56px;
   }

   @media screen and (max-width:1200px) {
      max-width:1200px;
      height:1075.56px;
   }

   @media screen and (max-width:990px) {
      max-width:990px;
      height:1271.56px;
    
   }
`;

export const ServicesWrapper = styled.div`
   max-width:1320px;
   height:805.56px;
   margin:auto;
 
   @media screen and (max-width:1400px) {
      max-width:1140px;
      height:979.56px;
   }
   @media screen and (max-width:1200px) {
      max-width:960px;
      height:1027.56px;
   }
   @media screen and (max-width:990px) {
      max-width:720px;
      height:1049.56px;
    
   }
`;

export const ServicesBox = styled.div`
   max-width:416px;
   height:350.78px;
   display:inline-block;
   padding:0px -12px 0px -12px;
   margin: 40px 0px 0px 20px;
   background:#fff;
   border-radius:10%;

   @media screen and (max-width:1400px) {
      max-width:356px;
      height:354.78px;
   }

   @media screen and (max-width:1200px) {
      max-width:295.38px;
      height:378.78px;
      padding:40px -20px 40px -20px;
      margin:20px 0px 40px 20px;
   }

   @media screen and (max-width:990px) {
      max-width:174.400px;
      height:370.78px;
      padding:40px 20px 40px 20px;
      margin:0px 10px 40px 10px;
   }
   
`;


export const ImageForm = styled.div`
     border:1px solid #000;
     width:357.41px; 
     margin:auto;
     margin-bottom:16px;
     height:100px;
     @media screen and (max-width:1200px) {
      max-width:254.39px;
      height:100px;
   }

   @media screen and (max-width:990px) {
      max-width:174.41px;
      height:100px;
   }
    `
    
    export const Img = styled.div`
       border:1px solid #000;
       width:100px;
       height:100px;
       margin:auto;
       border-radius:100%;
       background:${props => (props.onClick ? 'blue': 'blue')};
       
       &:hover {
          opacity:${props => (props.onClick ? '100%': '100%')};
          transition:0.5s;
          background: ${props => (props.onClick ? 'red': '#e6f7ff')}
       }

     
`;

export const ImageH1 = styled.div` 

 
`;

export const Description = styled.div`
display:block;   
border:1px solid #000;
`

export const Icon = styled.div`
  width:50px;
  height:50px;
  margin:10px auto;
  padding:15px;
  background:#fff;
  border-radius:100%;
  opacity:100%;
  &:hover{ 
  background: ${props => (props.onClick ? 'red': 'blue')}
  }

`;

export const Ico = styled.image`
   width:40px;
   height:40px;
   position:relative;
   left:-45px;
   top:0px;padding:50px;
`