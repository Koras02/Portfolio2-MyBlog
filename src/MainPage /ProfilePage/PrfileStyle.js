import styled from 'styled-components';
 

export const ProfileWrapper = styled.div`
    width:100%;
    height:600px;
    background:#000;
    border-top:0.5px solid #fcfcfc;

    overflow:hidden;

    @media screen and (max-width:760px) {
       
    }
`;

export const ProfileWrapperH1 = styled.div`
    color:#fff;
    text-align:center;
    margin-top:60px;
    font:bold 28px/34px arial;
`;

export const ProfileWrapperP = styled.div`
  text-align:center;
  color:#fff;
  font:bold 18px/40px arial;
`

export const ProfileWrapper1 = styled.a`
  margin:auto;
  position:relative;
  left:20px;
  top:20px;
  oveflow:hidden;
  display:block;
`

export const Img = styled.img`
display:inline-flex;
max-height:200px;
float:left;
background:#fff;
margin:-30px;
margin-left:-450px;
margin-right:540px;
position:relative;
left:50%;
top:100px;

@media screen and (max-width:960px) {
  max-height:180px;
  margin-left:-360px;
  margin-right:400px;
}

@media screen and (max-width:760px) {
  max-height:160px;
  margin-left:-300px;
  margin-right:320px;
}
`
 

export const ImgLink = styled.a`
  margin:0px;
  padding:0px;
  position:relative;
  left:50%;
  color:#fff;
`