import React from 'react';
import { homeObjSevent } from './Data/About';
import ProfileBody from './Profile/ProfileBody';
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
        </ProfileWrapper>
     );
 }


 export default homeObjSix;