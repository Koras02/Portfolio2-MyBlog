import React from 'react';
import {
  ProfileStoryWrapper
  ,ProfileStoryHeader,
  ProfileStoryHeaderH1,
  ProfileStoryHeaderP,
  Img1,
  Img2
} from '../style/ProfileStroyStyle';


export const homeObjSevent = ({
   img,
   img2
}) => {
     return (
        <ProfileStoryWrapper id="story">
          <ProfileStoryHeader>
            <ProfileStoryHeaderH1>Story</ProfileStoryHeaderH1>
            <ProfileStoryHeaderP>2020.6 ~ 10 End Default Language</ProfileStoryHeaderP>
            <ProfileStoryHeaderP>2020.10 ~ 01 End React Study</ProfileStoryHeaderP>
            <ProfileStoryHeaderP>2020.01 ~ Make React Portfolio</ProfileStoryHeaderP>
            <Img1
            src={img}/> 
            <Img2
            src={img2} /> 
           </ProfileStoryHeader>
        </ProfileStoryWrapper>
     );
 }


 export default homeObjSevent;