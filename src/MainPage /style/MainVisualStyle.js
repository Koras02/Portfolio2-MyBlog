import styled from 'styled-components';
// import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

export const MainbarContainer = styled.aside`
   background:#000;
   position:fixed;
   z-index:999;
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
  height:84px;
  background:${({scrollNav}) => (scrollNav ? '#000': '#000')};
  opacity:${({scrollNav}) => (scrollNav ? '80%': '100%')};
  position:${({scrollNav}) => (scrollNav ? 'fixed': 'fixed')};
  top:${({scrollNav}) => (scrollNav ? '0%': '0%')};
  transition:0.5s;
  z-index:1;
`;

export const MainVisualHeader = styled.ul`
   max-width:1300px;
   height:44px;
   margin:0px auto;
   padding:20px 0px 10px 20px;

   @media screen and (max-width:1400px) {
      max-width:1200px;
   }
   @media screen and (max-width:1200px) {
      max-width:1000px;
   }
   @media screen and (max-width:910px) {
      max-width:800px;
      
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
   margin-left:10px;
   float:left;
`

export const MainVisualHeaderP = styled(LinkS)`  
  display:flex;
  align-items:center;  
  justify-content:center;
  float:right;
  color:#fff;
  font-size:1.2rem;
  font-weight:bold;
  list-style:none;
//   transition: 0s ease-in-out;
  margin:0px 20px 0px 20px;
  line-height:40px;
 


  &.active {
     color:red;
     line-height:30px;
     border-bottom:1px solid #fff;
  }

  @media screen and (max-width:984px) {
      display:none;
  }

  @media screen and (max-width:900px) {
   grid-template-rows: repeat(6, 60px);
 
  }
`

 
 

export const MobileIcon = styled.div`
  
display:flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px;
@media screen and (max-width:768px){
  display:none;
}
  `;
  

export const MainBtn = styled.div`
   float:right;
   align-items:center;
   display:flex;
   position:relative;
   left:20%;


   @media screen and (min-width: 960px){
      display:none;
   }

`

export const MainVisualHeaderP1 = styled.div`
  color:red;
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
 
  `