 import React from 'react';
 import 
 { 
     MainDescriptionWrapper, 
     MainDescriptionH1,
     MainDescriptionP,
     MainDescriptionH2,
     MainVisualSNS,
     MainVisualWrapper,
     MainBtnWrap
} from './MaindesStyle';
import { Button } from './ButtonElement'
import { ImFacebook,ImInstagram,ImTwitter } from "react-icons/im";

const homeObjFive = ({ 
   topLine,
   headLine,
   description,
   buttonLable
}) => {
     return (
        <MainDescriptionWrapper>
            <MainDescriptionH1>{topLine}</MainDescriptionH1>
            <MainDescriptionH2>{headLine}</MainDescriptionH2>
            <MainDescriptionP>{description}</MainDescriptionP>
            <MainVisualWrapper>
            <MainVisualSNS to="/s">
               <ImInstagram />
            </MainVisualSNS>
            <MainVisualSNS>
               <ImTwitter />
            </MainVisualSNS>
            <MainVisualSNS>
                <ImFacebook/>
            </MainVisualSNS>
            </MainVisualWrapper>
            <MainBtnWrap>
                <Button to="home"
                >{buttonLable}Go Home</Button>
            </MainBtnWrap>
        </MainDescriptionWrapper>
     );
 }


 export default homeObjFive;