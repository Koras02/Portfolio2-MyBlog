import styled from 'styled-components';

export const ServicesForm = styled.div`
   width:100%;
   height:805.56px;
   margin:40px auto; 
`;

export const ServicesWrapper = styled.div`
   max-width:1320px;
   height:805.56px;
   margin:auto;
`;

export const ServicesBox = styled.div`
 
   width:380px;
   height:350.78px;
   display:inline-flex;
   padding:0px 12px 0px 12px;
   margin:20px 0px 20px 20px;
   background:#fff;
   border-radius:10%;
   
`;


export const ImageForm = styled.div`
    width:100px;
    height:100px;
    margin:20px auto;
    border:1px solid #000;
    border-radius:100%;
    padding:15px;
    background-color: ${({ onClick }) =>  onClick ? 'red': 'blue'}
      
    
    `
    
    export const Img = styled.div`
    width:100px;
    height:100px;

    border:1px solid #fff;
    border-radius:100%;
    display:block;

 
`;

export const ImageH1 = styled.div`
   float:left;
  font:bold 16px/18px arial;
`;

export const Description = styled.div`
   width:371.41px;
   height:142.78px;
   margin:30px -80px auto;
   position:relative;
   left:-50px;
   border:1px solid #000;
`