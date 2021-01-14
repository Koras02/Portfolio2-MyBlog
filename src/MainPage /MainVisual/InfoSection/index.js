import React from 'react';
import {InfoContainer,
  InfoWrapper,
  InfoRow,
  TopLine,
  Heading,ProfileWrap,
  Img1,
  Img2,
  Img3,
  ImageLink
} from './DataStyle'

const InfoSection = ({ 
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headeLine,
    img,
    img2,
    img3,
    img4,
    size,
    alt,
})=> {
     return (
         <>
           <InfoContainer lightBg={lightBg} id="Profile">
             <InfoWrapper>
                <InfoRow imgStart={imgStart} />
                 <TopLine>{topLine}</TopLine>
                 <Heading lightText={lightText}>{headeLine}</Heading>
                 <ProfileWrap>
                   <ImageLink href="https://www.naver.com">
                     <Img1
                     target="_blank" aria-label="react"
                     src={img4} 
                     onMouseOver={img2} 
                     alt={alt}
                     size={size}
                     />
                  </ImageLink>
                  <ImageLink href="https://ko.reactjs.org/">
                     <Img2
                     src={img2} 
                     alt={alt}
                     />
                 </ImageLink>
                 <ImageLink href="https://ko.reactjs.org/">
                     <Img3
                     aria-label="react-js"
                     traget="_blank"
                     src={img3} 
                     alt={alt}
                     /> 
                   </ImageLink>  
                 </ProfileWrap>
             </InfoWrapper>
           </InfoContainer>
         </>
     );
 }


 export default InfoSection;