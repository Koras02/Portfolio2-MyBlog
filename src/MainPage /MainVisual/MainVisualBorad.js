import styled from 'styled-components';


export const MainVisualWrapper = styled.div`
  width:100%;
  height:600px; 
  background:pink;
`;

export const MainVisualHeader = styled.div`
 width:100%;
 height:600px;
 border: 1px solid #000;
 background:pink;
 opacity:60%;
 color:#000;
 display:block;
`;

export const MainVisualH1 = styled.div`
  font:bold 18px/20px arial;
  text-align:center;
  position:relative;
  top:15%;
  right:20px;
  color:red;
`;


export const MainVisualP = styled.div`
  width:18%;
  height:280px;
  text-align:center;
  display:inline-flex;
  padding:20px;
  margin:120px 40px;
  background: powderblue;
  border:1px solid #000;

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