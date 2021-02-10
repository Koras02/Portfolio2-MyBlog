 import React from 'react';
import { 
  AboutWrapper,
  AboutContainer,
  AboutCollpase,
  Box,
  AboutRow,
 
} from './style/AboutStyle';
import './style/About.scss'
import AboutLeft from './Form/AboutLeft';
import AboutRight from './Form/AboutRight';
 
 

export function About() {
     return (
       <AboutWrapper id="About">
         <AboutContainer>
           <AboutCollpase>
               <Box>
                 <AboutRow>
                   <AboutLeft />
                   <AboutRight />
                 </AboutRow>
               </Box>
           </AboutCollpase>
         </AboutContainer>
       </AboutWrapper>
     );
 }


 export default About;