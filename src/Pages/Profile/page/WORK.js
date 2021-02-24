 import React from 'react';
 import {
     WorkFormContainer,
     WorkFormLine,
     WorkFormRow1,
     WorkFormRow1Col,
     WorkFormRow1TextBox,
     WorkFormRow1Title,
     WorkFormRowSubTitle,
    WorkFormWrpaper,
 
} from './style/WorkStyle';
import './style/WorkBackground.scss'
import WorkForm2 from './Form/WorkForm2';
 
 

export function WORK() {
     return (
       <WorkFormWrpaper id="Work">
            <WorkFormContainer>
               <WorkFormRow1>
                  <WorkFormRow1Col>
                    <WorkFormRow1TextBox>
                         <WorkFormRow1Title>
                             PORTFOLIO
                         </WorkFormRow1Title>
                         <WorkFormRowSubTitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</WorkFormRowSubTitle>
                         <WorkFormLine></WorkFormLine>
                    </WorkFormRow1TextBox>
                  </WorkFormRow1Col>
               </WorkFormRow1>
               <WorkForm2 />
            </WorkFormContainer>
       </WorkFormWrpaper>
     );
 }


 export default WORK;