import React from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main';
import PageNation from '../PageList/PageNation';
import RightMenu from '../RightMenu/RightMenu';
import { MainvisualWrapper, MainVisualHeader,MainVisualH1,MainVisualP,MainVisualP2} from './MainVisualStyle';
import Menu from './Visual/Menu';

 
 
function MainVisual() {
  return (
   <>
   <Main />
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
        <Menu />
      </MainvisualWrapper>
      <PageNation />
      <RightMenu />
      <Footer />
   </>
    );
  }


export default MainVisual;