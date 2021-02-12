 import React from 'react';
 import './Services/style/Counter.scss'
import { CounterBackground, CounterBox, CounterCol, CounterConatinerWrapper, CounterIcon, CounterNumb, CounterPosition, CounterRow } from './Services/style/CounterSectionStyle';

function CounterSection() {
     return (
         <CounterConatinerWrapper>
             <CounterBackground>
                 <CounterPosition>
                     <CounterRow>
                         <CounterCol>
                             <CounterBox>
                                 <CounterIcon></CounterIcon>
                                 <CounterNumb></CounterNumb>
                             </CounterBox>
                         </CounterCol>
                         <CounterCol>
                             <CounterBox>
                                 <CounterIcon></CounterIcon>
                                 <CounterNumb></CounterNumb>
                             </CounterBox>
                         </CounterCol>
                         <CounterCol>
                             <CounterBox>
                                 <CounterIcon></CounterIcon>
                                 <CounterNumb></CounterNumb>
                             </CounterBox>
                         </CounterCol>
                         <CounterCol>
                             <CounterBox>
                                 <CounterIcon></CounterIcon>
                                 <CounterNumb></CounterNumb>
                             </CounterBox>
                         </CounterCol>
                     </CounterRow>
                 </CounterPosition>
             </CounterBackground>
         </CounterConatinerWrapper>
     );
 }


 export default CounterSection;