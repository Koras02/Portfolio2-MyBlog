 import React from 'react';
import { Fa500Px, FaAd, FaAddressBook, FaCheck } from 'react-icons/fa';
import './Services/style/CounterSection.scss'
import { 
    CounterBackground,
    CounterConatinerWrapper,
    CounterBg,
    CounterOverflow,
    CounterPosition,
    CounterIcon,
    CounterBox,
    IcoBox,
    CheckBox,
    CheckBoxH1,
    CounterNumber,
    CheckBoxP
   } from './Services/style/CounterSectionStyle';
 
function CounterSection() {
     return (
        <CounterConatinerWrapper>
        <CounterBackground>
           <CounterBg>
               <CounterOverflow>
                 <CounterPosition>
                  {/* 첫번재 */}
                  <CounterIcon>
                    <CounterBox>
                  <IcoBox>
                   <CheckBox>
                      <CheckBox>
                     <FaCheck className="FaCheck"/>
                      </CheckBox>
                  </CheckBox>
                  </IcoBox>
                   <CounterNumber>
                     <CheckBoxH1>
                         450
                     </CheckBoxH1>
                     <CheckBoxP>
                        WORKS COMPLETED
                     </CheckBoxP>
                   </CounterNumber>
                    </CounterBox>
                  </CounterIcon>
               {/* 두번째 */}
                  <CounterIcon>
                  <CounterBox>
                  <IcoBox>
                   <CheckBox>
                     <FaAd className="FaCheck" />
                  </CheckBox>
                  </IcoBox>
                  <CounterNumber>
                     <CheckBoxH1>
                        25
                     </CheckBoxH1>
                     <CheckBoxP>
                       YEARS OF EXPERIENCE
                     </CheckBoxP>
                   </CounterNumber>
                  </CounterBox>                      
                  </CounterIcon>
                  {/* 세번째 */}
                  <CounterIcon>
                  <CounterBox>
                  <IcoBox>
                   <CheckBox>
                     <Fa500Px className="FaCheck" />
                  </CheckBox>
                  </IcoBox>  
                  <CounterNumber>
                     <CheckBoxH1>
                        550
                     </CheckBoxH1>
                     <CheckBoxP>
                       TOTAL CLIENTS
                     </CheckBoxP>
                   </CounterNumber> 
                  </CounterBox>      
                  </CounterIcon>
               {/* 네번째 */}
                  <CounterIcon>
                  <CounterBox>
                  <IcoBox>
                   <CheckBox>
                     <FaAddressBook className="FaCheck" />
                  </CheckBox>
                  </IcoBox>  
                  <CounterNumber>
                     <CheckBoxH1>
                         450
                     </CheckBoxH1>
                     <CheckBoxP>
                        AWARD WON
                     </CheckBoxP>
                   </CounterNumber>                 
                  </CounterBox>        
                  </CounterIcon>             
                 </CounterPosition>
               </CounterOverflow>
           </CounterBg>
        </CounterBackground>
        </CounterConatinerWrapper>
     );
 }


 export default CounterSection;