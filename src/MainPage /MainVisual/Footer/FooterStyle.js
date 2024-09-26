import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div`
    width:100%;
    height:400px;
    text-decoration:none;
    border:1px solid #000;
    text-align:center;
    background:#000;
`
 
export const FooterLinkWrapper = styled.div`   
    width:100%;
    margin:auto;
    border:1px solid #000;
    background:#000;
`;


export const FooterH1 = styled(Link)`
    margin:10px auto;
    text-decoration:none;
    margin-lfet:100px;
    color:#fff;
    display:block;
`

export const FooterLinkItems = styled.div`
   display:inline-block;
   text-align:center;
   margin:40px;
`;

export const FooterLinkTitle = styled.div`
    text-decoration:none;
    color:#fff;
    margin-right:-100px;
    font:bold 18px/24px arial;
`;

export const FooterLink = styled(Link)`
    text-decoration:none;
    color:#fff;
    margin-top:20px;
    margin-left:100px;
    display:block;
    font:bold 16px/35px arial;
`;
export const FooterLink1 = styled.a`
    text-decoration:none;
    color:#fff;
    margin-top:20px;
    margin-left:100px;
    display:block;
    font:bold 16px/35px arial;
`;
 
 