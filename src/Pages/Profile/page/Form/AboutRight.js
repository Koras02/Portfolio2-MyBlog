 import React from 'react';
 import '../style/AboutRight.scss'
import { AboutH1, AboutP, AboutRightWrapper, Bottom } from '../style/AboutRight';

function AboutRight() {
     return (
       <AboutRightWrapper>
         <AboutH1>
             About Me
           <Bottom>
           </Bottom>
         </AboutH1>
         <AboutP>
         <p>
         Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
         Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
         Praesent sapien massa, convallis a pellentesque nec, egestas non 
         nisi. Nulla porttitor accumsan tincidunt
         </p> 
         <br /> 
         <p>
        .Mauris blandit aliquet 
         elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget
         felis porttitor volutpat. Vestibulum ac diam sit amet quam 
         vehicula elementum sed sit amet dui. porttitor at sem.
         </p>
         <br/>
         <p>
         Nulla porttitor accumsan tincidunt. Quisque velit nisi, 
         pretium ut lacinia in, 
         elementum id enim. Nulla porttitor accumsan tincidunt.
         Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
         </p>
         </AboutP>
       </AboutRightWrapper>
     );
 }


 export default AboutRight;