import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const MainDescriptionWrapper = styled.div`
  width:100%;
  height:600px;
  display:block;
  background:#000;
`;

export const MainDescriptionH1 = styled.div`
  font:bold 48px/35px arial;
  text-align:center;
  color:#fff;
  position:relative;
  top:20%;
  right:200px;
`;

export const MainDescriptionH2 = styled.div`
  font:bold 40px/32px arial;
  text-align:center;
  color:red;
  position:relative;
  top:15%;
  left:-10px;
`

export const MainDescriptionP = styled.div`
  font:bold 24px/18px arial;
  color:#fff;
  text-align:center;
  position:relative;
  top:25%;
  right:200px;
`

export const MainVisualWrapper = styled.div`
  margin:auto;
  position:relative;
  top:30%;
  left:-250px;
  text-align:center;
 
`

export const MainVisualSNS = styled(LinkR)`
  border:1px solid #fff;
  display:inline-flex;
  padding:20px;
  background:#fff;
  margin:10px;
  position:relative;
  left:40px;
  border-radius:20%;
  text-decoration:none;
  color:blue;

  &:hover {
      background:#fc0;
      transition:2s;
  }
`