 import React from 'react';
 import '../style/AboutRight.scss'
import { AboutH1, AboutP, AboutP1, AboutPLead, AboutRightWrapper, Bottom } from '../style/AboutRight';

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
           <AboutPLead>
           <AboutP1>
           Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </AboutP1>
            <AboutP1>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </AboutP1>
            <AboutP1>
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            </AboutP1>
            <AboutP1>
            nisi. Nulla porttitor accumsan tincidunt.
            </AboutP1>
            </AboutPLead>
            <AboutPLead>
           <AboutP1>
           Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
            </AboutP1>
            <AboutP1>
            suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit
            </AboutP1>
            <AboutP1>
            amet quam vehicula elementum sed sit amet dui. porttitor at sem.
            </AboutP1>
            </AboutPLead>
            <AboutPLead>
           <AboutP1>
           Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
            </AboutP1>
            <AboutP1>
            lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
            </AboutP1>
            <AboutP1>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </AboutP1>
 
            </AboutPLead>
         </AboutP>
         
       </AboutRightWrapper>
     );
 }


 export default AboutRight;