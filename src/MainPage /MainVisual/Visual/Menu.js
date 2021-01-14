import React,{useCallback,useState} from 'react';
import Side from '../Side';
import { MainSideMenu} from './MenuStyle';

// 메인 페이지 메뉴 UI 담당 

export function Menu() {
     const [toggle,setToggle] = useState(false);
     const onToggle = useCallback(() => {
         setTimeout(() => {
             setToggle(toggle => !toggle);
         }, 0)
     },[]);
    return (
        <>   
    <MainSideMenu onClick={onToggle}>메뉴
          <div>
              <sideMenu toggle={toggle? 'ON': 'OFF'} />
              {toggle && <Side/>}
          </div>
    </MainSideMenu> 
        </>
     )
    }
 export default Menu;