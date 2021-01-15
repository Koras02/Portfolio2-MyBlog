import styled from 'styled-components';


export const MainVisualWrapper = styled.div`
  width:100%;
  height:600px; 
  background:pink;
  display:block;
`;


export const MainVisualH1 = styled.div`
  font:bold 18px/20px arial;
  text-align:center;
  position:relative;
  top:15%;
  right:100px;
  color:red;
`;

 

export const MainVisualP1 = styled.div`
  width:20%; 
  height:50%;
  text-align:center;
  margin:170px 40px; 
  float:left;
  overflow:hidden;
  border:1px solid #000;
  float:left;
  opacity:100%;
  background:gray;

  &:hover {
    opacity: 50%;
    transition: 5s;
  }

  &:visited {
    border:10px solid #000;
  }

  @media screen and (max-width: 1900px) {
     width:10%;
     margin-top:10%;
     padding-left:30%;
     height:100px;
     padding:60px;
     background:red;
  }

  @media screen and (max-width: 1300px) {
    width:8%;
    margin-top:18%;
    padding-left:30%;
    height:100px;
    padding:60px;
    background:yellow;
  }

  @media screen and (max-width: 1200px) {
    width:6%;
    margin-top:20%;
    padding-left:10%;
    height:100px;
    padding:60px;
    background:blue;
  }

  @media screen and (max-width: 1080px) {
    width:4%;
    margin-top:20%;
    padding-left:10%;
    height:100px;
    padding:60px;
    background:blue;
  }
`;

 


