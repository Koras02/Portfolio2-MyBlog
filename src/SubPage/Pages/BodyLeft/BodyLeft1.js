 import React from 'react';
 import {IoIosPerson} from 'react-icons/io';
 import {AiOutlineTag} from 'react-icons/ai'
 import {BiCommentDetail} from 'react-icons/bi'
 import { 
     SectionRow1Post1,
     SectionRow1Col, 
     SectionRow1PostImage,
     SectionRow1Col2, 
     SectionRow3Col, 
     SectionRow1Col2Title, 
     SectionRow1ColList, 
     SectionRow1ColUl, 
     SectionRow1ColListSapn, 
     SecitonRow1ColListSpanIconLink, 
     SectionRow3ColP, 
     SectionRow3ColPBlack, 
     SectionRow3ColPBlackP
    } from '../style/BodyStyle';
 import Image from '../Images/Neko.jpg'

export function BodyLeft1() {
     return (
         <>
        {/* 1번째 col */}
        <SectionRow1Col>
        <SectionRow1Post1>
          <SectionRow1PostImage src={Image}></SectionRow1PostImage>
        <SectionRow1Col2>
         <SectionRow1Col2Title>
         Lorem ipsum dolor sit amet consec tetur adsipisicing
         </SectionRow1Col2Title>
         <SectionRow1ColUl>
             {/* 1번째 */}
             <SectionRow1ColList>
                 <SectionRow1ColListSapn>
                         <SecitonRow1ColListSpanIconLink to="/">
                         <IoIosPerson size="15px" className="Person"/>
                             Jason London
                         </SecitonRow1ColListSpanIconLink>
                 </SectionRow1ColListSapn>
             </SectionRow1ColList>
             {/* 2번째 */}
             <SectionRow1ColList>
             <SectionRow1ColListSapn>
                         <SecitonRow1ColListSpanIconLink to="/">
                         <AiOutlineTag size="15px" className="Person"/>
                             Front-End 
                         </SecitonRow1ColListSpanIconLink>
                 </SectionRow1ColListSapn>
             </SectionRow1ColList>
             {/* 3번째 */}
             <SectionRow1ColList>
             <SectionRow1ColListSapn>
                         <SecitonRow1ColListSpanIconLink to="/">
                         <BiCommentDetail size="15px" className="Person"/>
                            14
                         </SecitonRow1ColListSpanIconLink>
                 </SectionRow1ColListSapn>
             </SectionRow1ColList>
         </SectionRow1ColUl>
        </SectionRow1Col2>
       {/* 2번째 col */}
       <SectionRow3Col>
           {/* 1번째 설명칸 */}
         <SectionRow3ColP>
         Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
   porta. Quisque velit
   nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque
   nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
   cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
   Nulla quis lorem ut libero malesuada feugiat.
         </SectionRow3ColP>
         {/* 2번째 설명칸 */}
         <SectionRow3ColP>
   Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit
   aliquet elit, eget tincidunt
   nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet,
   consectetur adipiscing elit. Donec sollicitudin molestie malesuada.
         </SectionRow3ColP>
         {/* 3번째 설명 */}
         <SectionRow3ColP>
   Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur
   adipiscing elit. Praesent
   sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet,
   consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
   sem. Donec rutrum congue leo eget malesuada.
 
         </SectionRow3ColP>
             {/* 4번째 설명 */}
         <SectionRow3ColP>
   Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur
   adipiscing elit. Praesent
   sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet,
   consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
   sem. Donec rutrum congue leo eget malesuada.
 </SectionRow3ColP>
    <SectionRow3ColPBlack>
        <SectionRow3ColPBlackP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </SectionRow3ColPBlackP>
    </SectionRow3ColPBlack>
    <br/>
         <SectionRow3ColP>
   Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit
   aliquet elit, eget tincidunt
   nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet,
   consectetur adipiscing elit. Donec sollicitudin molestie malesuada.
            
         </SectionRow3ColP>
       </SectionRow3Col>
        </SectionRow1Post1>
       </SectionRow1Col>
       </>
     );
 }


 export default BodyLeft1;