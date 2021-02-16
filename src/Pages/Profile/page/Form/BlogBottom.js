 import React from 'react';
import {
    BlogRow2, 
    BlogRow2CardAutoer1, 
    BlogRow2CardDate, 
    BlogRow2Col1, 
    // BlogRow2Col2,
    // BlogRow2Col3,   
    BlogRow2ColCard, 
    BlogRow2ColCardBody, 
    BlogRow2ColCardBox, 
    BlogRow2ColCardCategory, 
    BlogRow2ColCardDescription, 
    BlogRow2ColCardFooter, 
    BlogRow2ColCardFooterIcon, 
    BlogRow2ColCardFooterIconH1, 
    BlogRow2ColCardImg, 
    BlogRow2ColCardImg2,
    BlogRow2ColCardImg3,
    BlogRow2ColCardTitle,
    TimeH1,
    Traval,
    Traval2
} from '../style/BlogStlye';
import {IoMdTime} from "react-icons/io"
import Image1 from '../Form/Images/Man.jpg'

export function BlogBottom() {
     return (
        <BlogRow2>
        <BlogRow2Col1>
          <BlogRow2ColCard>
              <BlogRow2ColCardImg></BlogRow2ColCardImg>
              <BlogRow2ColCardBody>
                  <BlogRow2ColCardBox>
                      <BlogRow2ColCardCategory>
                          <Traval>TRAVAL</Traval>
                      </BlogRow2ColCardCategory>
                  </BlogRow2ColCardBox>
                  <BlogRow2ColCardTitle>
                  See more ideas about Traval
                  </BlogRow2ColCardTitle>
                  <BlogRow2ColCardDescription>
                  <p>Proin eget tortor risus. Pellentesque in ipsum id orci</p>
                  <p>porta dapibus. Praesent sapien massa, convallis a</p>
                  <p>pellentesque nec,egestas non nisi.</p>  
                  </BlogRow2ColCardDescription>
              </BlogRow2ColCardBody>
              <BlogRow2ColCardFooter>
                  <BlogRow2CardAutoer1>
                  <BlogRow2ColCardFooterIcon src={Image1}></BlogRow2ColCardFooterIcon>
                  <BlogRow2ColCardFooterIconH1>Mogan Freeman</BlogRow2ColCardFooterIconH1>
                  </BlogRow2CardAutoer1>
                  <BlogRow2CardDate>
                    <IoMdTime size="20px"/>
                    <TimeH1>10 min</TimeH1>
                  </BlogRow2CardDate>
              </BlogRow2ColCardFooter>
          </BlogRow2ColCard>
        </BlogRow2Col1>
        <BlogRow2Col1>
        <BlogRow2ColCard>
              <BlogRow2ColCardImg2></BlogRow2ColCardImg2>
              <BlogRow2ColCardBody>
              <BlogRow2ColCardBox>
              <BlogRow2ColCardCategory>
              <Traval2>WEB DESIGN</Traval2>
              </BlogRow2ColCardCategory>
              </BlogRow2ColCardBox>
              <BlogRow2ColCardTitle>
                  See more ideas about Traval
              </BlogRow2ColCardTitle>
              <BlogRow2ColCardDescription>
              <p>Proin eget tortor risus. Pellentesque in ipsum id orci</p>
              <p>porta dapibus. Praesent sapien massa, convallis a</p>
              <p>pellentesque nec,egestas non nisi.</p>  
              </BlogRow2ColCardDescription>
              </BlogRow2ColCardBody>
              <BlogRow2ColCardFooter>
              <BlogRow2CardAutoer1>
                  <BlogRow2ColCardFooterIcon src={Image1}></BlogRow2ColCardFooterIcon>
                  <BlogRow2ColCardFooterIconH1>Mogan Freeman</BlogRow2ColCardFooterIconH1>
                  </BlogRow2CardAutoer1>
                  <BlogRow2CardDate>
                    <IoMdTime size="20px"/>
                    <TimeH1>10 min</TimeH1>
                  </BlogRow2CardDate>
              </BlogRow2ColCardFooter>
          </BlogRow2ColCard>
        </BlogRow2Col1>
        <BlogRow2Col1>
        <BlogRow2ColCard>
              <BlogRow2ColCardImg3></BlogRow2ColCardImg3>
              <BlogRow2ColCardBody>
              <BlogRow2ColCardBox>
              <BlogRow2ColCardCategory>
              <Traval2>WEB DISIGN</Traval2>
              </BlogRow2ColCardCategory>
              </BlogRow2ColCardBox>
              <BlogRow2ColCardTitle>
              See more ideas about Traval
              </BlogRow2ColCardTitle>
              <BlogRow2ColCardDescription>
              <p>Proin eget tortor risus. Pellentesque in ipsum id orci</p>
              <p>porta dapibus. Praesent sapien massa, convallis a</p>
              <p>pellentesque nec,egestas non nisi.</p>  
              </BlogRow2ColCardDescription>    
              </BlogRow2ColCardBody>
              <BlogRow2ColCardFooter>
              <BlogRow2CardAutoer1>
                  <BlogRow2ColCardFooterIcon src={Image1}></BlogRow2ColCardFooterIcon>
                  <BlogRow2ColCardFooterIconH1>Mogan Freeman</BlogRow2ColCardFooterIconH1>
              </BlogRow2CardAutoer1>
              <BlogRow2CardDate>
                    <IoMdTime size="20px"/>
                    <TimeH1>10 min</TimeH1>
                  </BlogRow2CardDate>
              </BlogRow2ColCardFooter>
          </BlogRow2ColCard>
        </BlogRow2Col1>
     </BlogRow2>
     );
 }


 export default BlogBottom;