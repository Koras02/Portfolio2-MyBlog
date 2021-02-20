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
    WorkFormRow2,
    WorkFormCol,
    WorkBox,
    WorkImg,
    WorkContent,
    WorkRow,
    WorkColoTitle,
    WorkColMore,
    WorkColMoreSpan,
    WorkColMoreDate,
    WorkCol,
    WorkFormIcon
} from './style/WorkStyle';
import './style/WorkBackground.scss'
import {GrAdd} from "react-icons/gr"

function WORK() {
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
               <WorkFormRow2>
                 <WorkFormCol>
                   <WorkBox>
                     <WorkImg className="Image1">
                     </WorkImg>
                     <WorkContent>
                     <WorkRow>
                    <WorkCol>
                     <WorkColoTitle>
                              Lorem impsum dolor
                    </WorkColoTitle>
                    <WorkColMore>
                       <WorkColMoreSpan>
                           Web Design 
                       </WorkColMoreSpan>
                       <WorkColMoreDate>
                           / 18 sep.2018
                       </WorkColMoreDate>
                    </WorkColMore> 
                    </WorkCol>    
                    <WorkFormIcon to="/Portfolio2-MyBlog/SubPage">
                      <GrAdd className="GrAdd" size="20px" />    
                    </WorkFormIcon> 
                     </WorkRow>
                     </WorkContent>
                   </WorkBox>
                 </WorkFormCol>
                 {/* Form number 1 end */}
                 {/* Form number 2 start */}
                 <WorkFormCol>
                   <WorkBox>
                     <WorkImg className="Image2">
                     </WorkImg>
                     <WorkContent>
                     <WorkRow>
                   <WorkCol>
                     <WorkColoTitle>
                           Loreda Cundo Nere
                    </WorkColoTitle>
                    <WorkColMore>
                       <WorkColMoreSpan>
                           Web Design 
                       </WorkColMoreSpan>
                       <WorkColMoreDate>
                           / 18 sep.2018
                       </WorkColMoreDate>
                    </WorkColMore> 
                    </WorkCol>  
                    <WorkFormIcon to="/Portfolio2-MyBlog/SubPage">
                      <GrAdd className="GrAdd" size="20px" />    
                    </WorkFormIcon>  
                     </WorkRow>
                     </WorkContent>
                   </WorkBox>
                 </WorkFormCol>
                 {/* Form number2 end &  Form number 3 start  */}
                 <WorkFormCol>
                 <WorkBox>
                     <WorkImg className="Image3">
                     </WorkImg>
                     <WorkContent>
                     <WorkRow>
                <WorkCol>
                     <WorkColoTitle>
                              Mavrito Lana Dere
                    </WorkColoTitle>
                    <WorkColMore>
                       <WorkColMoreSpan>
                           Web Design 
                       </WorkColMoreSpan>
                       <WorkColMoreDate>
                           / 18 sep.2018
                       </WorkColMoreDate>
                    </WorkColMore> 
                    </WorkCol>     
                    <WorkFormIcon>
                      <GrAdd className="GrAdd" size="20px" />    
                    </WorkFormIcon> 
                     </WorkRow>
                     </WorkContent>
                   </WorkBox>
                 </WorkFormCol>
               {/* Form number 3 end & number 4 start */}
                 <WorkFormCol>
                   <WorkBox>
                     <WorkImg className="Image4">
                     </WorkImg>
                     <WorkContent>
                     <WorkRow>
                    <WorkCol>
                     <WorkColoTitle>
                              Bindo Laro Cado
                    </WorkColoTitle>
                    <WorkColMore>
                       <WorkColMoreSpan>
                           Web Design 
                       </WorkColMoreSpan>
                       <WorkColMoreDate>
                           / 18 sep.2018
                       </WorkColMoreDate>
                    </WorkColMore> 
                    </WorkCol> 
                    <WorkFormIcon>
                      <GrAdd className="GrAdd" size="20px" />    
                    </WorkFormIcon>    
                     </WorkRow>
                     </WorkContent>
                   </WorkBox>
                 </WorkFormCol>
                 {/* Form number 4 end & number 5 start  */}
                 <WorkFormCol>
                   <WorkBox>
                     <WorkImg className="Image5">
                     </WorkImg>
                     <WorkContent>
                     <WorkRow>
                <WorkCol>
                     <WorkColoTitle>
                              Studio Lena Mado
                    </WorkColoTitle>
                    <WorkColMore>
                       <WorkColMoreSpan>
                           Web Design 
                       </WorkColMoreSpan>
                       <WorkColMoreDate>
                           / 18 sep.2018
                       </WorkColMoreDate>
                    </WorkColMore> 
                    </WorkCol>  
                    <WorkFormIcon>
                      <GrAdd className="GrAdd" size="20px" />    
                    </WorkFormIcon>    
                     </WorkRow>
                     </WorkContent>
                   </WorkBox>
                 </WorkFormCol>
                 {/* Form number 5 end 6 start */}
                 <WorkFormCol>
                 <WorkBox>
                     <WorkImg className="Image6">
                     </WorkImg>
                     <WorkContent>
                     <WorkRow>
                <WorkCol>
                     <WorkColoTitle>
                              Studio Big Bang
                    </WorkColoTitle>
                    <WorkColMore>
                       <WorkColMoreSpan>
                           Web Design 
                       </WorkColMoreSpan>
                       <WorkColMoreDate>
                           / 18 sep.2018
                       </WorkColMoreDate>
                    </WorkColMore> 
                    </WorkCol>     
                    <WorkFormIcon>
                      <GrAdd className="GrAdd" size="20px" />    
                    </WorkFormIcon> 
                     </WorkRow>
                     </WorkContent>
                   </WorkBox>
                 </WorkFormCol>
               </WorkFormRow2>
               {/* number 6 end  */}
           </WorkFormHeader>
       </WorkFormWrpaper>
     );
 }


 export default WORK;