 import React from 'react';
 import 
 { 
     MainDescriptionWrapper, 
     MainDescriptionH1,
     MainDescriptionP,
     MainDescriptionH2,
     MainVisualSNS,
     MainVisualWrapper
} from './MaindesStyle';
import { ImFacebook,ImInstagram,ImTwitter } from "react-icons/im";

function MainDes() {
     return (
        <MainDescriptionWrapper>
            <MainDescriptionH1>Hello Im</MainDescriptionH1>
            <MainDescriptionH2>Jung Ho</MainDescriptionH2>
            <MainDescriptionP>FrontEnd Developer</MainDescriptionP>
            <MainVisualWrapper>
            <MainVisualSNS>
               <ImInstagram />
            </MainVisualSNS>
            <MainVisualSNS>
               <ImTwitter />
            </MainVisualSNS>
            <MainVisualSNS>
                <ImFacebook/>
            </MainVisualSNS>
            </MainVisualWrapper>
        </MainDescriptionWrapper>
     );
 }


 export default MainDes;