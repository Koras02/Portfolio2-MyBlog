import React from 'react'
import { HomeHeaderCenter } from '../MainStyle';
import { MainVisualWrapper, MainVisualHeader,MainVisualP1,MainVisualH1,MainVisualP2} from './MainVisualStyle';

function MainVisual() {
  return (
   <>
    <MainVisualWrapper>
        <MainVisualHeader>
         <MainVisualP1>
             Home
         </MainVisualP1>
         <MainVisualP1>
             카테고리
         </MainVisualP1>
            <MainVisualH1>
                JungHo의 Blog
            </MainVisualH1>
         <MainVisualP2>
             방명록
         </MainVisualP2>
         <MainVisualP2>
             프로필
         </MainVisualP2>
        </MainVisualHeader>
    </MainVisualWrapper>
   </>
    );
  }


export default MainVisual