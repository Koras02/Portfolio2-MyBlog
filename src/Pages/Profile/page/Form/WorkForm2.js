 import React from 'react';
// import { FaPlus } from 'react-icons/fa';
import { Image, WorkBox, WorkFormRowWrapper, WorkImage } from '../style/WorkForm2Style';
import './scss/WorkForm.scss'
// eslint-disable-next-line no-unused-vars
import Img from './Images/Heart.jpg'
import { FaPlus } from 'react-icons/fa';
import Img2 from './Images/Food.jpg';
import Img3 from './Images/DeskTop.jpg'
import Img4 from './Images/Woman.jpg';
import Img5 from './Images/Man.jpg';
import Img6 from './Images/Heart.jpg'

export function WorkForm2() {
     return (
          <>
            <WorkFormRowWrapper>
               <div class="col-md-4">
               <WorkBox className="work-box">
           <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                        <WorkImage className="work-img">
                          <Image alt className="img-fluid" id="image" src={Img}>
                              
                          </Image>
                        </WorkImage>
                     <div class="work-content">
                         <div class="row">
                            <div class="col-sm-8">
                               <h2 class="w-title">Lorem impsum dolor</h2>
                               <div class="w-more">
                                  <span class="w-ctegory">Web Design </span>
                                  <span>/</span>
                                  <span class="w-date">18. Sep. 2018</span>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="w-like">
                                    <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                       <FaPlus class="bi bi-plus-circle"/>
                                   </a>
                               </div>
                            </div>
                         </div>
                     </div>
                     </a>
                  </WorkBox>
               </div>
               {/* 2번째 */}
               <div class="col-md-4">
               <WorkBox className="work-box">
           <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                        <WorkImage className="work-img">
                          <Image alt className="img-fluid" id="image" src={Img2}>
                              
                          </Image>
                        </WorkImage>
                     <div class="work-content">
                         <div class="row">
                            <div class="col-sm-8">
                               <h2 class="w-title">Lorem impsum dolor</h2>
                               <div class="w-more">
                                  <span class="w-ctegory">Web Design </span>
                                  <span>/</span>
                                  <span class="w-date">18. Sep. 2018</span>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="w-like">
                                 <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                       <FaPlus class="bi bi-plus-circle"/>
                                   </a>
                               </div>
                            </div>
                         </div>
                     </div>
                     </a>
                  </WorkBox>
               </div>
               {/* 3번째 */}
               <div class="col-md-4">
               <WorkBox className="work-box">
           <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                        <WorkImage className="work-img">
                          <Image alt className="img-fluid" id="image" src={Img3}>
                              
                          </Image>
                        </WorkImage>
                     <div class="work-content">
                         <div class="row">
                            <div class="col-sm-8">
                               <h2 class="w-title">Lorem impsum dolor</h2>
                               <div class="w-more">
                                  <span class="w-ctegory">Web Design </span>
                                  <span>/</span>
                                  <span class="w-date">18. Sep. 2018</span>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="w-like">
                                 <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                       <FaPlus class="bi bi-plus-circle"/>
                                   </a>
                               </div>
                            </div>
                         </div>
                     </div>
                     </a>
                  </WorkBox>
               </div>
               {/* 4번째 */}
               <div class="col-md-4">
               <WorkBox className="work-box">
           <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                        <WorkImage className="work-img">
                          <Image alt className="img-fluid" id="image" src={Img4}>
                              
                          </Image>
                        </WorkImage>
                     <div class="work-content">
                         <div class="row">
                            <div class="col-sm-8">
                               <h2 class="w-title">Lorem impsum dolor</h2>
                               <div class="w-more">
                                  <span class="w-ctegory">Web Design </span>
                                  <span>/</span>
                                  <span class="w-date">18. Sep. 2018</span>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="w-like">
                                 <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                       <FaPlus class="bi bi-plus-circle"/>
                                   </a>
                               </div>
                            </div>
                         </div>
                     </div>
                     </a>
                  </WorkBox>
               </div>
               {/* 5번째 */}
               <div class="col-md-4">
               <WorkBox className="work-box">
           <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                        <WorkImage className="work-img">
                          <Image alt className="img-fluid" id="image" src={Img5}>
                              
                          </Image>
                        </WorkImage>
                     <div class="work-content">
                         <div class="row">
                            <div class="col-sm-8">
                               <h2 class="w-title">Lorem impsum dolor</h2>
                               <div class="w-more">
                                  <span class="w-ctegory">Web Design </span>
                                  <span>/</span>
                                  <span class="w-date">18. Sep. 2018</span>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="w-like">
                                 <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                       <FaPlus class="bi bi-plus-circle"/>
                                   </a>
                               </div>
                            </div>
                         </div>
                     </div>
                     </a>
                  </WorkBox>
               </div>
               {/* 6번째 */}
               <div class="col-md-4">
               <WorkBox className="work-box">
           <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                        <WorkImage className="work-img">
                          <Image alt className="img-fluid" id="image" src={Img6}>
                              
                          </Image>
                        </WorkImage>
                     <div class="work-content">
                         <div class="row">
                            <div class="col-sm-8">
                               <h2 class="w-title">Lorem impsum dolor</h2>
                               <div class="w-more">
                                  <span class="w-ctegory">Web Design </span>
                                  <span>/</span>
                                  <span class="w-date">18. Sep. 2018</span>
                               </div>
                            </div>
                            <div class="col-sm-4">
                               <div class="w-like">
                                <a href="/Portfolio2-SubPage" data-gallery="portfolioGallery" class="portfolio-lightbox">
                                       <FaPlus class="bi bi-plus-circle"/>
                                   </a>
                               </div>
                            </div>
                         </div>
                     </div>
                     </a>
                  </WorkBox>
               </div>
            </WorkFormRowWrapper>
          </>
     );
 }


 export default WorkForm2;