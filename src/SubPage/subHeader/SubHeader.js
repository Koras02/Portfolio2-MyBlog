import React,{useState,useCallback} from 'react';
import Main from '../../MainPage /Main';
import Menu from '../../MainPage /MainVisual/Visual/Menu';
import SubMenu from '../subMenu/subMenu';
import { 
  MainvisualWrapper, 
  MainVisualHeader,
  MainVisualH1,
  MainVisualP,
  MainVisualP2
} from './SubHeaderStyle';
 
function SubHeader() {
  const [mouseover,setToggle] = useState(false);
  const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle(toggle => !toggle)
    }, 0);
  },[])
     return (
      <>
        <Main />
        <MainvisualWrapper>
           <MainVisualHeader> 
              <MainVisualP onMouseUp={onToggle}>Home
                 {mouseover && <SubMenu/>}
             </MainVisualP>
             <MainVisualP>Discord
             </MainVisualP>
             <MainVisualP>Menu</MainVisualP>
             <MainVisualH1 to="/">MyBlog</MainVisualH1>
             <MainVisualP2>Languge</MainVisualP2>
             <MainVisualP2>Home</MainVisualP2>
             <MainVisualP2>About</MainVisualP2>
          <Menu /> 
          </MainVisualHeader>
          </MainvisualWrapper>
      </>
     );
 }


 export default SubHeader;