 import React from 'react';
import { 
  FooterOverflow, 
  FooterWrapper,
  FooterContainer,
  FooterContainerRow,
  FooterContainerRowCol,
  FooterContainerContent,
  FooterContent,
  FooterRow,
  FooterCol1,
  FooterTitle,
  FooterForm,
  FooterFormRow,
  FooterFormCol,
  FooterFormCol1,
   
} from './style/FooterStyle';
import './style/Footer.scss';

function Footer() {
     return (
       <FooterWrapper>
         <FooterOverflow>
           <FooterContainer>
              <FooterContainerRow>
                  <FooterContainerRowCol>
                     <FooterContainerContent>
                         <FooterContent>
                             <FooterRow>
                              <FooterCol1>
                                <FooterTitle>
                                    Send Message Us
                                </FooterTitle>
                                <FooterForm>
                                   <FooterFormRow>
                                     <FooterFormCol type="text" placeholder="Your name" className="Footer" required />
                                     <FooterFormCol type="text" placeholder="Your email" className="Footer" required />
                                     <FooterFormCol type="text" placeholder="Your PhoneNumber" className="Footer" required />
                                     <FooterFormCol1>
                                       <textarea className="textarea" placeholder="message"/>
                                     </FooterFormCol1>
                                   </FooterFormRow>
                                </FooterForm>  
                              </FooterCol1>                  
                              <FooterCol1>
                              <FooterTitle>
                              Get in Touch
                              </FooterTitle>
                              <FooterForm>

                              </FooterForm>
                              </FooterCol1>
                             </FooterRow>
                         </FooterContent>
                     </FooterContainerContent>
                  </FooterContainerRowCol>
              </FooterContainerRow>
           </FooterContainer>
         </FooterOverflow>
       </FooterWrapper>
     );
 }


 export default Footer;