import React from 'react';
import {
  ProfileFutureWrapper,
  ProfileFutures,
  ProfileFutureH1,
  Img,
  ImgWrap,
  Description
} from './ProfileFutureStyle'

export const homeObjEight = ({
   img1,
   img2,
   description,
   description2
}) => {
     return (
       <ProfileFutureWrapper id="future">
         <ProfileFutures>
             <ProfileFutureH1>
                 Future
             </ProfileFutureH1>
            <Description>{description}</Description>
            <Description>{description2}</Description>
            <ImgWrap>
                <Img src={img1} />
                <Img src={img2} />
            </ImgWrap>
         </ProfileFutures>
       </ProfileFutureWrapper>
     );
 }


 export default homeObjEight;