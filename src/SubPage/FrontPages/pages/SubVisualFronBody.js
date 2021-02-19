import React, { Component } from 'react';
import { 
  SubVisualBodyWrapper,
  SubVisualBodyContainer, 
  SubVisualBodyRow,
  SubVisualBodyCol,
  Form2,
  Img,
  Img2,
  } from '../Styles/SubVisualBodyStyle';
  import Slider from 'react-slick';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.scss";
  import '../Styles/SubVisualFronBody.scss'
 



export default class SubVisualFronBody extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay:true,
      pauseOnHover: true,
      autoplaySpeed: 3000,
      arrows:false,
      outline: false,
    //   className:"slick-dots",
      
      appendDots: dots => (
        <div>
          <ul className="slide4">{dots}</ul>
        </div>
      )
  };
     return (
       <SubVisualBodyWrapper>
           <SubVisualBodyContainer>
            <SubVisualBodyRow>
                <SubVisualBodyCol>
                   <Slider {...settings}>
                    <div>
                      <Form2>
                         <Img></Img>
                      </Form2>
                    </div>
                    <div>
                      <Form2>
                        <Img2></Img2>
                      </Form2>
                      </div>
                   </Slider>
                <div className="sub-right">
                  <div className="sub-right-info">
                    <h1 className="subVisualH1">Project information</h1>
                    <h1 className="subVisualP1">Category: <span>Web design</span></h1>
                    <h1 className="subVisualP1">Client: <span>ASU Company</span></h1>
                    <h1 className="subVisualP1">Project date: <span>01 March, 2020</span></h1>
                    <h1 className="subVisualP1">Project URL: <span>www.example.com</span></h1> 
                  </div>
                  <div className="right-description">
                    <div className="sub-right-infomation">
                      <h1 className="subVisualH2">This is an example of portfolio</h1>
                      <h1 className="subVisualH2">detail</h1>
                      <p className="subVisualP2">
                      Autem ipsum num porro corporis rerum. Quis eos
                      <br />
                      dolorem eos itaque inventore commodi labore quia quia. 
                      <br />
                       Execrictationem repudiandae officiis neque suscipit non
                      <br />
                      officia eaque itaque enim. Voluptatem officia
                      <br />
                      accusantium nesciunt est omnis tempora consectetur
                      <br />
                      dignissimos. Sequi nulla at esse enim cum deserunt eius
                      </p>
                    </div>
                  </div>
                </div>
                </SubVisualBodyCol>
            </SubVisualBodyRow>
           </SubVisualBodyContainer>
       </SubVisualBodyWrapper>
     );
 }
}

 