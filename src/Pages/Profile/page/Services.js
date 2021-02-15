 import React from 'react';
import ServicesForm from './Form/Services/ServicesForm';
import { ServicesContainer, 
    ServicesH1, 
    ServicesP,
    ServicesRow,
    ServicesWrapper,
    Line
} from './style/ServicesStyle';

function Services() {
     return (
       <ServicesWrapper id="Services">
           <ServicesContainer>
               <ServicesRow>
                   <ServicesH1>SERVICES</ServicesH1>
                   <ServicesP>Lorem ipsum,dolor sitamet consectetur adpisicing elit.</ServicesP>
                   <Line></Line>
                   <ServicesForm/>
               </ServicesRow>
           </ServicesContainer>
       </ServicesWrapper>
     );
 }


 export default Services;