import styled from 'styled-components';

export const LanguageWrapper = styled.div`
  width:100%;
  height:700px;
  background:#000;
  overflow:hidden;
  border-top:1px solid #fff;
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
background:#fff;
margin:-30px;
margin-left:-480px;
margin-right:200px;
position:relative;
left:50%;
top:100px;
border:1px solid #fff;

 
@media screen and (min-width:960px) {
  marign-left:100px;
  margin-right:550px;
  border:1px solid yellow;
}
@media screen and (max-width:960px) {
  margin-left:-410px;
  margin-right:430px;
  border:1px solid green;
  max-height:200px;
}
@media screen and (max-width:860px) {
  margin-left:-350px;
  margin-right:390px;
  border:1px solid yellow;
  max-height:150px;
}
@media screen and (max-width:640px) {
  margin-left:-250px;
  margin-right:280px;
  border:1px solid pink;
  max-height:100px;
}
`