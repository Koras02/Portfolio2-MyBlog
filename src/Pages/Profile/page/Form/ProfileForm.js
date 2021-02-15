 import React from 'react';
import { 
  ProfileContainer,
  ProfileFormWrapper,
  ProflieOverflow,
  ProfileSwipper,
  ProfileSwipper1,
  // ProfileSwipper2
} from '../style/ProfileStyle';
import './Slide.scss';

export function ProfileForm() {
     return (
       <ProfileFormWrapper>
           <ProflieOverflow>
              <ProfileContainer>
                  <ProfileSwipper className="slide">
                      <ProfileSwipper1 className="slide">
                           1번
                      </ProfileSwipper1>
                      <ProfileSwipper1>
                           2번
                      </ProfileSwipper1>
                  </ProfileSwipper>
              </ProfileContainer>
           </ProflieOverflow>
       </ProfileFormWrapper>
     );
 }


 export default ProfileForm;