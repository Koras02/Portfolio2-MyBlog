import React,{useCallback, useState} from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main';
import PageNation from '../PageList/PageNation';
import RightMenu from '../RightMenu/RightMenu';
import { MainSideMenu,MainvisualWrapper, MainVisualHeader,MainVisualH1,MainVisualP,MainVisualP2} from './MainVisualStyle';
import Side from './Side';
 
 
function MainVisual() {
  const [toggle,setToggle] = useState(false);
  const onToggle = useCallback(() => {
        setTimeout(() => {
         setToggle(toggle => !toggle);
      }, 0)
     },[]);
  return (
   <>
   <Main />
      <MainvisualWrapper>
         <MainVisualHeader>
             <MainSideMenu onClick={onToggle} duration={500}>메뉴
               </MainSideMenu>
             <MainVisualP to="/hi">Home</MainVisualP>
             <MainVisualP>Discord</MainVisualP>
             <MainVisualP>Menu</MainVisualP>
             <MainVisualH1>MyBlog</MainVisualH1>
             <MainVisualP2>Languge</MainVisualP2>
             <MainVisualP2>Home</MainVisualP2>
             <MainVisualP2>About</MainVisualP2>
         </MainVisualHeader>
      </MainvisualWrapper>
      <div>
         <sideMenu toggle={toggle? 'ON' : 'OFF'}/>
         {toggle && <Side/>}
      </div>
      <PageNation />
      <RightMenu />
      <Footer />
   </>
    );
  }


export default MainVisual;