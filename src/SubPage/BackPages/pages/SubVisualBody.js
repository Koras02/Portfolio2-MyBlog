import React, { Component } from 'react';
import { 
  SubVisualBodyWrapper,
  SubVisualBodyContainer, 
  SubVisualBodyRow,
  SubVisualBodyCol,
  } from '../style/SubVisualBodyStyle';
  import Slider from 'react-slick';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.scss";
  import '../style/SubVisualBody.scss'



export default class SubVisualBody extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay:true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      arrows:false,
      
      appendDots: dots => (
        <div>
          <ul className="slide3">{dots}</ul>
        </div>
      )
  };
     return (
       <SubVisualBodyWrapper>
           <SubVisualBodyContainer>
            <SubVisualBodyRow>
                <SubVisualBodyCol>
                  <div>
                   <Slider {...settings}>
                    <div className="form2">
                      1
                    </div>
                    <div className="form2">
                      2
                    </div>
                   </Slider>
                  </div>
                </SubVisualBodyCol>
            </SubVisualBodyRow>
           </SubVisualBodyContainer>
           
       </SubVisualBodyWrapper>
     
     );
 }
}

 