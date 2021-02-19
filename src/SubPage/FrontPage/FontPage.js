import React, { Component } from 'react';
// import { SubPageWrapper } from './SubPageStyle';
import '../style/SubPage.scss';
import { Col1, Col2, MainVisualCol, MainVisualCol2, MainVisualContainer, MainVisualMain, MainVisualRow, MainVisualSection, SubpageContainer,SubPageLink,SubPageLogo,SubPageLogoLink,SubPageNavLink,SubPageNavList,SubPageNavUl,SubPageWrapper, SubVisualSingleImage} from '../SubPageStyle';
import Slider from "react-slick";

 export default class FronPage extends Component {
    render() {
       var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:'css',
        appendDots: dots => <li className="dots">
          <ul className="ul">
          {dots}
          </ul>
          </li>
       }
     return (
        <> 
        {/* FrontPage부분 */}
          <SubPageWrapper id="header"  class="fixed-top">
            <SubpageContainer>
               <SubPageLogo>
                 <SubPageLogoLink>My BLOG</SubPageLogoLink>
                 <SubPageNavLink>
                    <SubPageNavUl>
                        <SubPageNavList>
                          <SubPageLink to="">Home</SubPageLink>
                       </SubPageNavList>    
                        <SubPageNavList>
                        <SubPageLink to="">ABOUT</SubPageLink>
                       </SubPageNavList>    
                        <SubPageNavList>
                        <SubPageLink to="">SERVICES</SubPageLink>
                       </SubPageNavList>    
                        <SubPageNavList>
                        <SubPageLink to="">WORK</SubPageLink>
                       </SubPageNavList>    
                        <SubPageNavList>
                        <SubPageLink to="">BLOG</SubPageLink>
                       </SubPageNavList>    
                        <SubPageNavList>
                        <SubPageLink to="">DROPDOWN</SubPageLink>
                       </SubPageNavList>    
                        <SubPageNavList>
                        <SubPageLink to="">CONTACT</SubPageLink>
                       </SubPageNavList>    
                    </SubPageNavUl>
                 </SubPageNavLink>
               </SubPageLogo>
            </SubpageContainer>
          </SubPageWrapper>
          <SubVisualSingleImage>
          </SubVisualSingleImage>
          <MainVisualMain>
            <MainVisualSection>
               <MainVisualContainer>
                 <MainVisualRow>
                    <MainVisualCol>
                      <div className="sss">
                        <Slider {...settings}>
                          <Col1>1</Col1>
                          <Col2 className="col">2</Col2>
                        </Slider>
                      </div>
                    </MainVisualCol>
                    <MainVisualCol2>
                      2
                    </MainVisualCol2>
                 </MainVisualRow>
               </MainVisualContainer>
            </MainVisualSection>
          </MainVisualMain>
        </>
      );
   }
 }