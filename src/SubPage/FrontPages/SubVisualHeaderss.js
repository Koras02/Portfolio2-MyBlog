import React from 'react';
import { SubVisualHeadersContainer,
   SubVisualHeadersLogo,
    SubVisualHeadersLogoLink, 
    SubVisualHeadersNav, 
    SubVisualHeadersNavList,
     SubVisualHeadersNavListLink, 
     SubVisualHeadersNavListLink1, 
     SubVisualHeadersNavUserList, 
     SubVisualHeadersWrapper
     } from './Styles/SubPagStyle';
import {AiOutlineDown} from 'react-icons/ai'
import './Styles/SubVisualHeaderss.scss'
 
 function SubVisualHeaderss() {
      return (
         <SubVisualHeadersWrapper>
           <SubVisualHeadersContainer>
              <SubVisualHeadersLogo>
                 <SubVisualHeadersLogoLink to="">Portfolio</SubVisualHeadersLogoLink>
             </SubVisualHeadersLogo> 
             <SubVisualHeadersNav>
                <SubVisualHeadersNavUserList>
                  <SubVisualHeadersNavList>
                    <SubVisualHeadersNavListLink to="/">HOME</SubVisualHeadersNavListLink>
                  </SubVisualHeadersNavList>
                  <SubVisualHeadersNavList>
                  <SubVisualHeadersNavListLink to="/">ABOUT</SubVisualHeadersNavListLink>
                  </SubVisualHeadersNavList>
                  <SubVisualHeadersNavList>
                  <SubVisualHeadersNavListLink to="/">SERVICES</SubVisualHeadersNavListLink>
                  </SubVisualHeadersNavList>
                  <SubVisualHeadersNavList>
                  <SubVisualHeadersNavListLink to="/">WORK</SubVisualHeadersNavListLink>
                  </SubVisualHeadersNavList>
                  <SubVisualHeadersNavList>
                  <SubVisualHeadersNavListLink to="/">BLOG</SubVisualHeadersNavListLink>
                  </SubVisualHeadersNavList>
                  <SubVisualHeadersNavList>
                  <SubVisualHeadersNavListLink to="/">
                    DROPDOWN <AiOutlineDown  className="DropDown" size="10px" />
                  </SubVisualHeadersNavListLink>
                  </SubVisualHeadersNavList>
                  <SubVisualHeadersNavList>
                  <SubVisualHeadersNavListLink1 to="/">CONTACT</SubVisualHeadersNavListLink1>
                  </SubVisualHeadersNavList>
                </SubVisualHeadersNavUserList>
             </SubVisualHeadersNav>
           </SubVisualHeadersContainer>  
         </SubVisualHeadersWrapper>
      
         
      );
  }
 
 
  export default SubVisualHeaderss;