import React from 'react';
import {
    ProfileFormWrapper,
    ProfileFormLeft,
    ProfileFormH1,
    ProfileForm,
    ProfileFormImg,
    ProfileFormP,
    ProfileFormRight,
    ProfileFormRightH1,
    ProfileFormRightPLeft,
    ProfileFormRightPRight
} from '../style/ProflieStyle';

export function ProfileBody() {
     return (
        <ProfileFormWrapper id="Profile">
        <ProfileFormLeft> 
        <ProfileFormH1>About</ProfileFormH1>
        <ProfileForm>
          <ProfileFormImg></ProfileFormImg>
          <ProfileFormP>Name: Kim Jung Ho</ProfileFormP>
          <ProfileFormP>Age:23years</ProfileFormP>
          <ProfileFormP>Location: Goyang,Korea</ProfileFormP>
          <ProfileFormP>EXPERIENCE: 1 years</ProfileFormP>
          <ProfileFormP>Language: React</ProfileFormP>
          <ProfileFormP>JavaScript...</ProfileFormP>
        </ProfileForm>
        </ProfileFormLeft>
        <ProfileFormRight>
          <ProfileFormRightH1>About</ProfileFormRightH1>
          <ProfileFormRightPLeft>FullName: KIM JUNG HO</ProfileFormRightPLeft>
          <ProfileFormRightPLeft>AGE: 23years</ProfileFormRightPLeft>
          <ProfileFormRightPLeft>LOCATION: South Korea</ProfileFormRightPLeft>
          <ProfileFormRightPLeft>EXPRINCE: 1years</ProfileFormRightPLeft>
          <ProfileFormRightPRight>CARREAR LEAVEL: Junior Level</ProfileFormRightPRight>
          <ProfileFormRightPRight>FullName: KIM JUNG HO</ProfileFormRightPRight>
          <ProfileFormRightPRight>FullName: KIM JUNG HO</ProfileFormRightPRight>
          <ProfileFormRightPRight>FullName: KIM JUNG HO</ProfileFormRightPRight>
        </ProfileFormRight>
      </ProfileFormWrapper>
     );
 }


 export default ProfileBody;