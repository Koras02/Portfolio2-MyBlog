import React from 'react';
import { BlogCol,
     BlogColTitle,
      BlogColTitleA,
       BlogContainer, 
       BlogRow,  
       BlogWrapper 
       ,BlogSubtitleA, 
       BlogSubTitleLine, 
       BlogRow2, 
       BlogRow2Col,
       BlogRow2ColMd, 
       BlogRow2ColImg, 
       BlogRow2ColBody, 
       BlogRow2ColFooter, 
       BlogRow2ColCardBox,
       BlogRow2ColCategoryBox,
       BlogRow2ColCardTitle,
       BlogRow2ColCardLink,
       BlogRow2ColCardDescription,
       BlogRow2ColCardDescriptionP,
       BlogRow2ColFooterAuthor,
       BlogRow2ColFooterAuthorLink,
       BlogRow2ColFooterAuthorLinkImage,
       BlogRowColFooterAutorSpan,
       BlogRow2ColFooterDate
 } from './style/BlogStyle';
import Image from './Images/Traval.jpg';
import Image2 from './Images/Food.jpg';
import Image3 from './Images/OFFICE.jpg';
import Image4 from './Images/SunRise.png';
import Image5 from './Images/Woman.jpg';
import Image6 from './Images/Cat.jpg';
import { BiTimeFive } from "react-icons/bi";
import './style/WorkForm.scss'

export function Blog() {
     return (
        <>
         <BlogWrapper>
             <BlogContainer>
              <BlogRow>
               <BlogCol>
                   <BlogColTitle>
                        <BlogColTitleA>
                            BLOG
                        </BlogColTitleA>
                        <BlogSubtitleA>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               
                        </BlogSubtitleA>
                        <BlogSubTitleLine>

                        </BlogSubTitleLine>
                   </BlogColTitle>
               </BlogCol>
              </BlogRow>
              {/* 1 */}
              <BlogRow2>
               <BlogRow2Col>
                <BlogRow2ColMd>
                   <BlogRow2ColImg src={Image}></BlogRow2ColImg>
                   <BlogRow2ColBody>
                       <BlogRow2ColCardBox>
                           <BlogRow2ColCategoryBox>
                               Traval
                           </BlogRow2ColCategoryBox>
                       </BlogRow2ColCardBox>
                       <BlogRow2ColCardTitle>
                             <BlogRow2ColCardLink to="/">
                                 See more ideas about Traval
                             </BlogRow2ColCardLink>
                       </BlogRow2ColCardTitle>
                       <BlogRow2ColCardDescription>
                          <BlogRow2ColCardDescriptionP>
                            Proin eget tortor risus. 
                            Pellentesque in ipsum id orci porta dapibus. 
                            Praesent sapien massa, convallis
                            a pellentesque nec,
                            egestas non nisi.
                          </BlogRow2ColCardDescriptionP>
                       </BlogRow2ColCardDescription>
                   </BlogRow2ColBody>
                   <BlogRow2ColFooter>
                      <BlogRow2ColFooterAuthor>
                           <BlogRow2ColFooterAuthorLink to="/">
                               <BlogRow2ColFooterAuthorLinkImage src={Image5}></BlogRow2ColFooterAuthorLinkImage>
                               <BlogRowColFooterAutorSpan>Morgan Freeman</BlogRowColFooterAutorSpan>
                           </BlogRow2ColFooterAuthorLink>
                      </BlogRow2ColFooterAuthor>
                      <BlogRow2ColFooterDate >
                         <BiTimeFive  size="18px"  className="bi-clock"/>
                         10 min
                      </BlogRow2ColFooterDate>
                   </BlogRow2ColFooter>
                </BlogRow2ColMd>
               </BlogRow2Col>
               {/* 2 */}
               <BlogRow2Col>
                <BlogRow2ColMd>
                   <BlogRow2ColImg src={Image2}>

                   </BlogRow2ColImg>
                   <BlogRow2ColBody>
                   <BlogRow2ColCardBox>
                           <BlogRow2ColCategoryBox>
                               Traval
                           </BlogRow2ColCategoryBox>
                       </BlogRow2ColCardBox>
                       <BlogRow2ColCardTitle>
                             <BlogRow2ColCardLink to="/">
                                 See more ideas about Traval
                             </BlogRow2ColCardLink>
                       </BlogRow2ColCardTitle>
                       <BlogRow2ColCardDescription>
                          <BlogRow2ColCardDescriptionP>
                            Proin eget tortor risus. 
                            Pellentesque in ipsum id orci porta dapibus. 
                            Praesent sapien massa, convallis
                            a pellentesque nec,
                            egestas non nisi.
                          </BlogRow2ColCardDescriptionP>
                       </BlogRow2ColCardDescription>
                   </BlogRow2ColBody>
                   <BlogRow2ColFooter>
                   <BlogRow2ColFooterAuthor>
                           <BlogRow2ColFooterAuthorLink to="/">
                               <BlogRow2ColFooterAuthorLinkImage src={Image6}></BlogRow2ColFooterAuthorLinkImage>
                               <BlogRowColFooterAutorSpan>Morgan Freeman</BlogRowColFooterAutorSpan>
                           </BlogRow2ColFooterAuthorLink>
                      </BlogRow2ColFooterAuthor>
                      <BlogRow2ColFooterDate>
                            <BiTimeFive  size="18px"  className="bi-clock"/>
                         10 min
                      </BlogRow2ColFooterDate>
                   </BlogRow2ColFooter>
                </BlogRow2ColMd>
               </BlogRow2Col>
              {/* 3 */}
              <BlogRow2Col>
                <BlogRow2ColMd>
                   <BlogRow2ColImg src={Image3}>

                   </BlogRow2ColImg>
                   <BlogRow2ColBody>
                   <BlogRow2ColCardBox>
                           <BlogRow2ColCategoryBox>
                               Traval
                           </BlogRow2ColCategoryBox>
                       </BlogRow2ColCardBox>
                       <BlogRow2ColCardTitle>
                             <BlogRow2ColCardLink to="/">
                                 See more ideas about Traval
                             </BlogRow2ColCardLink>
                       </BlogRow2ColCardTitle>
                       <BlogRow2ColCardDescription>
                          <BlogRow2ColCardDescriptionP>
                            Proin eget tortor risus. 
                            Pellentesque in ipsum id orci porta dapibus. 
                            Praesent sapien massa, convallis
                            a pellentesque nec,
                            egestas non nisi.
                          </BlogRow2ColCardDescriptionP>
                       </BlogRow2ColCardDescription>
                   </BlogRow2ColBody>
                   <BlogRow2ColFooter>
                   <BlogRow2ColFooterAuthor>
                           <BlogRow2ColFooterAuthorLink to="/">
                               <BlogRow2ColFooterAuthorLinkImage src={Image4}></BlogRow2ColFooterAuthorLinkImage>
                               <BlogRowColFooterAutorSpan>Morgan Freeman</BlogRowColFooterAutorSpan>
                           </BlogRow2ColFooterAuthorLink>
                      </BlogRow2ColFooterAuthor>
                      <BlogRow2ColFooterDate>
                         <BiTimeFive  size="18px"  className="bi-clock"/>
                         10 min
                      </BlogRow2ColFooterDate>
                   </BlogRow2ColFooter>
                </BlogRow2ColMd>
               </BlogRow2Col>
              </BlogRow2>
             </BlogContainer>
         </BlogWrapper>
        </>
     );
 }


 export default Blog;