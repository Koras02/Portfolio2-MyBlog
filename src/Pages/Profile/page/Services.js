 import React from 'react';
import ServicesBox from './Form/Services/ServicesBox';
import { ServicesContainer, 
    ServicesH1, 
    ServicesP,
    ServicesRow,
    ServicesWrapper,
    Line
} from './style/ServicesStyle';

function Services() {
     return (
       <ServicesWrapper>
           <ServicesContainer>
               <ServicesRow>
                   <ServicesH1>SERVICES</ServicesH1>
                   <ServicesP>Lorem ipsum,dolor sitamet consectetur adpisicing elit.</ServicesP>
                   <Line></Line>
                   <ServicesBox />
               </ServicesRow>
           </ServicesContainer>
       </ServicesWrapper>
     );
 }


 export default Services;