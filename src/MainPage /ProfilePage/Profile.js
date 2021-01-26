import React from 'react';
import {
    ProfileWrapper,
    ProfileWrapperH1,
    ProfileWrapperP,
    ProfileWrapper1,
    Img,
} from './PrfileStyle';

const homeObjeOne = ({
 Img1,
 Img2,
 Img3, 
 description,
 headLine
}) => {
     return (
        <ProfileWrapper id="Profile">
            <ProfileWrapperH1>{headLine}</ProfileWrapperH1>
            <ProfileWrapperP>{description}</ProfileWrapperP>
                <ProfileWrapper1 href="https://github.com/Koras02" target="_blank">
                <Img src={Img1}/>      
                </ProfileWrapper1>  
                <ProfileWrapper1 href="https://discord.com/channels/798765103105048657/798765103855173645" target="_blank">
                <Img src={Img2}/>      
                </ProfileWrapper1>  
                <ProfileWrapper1 href="https://blog.naver.com/wjdgh0727" target="_blank">
                <Img src={Img3}/>      
                </ProfileWrapper1>  
        </ProfileWrapper>
     );
 }

 


 export default homeObjeOne;