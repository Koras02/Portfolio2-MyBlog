 import React from 'react';
 import {MainVisualWrapper,
    // MainVisualHeader,
    MainVisualH1,
    MainVisualP1,
    } from './MainVisualBorad';
 
// 메인비쥬얼 Post 담당

export function MainBoard() {
     return (
         <MainVisualWrapper>
            <MainVisualH1>MyBlog Welcome</MainVisualH1>
            <MainVisualP1 >첫번째 posts</MainVisualP1>
            <MainVisualP1>두번째 posts</MainVisualP1> 
            <MainVisualP1>세번째 posts</MainVisualP1>
            <MainVisualP1>네번째 posts</MainVisualP1>
            {/* <MainVisualHeader> */}
            {/* </MainVisualHeader> */}
        </MainVisualWrapper>
     );
 }


 export default MainBoard;