import React from 'react';
import { homeObjEight, homeObjSevent } from './Data/About';
import ProfileBody from './Profile/ProfileBody';
import ProfileFuture from './Profile/ProfileFuture';
import Profileheader from './Profile/Profileheader';
import ProfileStory from './Profile/ProfileStory';
import {
  ProfileWrapper,
} from './style/ProflieStyle';


export function homeObjSix() {
     return (
        <ProfileWrapper>
          <Profileheader />
          <ProfileBody />
          <ProfileStory {...homeObjSevent}/>
          <ProfileFuture {...homeObjEight}/>
        </ProfileWrapper>
     );
 }


 export default homeObjSix;