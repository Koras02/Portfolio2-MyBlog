 import React from 'react';
 import {
    WorkFormWrpaper,
    WorkFormHeader,
    WorkFormRow,
    WorkFormTitle,
    WorkFormRowCol,
    WorkFormH1,
    WorkFormP,
    WorkFormLine
} from './style/WorkStyle'

function WORK() {
     return (
       <WorkFormWrpaper>
           <WorkFormHeader>
               <WorkFormRow>
                 <WorkFormTitle>
                  <WorkFormRowCol>
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
           </WorkFormHeader>
       </WorkFormWrpaper>
     );
 }


 export default WORK;