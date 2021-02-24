 import React from 'react';
 
import { WorkForm2Col, 
   WorkForm2Wrapper, 
   WorkFormBox, 
   WorkFormContent, 
   WorkFormImage2, 
   WorkFormImageLink, 
   WorkFormImg, 
   WorkFormRowLeft, 
   WorkFormRowLeftCategory, 
   WorkFormRowLeftTitle,
   WorkFormRowRight,
   WorkFormWelick,
   WorkFormWeLink, } from '../style/WorkFormDownStyle';
import { WorkFormRow } from '../style/WorkStyle';
import './scss/work.scss'
// import Image from '../Form/Images/Man.jpg';
import {FaPlus} from 'react-icons/fa'
 
 
function WorkForm2() {
 
     return (
        <WorkForm2Wrapper>
            {/* 1번 */}
          <WorkForm2Col>
             <WorkFormBox class="work-box">
               <WorkFormImageLink>
               <WorkFormImg class="work-img">
                  <WorkFormImage2 alt class="img-fluid">
                  </WorkFormImage2>
               </WorkFormImg>
               </WorkFormImageLink>
               <WorkFormContent>
                  <WorkFormRow>
                       <WorkFormRowLeft>
                       <WorkFormRowLeftTitle>Lorem impsum dolor</WorkFormRowLeftTitle>
                          <WorkFormRowLeftCategory><span class="span1">Web Design</span>/<span class="span2"> 18 Sep. 2018</span></WorkFormRowLeftCategory>
                       </WorkFormRowLeft>
                       <WorkFormRowRight>
                          <WorkFormWelick>
                            <WorkFormWeLink>
                                 <FaPlus  className="bi bi-plus-circle" size="40px" />
                            </WorkFormWeLink>
                          </WorkFormWelick>
                       </WorkFormRowRight>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
          {/* 2번  */}
          <WorkForm2Col>
          <WorkFormBox>
               <WorkFormImageLink>
               <WorkFormImg class="work-img">
                  <WorkFormImage2 alt class="img-fluid">
                      
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
                          <WorkFormWelick>
                            <WorkFormWeLink to="/">
                                 <FaPlus  className="bi bi-plus-circle" size="40px"/>
                            </WorkFormWeLink>
                          </WorkFormWelick>
                       </WorkFormRowRight>
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
                       <WorkFormRowRight>
                          <WorkFormWelick>
                            <WorkFormWeLink>
                                 <FaPlus  className="bi bi-plus-circle" size="40px"/>
                            </WorkFormWeLink>
                          </WorkFormWelick>
                       </WorkFormRowRight>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
          {/* 아래 */}
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
                          <WorkFormWelick>
                            <WorkFormWeLink>
                                 <FaPlus  className="bi bi-plus-circle" size="40px"/>
                            </WorkFormWeLink>
                          </WorkFormWelick>
                       </WorkFormRowRight>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
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
                          <WorkFormWelick>
                            <WorkFormWeLink>
                                 <FaPlus  className="bi bi-plus-circle" size="40px"/>
                            </WorkFormWeLink>
                          </WorkFormWelick>
                       </WorkFormRowRight>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
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
                          <WorkFormWelick>
                            <WorkFormWeLink>
                                 <FaPlus  className="bi bi-plus-circle" size="40px"/>
                            </WorkFormWeLink>
                          </WorkFormWelick>
                       </WorkFormRowRight>
                  </WorkFormRow>
               </WorkFormContent>
             </WorkFormBox>
          </WorkForm2Col>
        </WorkForm2Wrapper>
     );
 }


 export default WorkForm2;