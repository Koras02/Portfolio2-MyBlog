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
         <br />
         <br />
         <AboutP>
         <p className="p1">
         Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
         <br /> 
         Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
         <br/>
         Praesent sapien massa, convallis a pellentesque nec, egestas non
         <br/> 
         nisi. Nulla porttitor accumsan tincidunt  .Mauris blandit aliquet
         </p> 
         <br /> 
         <p className="p1">
         elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget
         <br />
         felis porttitor volutpat. Vestibulum ac diam sit amet quam 
         <br />
         vehicula elementum sed sit amet dui. porttitor at sem.
         </p>
         <br/>
         <p className="p1">
         Nulla porttitor accumsan tincidunt. Quisque velit nisi, 
         <br /> 
         elementum id enim. Nulla porttitor accumsan tincidunt.
        <br/>
         Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
         </p>
         </AboutP>
       </AboutRightWrapper>
     );
 }


 export default AboutRight;