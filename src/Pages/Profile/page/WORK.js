 import React from 'react';
 import {
    WorkFormWrpaper,
    WorkFormHeader,
    WorkFormRow,
    WorkFormTitle,
    WorkFormRowCol,
    WorkFormH1,
    WorkFormP,
    WorkFormLine,
 
} from './style/WorkStyle';
import './style/WorkBackground.scss'
import WorkForm2 from './Form/WorkForm2';
 
 

export function WORK() {
     return (
       <WorkFormWrpaper id="Work">
           <WorkFormHeader>
               <WorkFormRow>
                 <WorkFormTitle>
                  <WorkFormRowCol >
                  <WorkFormH1>
                      PORTFOLIO
                   </WorkFormH1>
                  <WorkFormP>
                      Lorem ipsum, dolor sit amet consectetur adipiisicing elit.
                  </WorkFormP>
                  <WorkFormLine>
                  </WorkFormLine>
                 </WorkFormRowCol>
                </WorkFormTitle>
               </WorkFormRow>
                {/* Form numver 1 */}
               <WorkForm2 />
               {/* number 6 end  */}
           </WorkFormHeader>
       </WorkFormWrpaper>
     );
 }


 export default WORK;