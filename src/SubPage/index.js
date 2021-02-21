 import React, { Component } from 'react';
import { 
    SubIntroTitle, 
    SubPageBackContainer, 
    SubPageBackContainerH1, 
    SubPageBackHeader, 
    SubPageBackTable, 
    SubPageContainer, 
    SubPageHeader, 
    SubPageLogo, 
    SubPageLogoLink, 
    SubPageNavbar, 
    SubPageNavList, 
    SubPageNavUl,
    SubPageOverflow, 
    SubPageWrapper, 
    SubVisual, 
    SubVIsualCol1, 
    SubVisualCol2, 
    SubVisualContainer, 
    SubVisualRow, 
    SubVisualSection, 
    BackgroundBg1,
    BackgroundBg2,
    BackgroundBg3,
    SubVisualColInfo,
    SubVisualColInfoH3,
    SubVisualUl,
    SubVisualList,
    SubVisualDescripition,
    SubVisualDescriptionH2,
    SubVisualDescriptionP,
    SubVisualFooter,
    SubVisualFooterContainer,
    SubVisualFooterCol,
    SubVisualBox,
    SubVisualP,
    SubVisualCreadits
} from './SubPageStyle';
import Slider from 'react-slick';
import './style/SlideShow.scss'
import SubHeader from './page/SubHeader';
 
 

export default class SubPage extends Component {
    render() {
        const settings = {
            dots:true,
            slidesToShow:1,
            slideToScroll: 1,
            autoPlay:true,
            speed:2000,
            arrows:false,
            autoplaySpeed:2000,
        }
  
   
    return (
        <>
        <SubPageWrapper>
           <SubPageOverflow>
            <SubHeader />
           <SubVisual>
            <SubVisualSection>
                <SubVisualContainer>
                    <SubVisualRow>
                        <SubVIsualCol1>
             <div className="Slider">
              <Slider {...settings}>
                  <div className="SliderForm">
                      <BackgroundBg1></BackgroundBg1>
                  </div>
                  <div className="SliderForm">
                      <BackgroundBg2></BackgroundBg2>
                  </div>
                  <div className="SliderForm">
                       <BackgroundBg3></BackgroundBg3>
                  </div>
              </Slider>
              </div>
              </SubVIsualCol1>
              <SubVisualCol2>
                  <SubVisualColInfo>
                    <SubVisualColInfoH3>
                        Project information
                    </SubVisualColInfoH3>
                    <SubVisualUl>
                        <SubVisualList>Category : <span>Front-End</span></SubVisualList>
                        <SubVisualList>Client : <span>React</span></SubVisualList>
                        <SubVisualList>Project date: <span>02 February</span></SubVisualList>
                        <SubVisualList>Project URL: <span>www.github.com</span></SubVisualList>
                    </SubVisualUl>
                  </SubVisualColInfo>
                  <SubVisualDescripition>
                      <SubVisualDescriptionH2>This is an example of portfolio <br/> detail</SubVisualDescriptionH2>
                      <SubVisualDescriptionP>
                       Autem ipsum nam porro corporis rerum. Quis eos 
                       <br />
                       dolorem eos itaque inventore commodi labore quia quia. 
                       <br />
                       Exercitationem repudiandae officiis neque suscipit non 
                       <br />
                       officia eaque itaque enim. Voluptatem officia 
                       <br />
                       accusantium nesciunt est omnis tempora consectetur 
                       <br />
                       dignissimos. Sequi nulla at esse enim cum deserunt eius.
              
                      </SubVisualDescriptionP>
                  </SubVisualDescripition>
              </SubVisualCol2>
              </SubVisualRow>
              </SubVisualContainer>
              </SubVisualSection>
           </SubVisual>
         <SubVisualFooter>
             <SubVisualFooterContainer>
                 <SubVisualFooterCol>
                   <SubVisualBox>
                     <SubVisualP>
                        @ Copyright DevFolio. All Rights Reserved
                     </SubVisualP>
                      <SubVisualCreadits>
                         Designed by BootstrapMade
                      </SubVisualCreadits>
                   </SubVisualBox>
                 </SubVisualFooterCol>
             </SubVisualFooterContainer>
         </SubVisualFooter>
         </SubPageOverflow>
       </SubPageWrapper>
       </>
     );
 }
}


 