import React from 'react'
import {  MainvisualWrapper, MainVisualHeader,MainVisualH1,MainVisualP,MainVisualP2} from './MainVisualStyle';

function MainVisual() {
  return (
   <>
      <MainvisualWrapper>
         <MainVisualHeader>
             <MainVisualP to="/hi">Home</MainVisualP>
             <MainVisualP>Discord</MainVisualP>
             <MainVisualP>Menu</MainVisualP>
             <MainVisualH1>MyBlog</MainVisualH1>
             <MainVisualP2>Languge</MainVisualP2>
             <MainVisualP2>Home</MainVisualP2>
             <MainVisualP2>About</MainVisualP2>
         </MainVisualHeader>
      </MainvisualWrapper>
   </>
    );
  }


export default MainVisual