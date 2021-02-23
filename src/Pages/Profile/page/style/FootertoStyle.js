import styled from 'styled-components';
// import {Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
// import { Link as LinkR } from 'react-router-dom';

export const FooterLink = styled(LinkS)`
 position:fixed;
 right:15px;
 bottom:15px;
 z-index:996;
 background: red;
 width:40px;
 height:40px;
 border:1px solid #000;
 border-radius:50px;
 transition:all 0.4s;

 &:hover {
     background:blue;
 }
`

 