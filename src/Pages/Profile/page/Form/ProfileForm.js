 import React, {Component} from 'react';
import { 
  ProfileContainer,
  ProfileFormWrapper,
  ProflieOverflow,
  ProfileForm1,
  ProfileForm2
  // ProfileSwipper1,
  // ProfileSwipper2
} from '../style/ProfileStyle';
import './Slide.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProfileForm extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
     return (
       <ProfileFormWrapper>
           <ProflieOverflow>
              <ProfileContainer>
                <div>
                <Slider {...settings}>
                  <ProfileForm1>
                    <ProfileForm2>1</ProfileForm2>
                  </ProfileForm1>
                  <ProfileForm1>
                  <ProfileForm2>2</ProfileForm2>
                  </ProfileForm1>
                  <ProfileForm1>
                  <ProfileForm2>3</ProfileForm2>
                  </ProfileForm1>       
                </Slider>
              </div>
            
              </ProfileContainer>
           </ProflieOverflow>
       </ProfileFormWrapper>
     );
 }
}

 