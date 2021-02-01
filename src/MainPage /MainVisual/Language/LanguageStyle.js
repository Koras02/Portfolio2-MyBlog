import styled from 'styled-components';

export const LanguageWrapper = styled.div`
  width:100%;
  height:600px;
  background:#000;
  overflow:hidden;
 


  @media screen and (max-width:760px) {
    max-height:400px;
  }
`;

export const LanguageHeaderH1 = styled.div`
  text-align:center;
  font:bold 18px/24px arial;
  color:#fff;
  margin:20px auto;
  overflow:hidden;
`;

export const LanguageHeaderP = styled.div`
  text-align:center;
  color:#fff;
  font:bold 16px/18px arial;
  overflow:hidden;
`


export const LanguageHeaderForm = styled.a`
margin:auto;
position:relative;
left:20px;
top:0px;
oveflow:hidden;
display:block;
 
`;

export const Img = styled.img`
display:inline-flex;
overflow:hidden;
max-height:220px;
float:left;
background:#000;
margin:-30px;
margin-left:-480px;
margin-right:200px;
position:relative;
left:50%;
top:100px;
 

 
@media screen and (min-width:960px) {
  marign-left:100px;
  margin-right:500px;
 
}
@media screen and (max-width:960px) {
  margin-left:-410px;
  margin-right:430px;
 
  max-height:200px;
}
@media screen and (max-width:860px) {
  margin-left:-320px;
  margin-right:340px;
 
  max-height:150px;
}
@media screen and (max-width:640px) {
  margin-left:-210px;
  margin-right:220px;
 
  max-height:100px;
}

@media screen and (max-width:480px) {
  margin-left:-150px;
  margin-right:160px;
 
  max-height:60px;
}
`