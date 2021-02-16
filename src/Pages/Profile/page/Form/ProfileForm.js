 import React, {Component} from 'react';
import { 
  ProfileContainer,
  ProfileFormWrapper,
  ProflieOverflow,
  ProfileForm1,
  ProfileForm2,
  ProfileForm3,
  ProfileFormTab,
  ProfileImg1,
  ProfileImg2,
  ProfileImg3,
  // ProfileSwipper1,
  // ProfileSwipper2
} from '../style/ProfileStyle';
import './Slide.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";

export default class ProfileForm extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay:true,
      pauseOnHover: true,
      autoplaySpeed: 1000,
      arrows:false,
      appendDots: dots => (
        <div>
             <ul className="slide">{dots}</ul>
        </div>
      )
    };
     return (
       <ProfileFormWrapper>
           <ProflieOverflow>
              <ProfileContainer>
                <div>
                <Slider {...settings}>
                  <ProfileForm1>
                    <ProfileForm2>
                       <ProfileForm3>
                         <ProfileFormTab>
                            <ProfileImg1>
                            </ProfileImg1>
                            <div className="form">
                      <h1>XAVI ALONSO</h1>
                      <h1 className="description">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        <br/>consectetur adipiscing elit.
                      </h1>
                      </div>
                         </ProfileFormTab>
                       </ProfileForm3>
                    </ProfileForm2>
                  </ProfileForm1>
                  <ProfileForm1>
                  <ProfileForm2>
                      <ProfileForm3>
                      <ProfileFormTab>
                      <ProfileImg2>
                      </ProfileImg2>
                      <div className="form">
                      <h1>XAVI ALONSO</h1>
                      <h1 className="description">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        <br/>consectetur adipiscing elit.
                      </h1>
                      </div>
                      </ProfileFormTab>
                      </ProfileForm3>
                  </ProfileForm2>
                  </ProfileForm1>
                  <ProfileForm1>
                  <ProfileForm2>
                  <ProfileForm3>
                      <ProfileFormTab>
                      <ProfileImg3>
                        </ProfileImg3>
                        <div className="form">
                      <h1>XAVI ALONSO</h1>
                      <h1 className="description">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        <br/>consectetur adipiscing elit.
                      </h1>
                      </div>
                      </ProfileFormTab>
                      </ProfileForm3>
                  </ProfileForm2>
                  </ProfileForm1>       
                </Slider>
              </div>
              </ProfileContainer>
           </ProflieOverflow>
       </ProfileFormWrapper>
     );
 }
}

 