import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const MainDescriptionWrapper = styled.div`
  width:100%;
  height:800px;
  background:#000;
  overflow:hidden;
`;

export const MainDescriptionH1 = styled.div`
  font:bold 48px/35px arial;
  text-align:center;
  color:#fff;
  position:relative;
  top:30%;
  right:200px;
`;

export const MainDescriptionH2 = styled.div`
  font:bold 40px/45px arial;
  text-align:center;
  color:red;
  position:relative;
  top:25%;
  left:-10px;  
  overflow:hidden;
`

export const MainDescriptionP = styled.div`
  font:bold 24px/18px arial;
  color:#fff;
  text-align:center;
  position:relative;
  top:30%;
  right:200px;
  overflow:hidden;
`

export const MainVisualWrapper = styled.div`
  margin:auto;
  position:relative;
  top:35%;
  left:-250px;
  text-align:center;
  overflow:hidden;
 
`

export const MainVisualSNS = styled(LinkR)`
  border:1px solid #fff;
  display:inline-flex;
  padding:20px;
  background:#fff;
  margin:10px;
  position:relative;
  left:20px;
  border-radius:20%;
  text-decoration:none;
  color:blue;
  overflow:hidden;

  &:hover {
      background:#fc0;
      transition:2s;
  }
`