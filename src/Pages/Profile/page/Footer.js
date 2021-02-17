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
  FooterButtonForm,
  FooterFormButton,
  FooterLead,
  FooterIcon,
  FooterIconList,
  FooterIconH1,
  FooterSocial,
  FooterSocialIcons,
  FooterIconsList
} from './style/FooterStyle';
import './style/Footer.scss';
import { SiGooglemaps } from 'react-icons/si';
import { ImFacebook2, ImInstagram, ImMail2, ImPhone, ImSpotify, ImTwitter  } from 'react-icons/im';

function Footer() {
     return (
       <FooterWrapper id="footer">
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
                                     <FooterFormCol type="text" placeholder="Your PhoneNumber" className="Footer" required/>
                                     <FooterFormCol1>
                                       <textarea className="textarea" placeholder="message" required />
                                     </FooterFormCol1>
                                     <FooterButtonForm>
                                     <FooterFormButton type="submit">
                                           Send Message
                                     </FooterFormButton>
                                     </FooterButtonForm>
                                   </FooterFormRow>
                                </FooterForm>  
                              </FooterCol1>                  
                              <FooterCol1>
                                <FooterTitle>
                                    Get in Touch
                                </FooterTitle>
                                <FooterForm>
                                  <FooterLead>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis 
                                  <br/> 
                                  dolorum dolorem soluta quidem expedita aperiam aliquid at.
                                  <br />
                                  Totam magni ipsum suscipit amet? Autem nemo esse laboriosam 
                                  <br />
                                  ratione nobis mollitia inventore?
                                  </FooterLead>
                                  <FooterIcon>
                                    <FooterIconList>
                                      <SiGooglemaps  color="blue" size="20px"/>
                                      <FooterIconH1>329 WASHINGTON ST BOSTON,MA 02108</FooterIconH1>
                                    </FooterIconList>
                                    <FooterIconList>
                                      <ImPhone  color="blue" size="20px" />
                                    <FooterIconH1>(617) 557-0089</FooterIconH1>
                                    </FooterIconList>
                                    <FooterIconList>
                                      <ImMail2 color="blue" size="20px" />
                                    <FooterIconH1>wjdgh0727@gmail.com</FooterIconH1>
                                    </FooterIconList>
                                  </FooterIcon>
                                  <FooterSocial>
                                     <FooterSocialIcons>
                                       <FooterIconsList href="https://www.facebook.com/profile.php?id=100024369640083">
                                            <ImFacebook2 size="20px" className="FaceBook" color="blue"/>
                                       </FooterIconsList>
                                       <FooterIconsList href="https://www.facebook.com/profile.php?id=100024369640083">
                                            <ImInstagram size="20px" className="FaceBook" color="red"/>
                                       </FooterIconsList>
                                       <FooterIconsList href="https://www.facebook.com/profile.php?id=100024369640083">
                                            <ImTwitter size="20px" className="FaceBook" color="blue"/>
                                       </FooterIconsList>
                                       <FooterIconsList href="https://www.facebook.com/profile.php?id=100024369640083">
                                            <ImSpotify size="20px" className="FaceBook" color="green" />
                                       </FooterIconsList>
                                     </FooterSocialIcons>
                                  </FooterSocial>
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