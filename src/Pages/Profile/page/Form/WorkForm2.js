 import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { WorkForm2Col, WorkForm2Wrapper, WorkFormBox, WorkFormContent, WorkFormIconWrapper, WorkFormImage2, WorkFormImageLink, WorkFormImg, WorkFormLink, WorkFormRowLeft, WorkFormRowLeftCategory, WorkFormRowLeftTitle, WorkFormRowRight,  } from '../style/WorkFormDownStyle';
import { WorkFormRow } from '../style/WorkStyle';
import './scss/work.scss'

function WorkForm2() {
     return (
        <WorkForm2Wrapper>
            {/* 1번 */}
          <WorkForm2Col>
             <WorkFormBox>
               <WorkFormImageLink>
               <WorkFormImg>
                  <WorkFormImage2>

                  </WorkFormImage2>
               </WorkFormImg>
               </WorkFormImageLink>
               <WorkFormContent>
                  <WorkFormRow>
                       <WorkFormRowLeft>
                          <WorkFormRowLeftTitle>Lorem impsum dolor</WorkFormRowLeftTitle>
                          <WorkFormRowLeftCategory>Web Design <span>/ 18 Sep. 2018</span></WorkFormRowLeftCategory>
                       </WorkFormRowLeft>
                       <WorkFormRowRight>
                           <WorkFormIconWrapper>
                             <WorkFormLink to="/">
                                  <FaPlus size="30px" className="FaPlus"/>
                             </WorkFormLink>
                           </WorkFormIconWrapper>
                       </WorkFormRowRight>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
          {/* 2번  */}
          <WorkForm2Col>
          <WorkFormBox>
               <WorkFormImageLink>
               <WorkFormImg>
                  <WorkFormImage2>

                  </WorkFormImage2>
               </WorkFormImg>
               </WorkFormImageLink>
               <WorkFormContent>
                  <WorkFormRow>
                       <WorkFormRowLeft>
                       <WorkFormRowLeftTitle>Lorem impsum dolor</WorkFormRowLeftTitle>
                          <WorkFormRowLeftCategory>Web Design <span>/ 18 Sep. 2018</span></WorkFormRowLeftCategory>
                       </WorkFormRowLeft>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
          {/* 3번 */}
          <WorkForm2Col>
          <WorkFormBox>
               <WorkFormImageLink>
               <WorkFormImg>
                  <WorkFormImage2>

                  </WorkFormImage2>
               </WorkFormImg>
               </WorkFormImageLink>
               <WorkFormContent>
                  <WorkFormRow>
                  <WorkFormRowLeft>
                       <WorkFormRowLeftTitle>Lorem impsum dolor</WorkFormRowLeftTitle>
                          <WorkFormRowLeftCategory>Web Design <span>/ 18 Sep. 2018</span></WorkFormRowLeftCategory>
                       </WorkFormRowLeft>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
          {/* 아래 */}
          <WorkForm2Col>
         <WorkFormBox>
         <WorkFormImageLink></WorkFormImageLink>
         </WorkFormBox>
          </WorkForm2Col>
          <WorkForm2Col>
       <WorkFormBox>
       <WorkFormImageLink></WorkFormImageLink>
       </WorkFormBox>
          </WorkForm2Col><WorkForm2Col>
       <WorkFormBox>
       <WorkFormImageLink></WorkFormImageLink>
       </WorkFormBox>
          </WorkForm2Col>
        </WorkForm2Wrapper>
     );
 }


 export default WorkForm2;