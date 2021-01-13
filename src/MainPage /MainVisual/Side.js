import React,{useCallback,useState} from 'react';
import Home from './MainvisualMenu/Home';
 
import {
  SideHeader,
  SideHeaderLogin,
  SideHeaderLoginForm,
  SideMenu,
  SideMenuH1,
  SideMenuP
} from './SideVisualStyle'
 

export function Side() {
     const [toggle,setToggle] = useState(false);
     const onToggle = useCallback(() => {
       setTimeout(() => {
         setToggle(toggle => !toggle);
       }, 0)
     }, [])
     return (
       <SideHeader>
         <SideHeaderLoginForm>
          <SideHeaderLogin to="/si">로그인</SideHeaderLogin>
          <SideHeaderLogin to="/">회원가입</SideHeaderLogin>
          </SideHeaderLoginForm>
       <SideMenu>
         <SideMenuH1 to="/">전체글 보기 (0)</SideMenuH1>
         <SideMenuP to="/">코딩(0)</SideMenuP>
         <SideMenuP>웹개발(0)</SideMenuP> 
         <SideMenuP>포토폴리오 소개(0)</SideMenuP>
         <SideMenuP>개발 일지(0)</SideMenuP>  
         <SideMenuP>Github(0)</SideMenuP>
         <SideMenuP onClick={onToggle}>웹 개발
            {toggle && <Home/>}
        </SideMenuP>
       </SideMenu>
       </SideHeader>
     );
 }


 export default Side;