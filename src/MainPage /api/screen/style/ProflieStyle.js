import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const ProfileFormWrapper = styled.div`
   width:100%;
   oveflow:hidden;
   height:1000px;
   margin-top:${({scrollNav}) => (scrollNav ? '-200px': '300px')};
    overflow:hidden;
   background:#000;
   position:relative;
   bottom:${({scrollNav}) => (scrollNav ? '-100px': '0px')};
`;
export const ProfileWrapper = styled.div`
  width:100%;
  height:100px;
  margin:0px;
  position:relative;
  bottom:${({scrollNav}) => (scrollNav ? '10px': '200px')};
  `;
  
  
  export const ProfileHeader = styled.div`
  width:100%;
  height:100px;
  border:1px solid #fff;
  position:fixed;
  background: ${({scrollNav}) => (scrollNav ? 'blue': '#000' )};
  top:${({scrollNav}) => (scrollNav ? '-100px': '0px')};
  transition:1s;
  display:block;
  z-index:1;
  overflow:hidden;
`;

export const ProfileHeaderH1 = styled(LinkR)`
  float:left;
  margin-top:24px;
  margin-left:100px;
  font:bold 20px/24px arial;
  color:#fff;
  text-decoration:none;
  display:inline-flex;
  overflow:hidden;
`;


export const ProfileHeaderP = styled(LinkS)`
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
  overflow:hidden;
  cursor:pointer;
  

  &:hover {
      transition:2s;
      background-color:#fff;
      color:#000;
  }

  &.active {
     border-bottom:10px solid red;
     background:#fff;
     color:#000;
     transition:2s;
  }

  &:nth-child(6) {
    background:red;
  }



  @media screen and (max-width:1400px) {
     margin:10px 60px 0px 40px;
  }

  @media screen and (max-width:1200px) {
    margin: 10px 40px 0px 10px;
  }

  @media screen and (max-width:1024px) {
    margin 10px 20px 0px 5px;
  }

  @medai screen and (min-width:960px) {
    margin 5px 10px 0px 0px;
  }
`;


export const ProfileFormLeft = styled.div`
   margin:40px auto;
   border:1px solid #000;  
  //  overflow:hidden;

   @media screen and (max-width:1400px) {
     margin-left:80px;
   }

   @media screen and (max-width:1200px) {
    margin-left:400px;
    width:600px;
  }

  @media screen and (max-width:1100px) {
    margin-left:340px;
  }
`;

export const ProfileFormImg = styled.img`
   width:100%;
   height:250px;
   border:1px solid #fff;
   overflow:hidden;
`

export const ProfileFormH1 = styled.div`
   font:bold 28px/34px arial;
   color:#fff;
   margin-left:-600px;
   margin-bottom:20px;
   position:relative;
   left:50%;
   overflow:hidden;
`;

export const ProfileForm = styled.div`
   padding:50px 50px 200px;
   float:left;
   border:1px solid #fff;
   margin-left:-700px;
   overflow:hidden;
   position:relative;
   left:50%;
  


   @media screen and (max-width:1400px) {
    padding: 50px 60px 200px;
    margin-left:-600px;
  }

 
`;

export const ProfileFormP = styled.div`
font:bold 20px/28px arial;
color:#fff;
margin-top:20px;
overflow:hidden;
`;


export const ProfileFormRight = styled.div`
   width:1000px;
   height:800px;
   float:right;
   margin-right:-800px;
   margin-top:700px;
   position:relative;
   right:50%;
   border:1px solid #fff;
   bottom:75%;
   overflow:hidden;

   @media screen and (max-width:1600px) {
     margin:700px -700px 0px 20px;
   }

   @media screen and (max-width:1400px) {
     margin-right:-580px;
     width:760px;
   }
   @media screen and (max-width:1200px) {
    margin-right:-520px;
    width:600px;
  }
  @media screen and (max-width:1024px) {
    margin-right:-450px;
    width:500px;
  }
  @media screen and (max-width:960px) {
    margin-right:-450px;
    width:480px;
  }

`

export const ProfileFormRightH1 = styled.div`
  color:#fff;
  padding:20px;
  font:bold 18px/28px arial;
  border-bottom:1px solid #fff;
  overflow:hidden;

  
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
  overflow:hidden;

  @media screen and (max-width:1400px) {
    grid-template-columns: auto 0px 40px 10px auto;
    margin-left:50px;
    padding:0px 20px 50px 10px;
    margin-right:40px;
  }
  @media screen and (max-width:1200px) {
    grid-template-columns: auto 0px 70px 40px auto;
    margin-left:50px;
    padding:0px 70px 30px 0px;
    margin-right:40px;
  }
`

export const ProfileFormRightPRight = styled.div`
  display:grid;
  grid-template-columns: auto 0px 30px 25px auto;
  grid-gap:1px;
  padding:0px 10px 80px 0px;
  float:left;
  margin-left:90px;
  margin-top:100px;
  margin-bottom:-100px;
  color:#fff;
  font:bold 18px/24px arial;
  overflow:hidden;


  
  &:nth-child(8) {
    margin-left:60px;
    margin-right:130px;
  }
  &:nth-child(6) {
    margin-left:50px;
    margin-right:130px;
  }
  
  &:nth-child(6) {
    margin-left:40px;
    margin-right:70px;
  }


  @media screen and (max-width: 1400px) {
    grid-template-columns: auto 40px 10px -10px -15px auto;
    color:#fff;
    padding:20px 10px -10px 0px;
    margin-left:-20px;
    margin-top:140px;
    margin-bottom:-140px;
    float:left;
    color:red;
    font:bold 18px/20px arial;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto 20px 10px -10px -15px auto;
    color:#fff;
    padding:10px 0px -0px 0px;
    margin-left:50px;
    margin-top:90px;
    margin-bottom:-30px;
    float:left;
    color:#fff;
    font:bold 18px/20px arial;
  }

  @media screen and (max-width:960px) {
    grid-template-columns: auto 20px 10px -10px -15px auto;
    color:#fff;
    padding:10px 0px -0px 0px;
    margin-left:50px;
    margin-top:90px;
    margin-bottom:-30px;
    float:left;
    color:#fff;
    font:bold 18px/20px arial;
  }
  `