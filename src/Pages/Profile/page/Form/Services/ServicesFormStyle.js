import styled from 'styled-components';

export const ServicesForm = styled.div`
   width:100%;
   height:805.56px;
   margin:40px auto; 
`;

export const ServicesWrapper = styled.div`
   max-width:1350px;
   height:805.56px;
   margin:auto;
`;

export const ServicesBox = styled.div`
   max-width:432px;
   height:350.78px;
   display:inline-block;
   padding:0px -12px 0px -12px;
   margin: 40px 3px 0px 3px;
   background:#fff;
   border-radius:10%;
`;


export const ImageForm = styled.div`
     border:1px solid #000;
     width:357.41px; 
     margin:auto;
     margin-bottom:16px;
     height:100px;
 
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
          background: ${props => (props.onClick ? 'red': 'powderblue')}
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