import React, {useState,useCallback} from 'react';
import Main from '../Main';
import RightMenu from '../RightMenu/RightMenu';
 import Home from './MainvisualMenu/Home';
import { 
  MainvisualWrapper, 
  MainVisualHeader,
  MainVisualH1,
  MainVisualP,
  MainVisualP2
} from './MainVisualStyle';
import Menu from './Visual/Menu';

export function MainHeader() {
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
        <RightMenu />  
        </MainvisualWrapper>
        </>
     );
 }


 export default MainHeader;