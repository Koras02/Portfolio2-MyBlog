import styled from 'styled-components';
 

export const InfoContainer = styled.div`
   color:red;
   overflow:hidden;
   background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

   @media screen and (max-width: 768px) {
       padding:100px 0;
   }
`;

export const InfoWrapper = styled.div`
  display:block;
  z-index: 1;
  height:700px;
  width:100%;
  max-width:1100px;
  margin-right:auto;
  margin-left:auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display:grid;
  grid-auto-columns: minix(auto, 1fr);
  align-items:center;
  gird-template-aras: ${({ imgStart }) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col1' 'col2'` : `'col2 col2'`   
     }
`;

export const Column1 = styled.div`
  margin-bottom:15px;
  padding:0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2
`;

export const Column3 =  styled.div`
  margin-bottom:16px;
  grid-area: col3;
`;


export const Heading = styled.h1`
  margin-bottom:18px;
  font-size: 18px;
  line-height: 1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#000' : '#010606')};
`

export const ProfileWrap = styled.div`
   width:80%;
   display:inline-flex;
   float:left;
`;

export const TopLine = styled.p`
  color:green;
  font-size: 18px;
  line-height:50px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom:40px;
`;

export const Img1 = styled.img`
  width:200px;
  float:left;
  display:inline-block;
  margin-left:20%;
  margin-top:20%;
  padding-left:20%;

  &:hover {
     opacity: 80%;
     transition: 4s;
  }
`;

export const Img2 = styled.img`
  width:280px;
  float:left;
  display:inline-block;
  margin-left:20%;
  margin-top:20%;
  padding-left:20%;

  &:hover {
     opacity: 80%;
     transition: 4s;
  }
`;


export const Img3 = styled.img`
  width:280px;
  float:left;
  display:inline-block;
  margin-left:20%;
  margin-top:20%;
  padding-left:20%;

  &:hover {
     opacity: 80%;
     transition: 4s;
  }
`;



export const ImageLink = styled.a`
    width:300px;
    margin-left:20px;
    padding:-20px;
    margin-top:40px;
 

    &:hover {
      opacity: 80%;
      transition: 4s;
    }
`