import styled from 'styled-components';

export const ServicesForm = styled.div`
   max-width:1884px;
   height:805.56px;
   margin:80px auto; 
   // border:1px solid red;

   @media screen and (max-width:1400px) {
       width:1140px;
       height:805.56px;
       border:1px solid blue;
   }

   @media screen and (max-width:1200px) {
      width:960px;
      height:853.56px;
      border:1px solid yellow;
   }

   @media screen and (max-width:1000px) {
      width:720px;
      height:1049.560px;
      border:1px solid #000;
   }
   

`;

export const ServicesCol = styled.div`
width:400px;
height:402.78px;
border:1px solid #fff;
display:inline-flex;
margin:0px 2px 0px 8px;
padding:0px 12px 0px 2px;

@media screen and (max-width:1400px) {
   width:356px;
   height:402.781px;
   padding:0px 9px 0px 2px;
   border:1px solid red;
}
@media screen and (max-width:1200px) {
   width:300px;
   height:426.78px;
   padding:0px 0px 0px 2px;
   border:1px solid blue;
}

@media screen and (max-width:1000px) {
   width:200px;
   height:524.781px;
   padding:0px 12px 0px 12px;
})
 
`
export const ServicesBox = styled.div`
   max-width:416px;
   height:354.78px;
   display:inline-block;
   // padding:40px 20px 40px 20px;
   margin-bottom:42px;
   background:#fff;
   border-radius:10%;
 
   @media screen and (max-width:1400px) {
      max-width:356px;
      height:354.78px;
      margin-bottom:42px;
   }
   
   @media screen and (max-width:1200px) {
      max-width:295.98px;
      height:378.78px;
      border:1px solid pink;
   }
   
   @media screen and (max-width:1000px) {
      max-width:174px;
      height:370.781px;
      // border:1px solid red;
      padding:40px 20px 40px 20px;
      margin-bottom:48px;
      position:relative;
      left:-20px;
   }
`;


export const ImageForm = styled.div`
     width:356.41px; 
     margin:20px auto;
     margin-bottom:16px;
     height:100px;
   //   border:1px solid #000;

     @media screen and (max-width:1200px ){
        max-width:254.39px;
        height:100px;
        margin-bottom:16px;
     }

     @media screen and (max-width:1000px) {
        max-width:174.406px;
        height:100px;
        margin-bottom:16px;
   
     }
  
    `

export const Img = styled.div`

     
`;

export const ImageH1 = styled.div` 

 
`;

export const Description = styled.div`
display:block;   
margin-top:20px;
margin-bottom:20px;
font:bold 14px/16px arial;;
// bordeR:1px solid #000;
@media screen and (max-width:1000px) {
   width:174.406px;
   height:238.781px;
   font:bold 12px/14px arial;
}
 
`

export const Icon = styled.div`
  width:100px;
  height:100px;
  margin:0px auto;
  border:10px solid #007aff;
//   background:blue;
  border-radius:100%;
  opacity:100%;
  position:relative;
  left:-2px;
  bottom:1px;
//   background: ${props => (props.onClick ? 'red' : 'blue')}
  &:hover{ 
   //   background: ${props => (props.onClick ? 'red' : 'blue')}
    background:blue;
    border:10px solid  #cde1f8;
    transition:1s;
    box-shadow:
  }
  

`;

