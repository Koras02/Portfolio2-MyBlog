 import React from 'react';
import BlogBottom from './Form/BlogBottom';
import { 
    BlogCol, 
    // BlogColTitle1, 
    BlogColTitleA, 
    BlogColTitleBox, 
    BlogColTitleLine, 
    BlogColTitleP, 
    BlogContainer, 
    BlogRow, 
    Line,
    BlogWrapper,
 
} from './style/BlogStlye';

export function Blog() {
     return (
        <BlogWrapper id="BLOG">
            <BlogContainer>
                <BlogRow>
                   <BlogCol>
                      <BlogColTitleBox>
                              <BlogColTitleA>
                                  BLOG
                              </BlogColTitleA>
                              <BlogColTitleP>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              </BlogColTitleP>
                              <BlogColTitleLine>
                                  <Line></Line>
                              </BlogColTitleLine>
                      </BlogColTitleBox>
                   </BlogCol>
                </BlogRow> 
                <BlogBottom/>
            </BlogContainer>
        </BlogWrapper>
     );
 }


 export default Blog;