import styled from 'styled-components';
// import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

export const MainbarContainer = styled.aside`
background:#fff;
   position:fixed;
   z-index:1;
   width: 100%;
   height:100%;
   display:grid;
   align-items:center;
    top:0;
   left:0
  transition: 0.3s ease-in-out;;
  opacity: ${({ isOpen }) => (isOpen ? '0%' : '0%')};
  top: ${({ isOpen}) => (isOpen ? '-100%' : '0%')};
  z-index:1;
`;

 
export const CloseIcon = styled(FaTimes)`
  color:fff;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor:pointer;
outline:none;
color:red;
`;

export const MainVisualHeaderWrapper = styled.div`
width:100%;
height:42px;
background:${({scrollNav}) => (scrollNav ? '#000': '#000')};
opacity:${({scrollNav}) => (scrollNav ? '90%': '100%')};
position:${({scrollNav}) => (scrollNav ? 'fixed': 'fixed')};
top:${({scrollNav}) => (scrollNav ? '0%': '0%')};
transition:0.5s;
z-index:1;
padding:12px 0px 12px 0px;

 
`;

export const MainVisualHeader = styled.ul`
   max-width:1296px;
   height:44px;
   margin:0px auto;
   padding:0px 12px 0px 12px;

   @media screen and (max-width:1400px) {
      max-width:1140px;
      // border:1px solid red;
   }
   @media screen and (max-width:1200px) {
      max-width:960px;
      border:1px solid blue;
   }
   @media screen and (max-width:980px) {
      max-width:720px;
      border:1px solid blue;
   }
   @media screen and (max-width:480px) {
      grid-template-rows: repeat(6, 60px);
   }
`;

export const MainVisualHeaderH1 = styled.div`
   color:#fff;
   font-size: 1.5rem;
   font-weight:bold;
   line-height:1.5;
   margin-left:0px;
   float:left;
`

export const MainVisualHeaderP = styled(LinkS)`  
  display:flex;
  align-items:center;  
  justify-content:center;
  float:right;
  color:#fff;
  font-size:1.0rem;
  font-weight:bold;
  list-style:none;
//   transition: 0s ease-in-out;
  margin:2px 15px 0px 30px;
  line-height:30px;
  position:relative;
  left:22%;
  
  
  
  &.active {
   // color:red;
   border-bottom:2px solid #fff;
   // visibility: hidden;
   transition:all 0.3 ease;
  
   }

  &:hover {
     transition:5s;
  
  }

  &:before {
  }

  @media screen and (max-width:1400px) {
   margin:0px 40px 0px 0px;
   position:relative;
   font-size:1.0rem;
   left:20%;
}
@media screen and (max-width:1200px) {
   margin:0px 40px 0px 0px;
   position:relative;
   font-size:1.0rem;
   left:10%;
}

  @media screen and (max-width:984px) {
      display:none;
  }

`;


export const MainVisualHeaderP2 = styled(LinkS)`  
  display:flex;
  align-items:center;  
  justify-content:center;
  float:right;
  color:#fff;
  font-size:1.1rem;
  font-weight:bold;
  list-style:none;
//   transition: 0s ease-in-out;
  margin:0px 10px 0px 0px;
  position:relative;
  left:25%;
 


  &.active {
     color:red;
     border-bottom:2px solid #fff;
     position:relative;
     top:1px;
  }

  @media screen and (max-width:1400px) {
   margin:0px 40px 0px 0px;
   position:relative;
   font-size:1.0rem;
   left:20%;
}
@media screen and (max-width:1200px) {
   margin:0px 40px 0px 0px;
   position:relative;
   font-size:1.0rem;
   left:10%;
}

  @media screen and (max-width:984px) {
      display:none;
  }

`
 
 

export const MobileIcon = styled.div`
  
display:flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px;
@media screen and (max-width:768px){
  display:block;
}
  `;
  

export const MainBtn = styled.div`
   float:right;
   align-items:center;
   display:flex;
   position:relative;
   left:40%;


   @media screen and (min-width: 990px){
      display:none;
   }

`

export const MainVisualHeaderP1 = styled.div`
//   color:red;
`

export const MainVisualNavbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style:none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor:pointer;
&:hover{
  color:#01bf71;
  transition: 0.2 ease-in-out;
}`

  export const MainBtnLink = styled(LinkR)`
  border-radius: 50px;
  float:right;
  background: #fff;
  white-space: nowrap;
  padding:10px 20px;
  color: #010606;
  font-size:16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration:none; 
 
  `;

  export const MenuWrapper = styled.div`
  border:1px solid #fff;
  background:#fff;
  z-index:1;
 width:200px;
 height:225px;
 margin:auto;
 position:relative;
 left:550px;
 
  display: ${props => props.default ? 'none' : 'block'} 
   &:hover {
    display: ${props => props.default ? 'none' : 'none'} 
   }
    `

  export const MenuWrapperLink = styled(LinkR)`
     color:#000;
     float:left;
     text-decoration:none;
     padding:10px;
     font:bold 14px/20px arial;
     position:relative;
     left:10px;
     top:10px;
    
  `;

 