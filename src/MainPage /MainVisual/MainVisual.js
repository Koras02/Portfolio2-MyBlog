import React,{useState,useCallback} from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main';
import PageNation from '../PageList/PageNation';
import RightMenu from '../RightMenu/RightMenu';
import MainPiture from './MainPiture';
import Home from './MainvisualMenu/Home';
import { 
  MainvisualWrapper, 
  MainVisualHeader,
  MainVisualH1,
  MainVisualP,
  MainVisualP2
} from './MainVisualStyle';
import Menu from './Visual/Menu';
 

 
// 메인비쥬얼 컴포넌트  
export function MainVisual() {
  const [mouseover,setToggle] = useState(false);
  const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle(toggle => !toggle)
    }, 0);
  },[]);
  return (
   <>
   <Main />
      <MainvisualWrapper>
         <MainVisualHeader> 
             <MainVisualP onMouseUp={onToggle}>Home
               {mouseover && <Home/>}
             </MainVisualP>
             <MainVisualP>Discord</MainVisualP>
             <MainVisualP>Menu</MainVisualP>
             <MainVisualH1>MyBlog</MainVisualH1>
             <MainVisualP2>Languge</MainVisualP2>
             <MainVisualP2>Home</MainVisualP2>
             <MainVisualP2>About</MainVisualP2>
        <Menu />
      </MainVisualHeader>
      <MainPiture />
      <RightMenu />  
      </MainvisualWrapper>
      <PageNation />
      <Footer/>
   </>
    );
  }


export default MainVisual;