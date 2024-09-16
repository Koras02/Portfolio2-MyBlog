import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ProfileWrapper = styled.div`
  width:100%;
  height:100vh;
  background:##000;
`;


export const ProfileHeader = styled.div`
  height:100px;
  border:1px solid #fff;
  display:block;
`;

export const ProfileHeaderH1 = styled(Link)`
  float:left;
  margin-top:24px;
  margin-left:100px;
  font:bold 20px/24px arial;
  color:#fff;
  text-decoration:none;
  display:inline-flex;
`;


export const ProfileHeaderP = styled.div`
  float:right;
  font:bold 18px/18px arial;
  color:#fff;
  display:inline;
  margin-right:110px;
  border-left:1px solid #fff;
  border-right:1px solid #fff;
  padding-top:30px;
  padding-bottom:50px;
  padding-left:20px;
  padding-right:20px;
  margin-top:-0px;  

  &:hover {
      transition:2s;
      background-color:#fff;
      color:#000;
  }
`;

export const ProfileFormWrapper = styled.div`
   width:100%;
   oveflow:hidden;
   height:1000px;
   border:1px solid #fff;
   background:#000;
`;

export const ProfileFormLeft = styled.div`
   margin:40px auto;
   border:1px solid #000;
`;

export const ProfileFormImg = styled.img`
   width:100%;
   height:250px;
   border:1px solid #fff;
`

export const ProfileFormH1 = styled.div`
   font:bold 28px/34px arial;
   color:#fff;
   margin-left:200px;
   margin-bottom:20px;
`;

export const ProfileForm = styled.div`
   padding:50px 50px 200px;
   float:left;
   border:1px solid #fff;
   margin-left:180px;
`;

export const ProfileFormP = styled.div`
font:bold 20px/28px arial;
color:#fff;
margin-top:20px;
`;


export const ProfileFormRight = styled.div`
   width:1000px;
   height:800px;
   float:right;
   margin-right:90px;
   margin-top:-90px;
   border:1px solid #fff;
`

export const ProfileFormRightH1 = styled.div`
  color:#fff;
  padding:20px;
  font:bold 18px/28px arial;
  border-bottom:1px solid #fff;
`;

export const ProfileFormRightPLeft = styled.div`
  display:grid;
  grid-template-columns: auto 0px 130px 0px auto;
  grid-gap:1px;
  padding:0px 110px 90px 0px;
  float:left;
  margin-left:50px;
  margin-top:100px;
  margin-bottom:-100px;
  color:#fff;
  font:bold 18px/24px arial;
`

export const ProfileFormRightPRight = styled.div`
  display:grid;
  grid-template-columns: auto 0px 30px 25px auto;
  grid-gap:1px;
  padding:0px 10px 90px 0px;
  float:left;
  margin-left:0px;
  margin-top:100px;
  margin-bottom:-100px;
  color:#fff;
  font:bold 18px/24px arial;

  &:nth-child(8) {
      margin-left:50px;
      margin-right:225px;
  }
  &:nth-child(6) {
    margin-left:50px;
    margin-right:160px;
}
`