import styled from 'styled-components';
import Image from './icon/Naver'

export const FooterWrap = styled.div`
  width:97.7%;
  margin: auto;
  height:220px;
  position:relative;
  padding-left:2px;
  float:left;
  padding:20px;
  border-top:1px solid #000;   
  overflow-x:hidden;
  overflow:hidden;

`;

 
export const FooterHeaderH1 = styled.div`
  float:left;
  padding-top:2%;
  padding-left:18%;
  font:bold 18px/24px arial;
`;

export const FooterIconWrapper = styled.div`
   width:30%;
   float:right;
`
export const FooterHeaderP = styled.div`
   float:left;
   position:sticky;
   display:block;
   top:30px;
`;


export const FooterIconBox = styled.div`
  float:right;
  display:inline-flex;
  padding:100px 0px 20px 50px;
  margin:-40px -250px 90px 100px;

}
`;

export const FooterIcon = styled.div`
float:right;
margin:20px;
padding:10px;

@media screen and (max-width:1400px) {
  position:relative;
  right:60%;
  botttom:10%;

}
@media screen and (max-width:1024px) {
   position:relative;
   right:60%;
   botttom:10%;
`;

export const FooterH1 = styled.a`
  font:bold 18px/90px arial;
  margin:2px;
  padding:1px;
  padding-right:10px;
  margin-left:12px;
  color:#000;
  text-decoration:none;
 
  }
`;

export const FaFacebook = styled.div`
  padding:20px;
  margin-left:10px;
`

export const FaNaver = styled.a`
  width:60px;
  height:40px;
  background:green;
  display:inline-flex;
  padding-right:40px;
  padding-top:50px;
  padding-bottom:-100px;
  margin-right:-60px;
  margin-left:-60px;
  border-radius:100%;

  &:hover {
    transition:4s;
    img:${Image}
  }
`

export const FaNaverH1 = styled.a`
  color:red;
  padding:10px;
  margin:-60px 20px;
  text-align:center;
  display:inline-block;
`