import React, { useCallback, useEffect, useState } from 'react'
import '../index.css';
import {
  HomeWrapper,
  HomeHeaderLeft,
  HomeHeaderH1,
  HomeHeaderRight,HomeHeaderInput} from './MainStyle';
import Search from './Servics/Search';

 
function Main() {
    const [toggle,setToggle] = useState(false);
    const [scrollNav,setScrollNav] = useState(true);
    const onToggle = useCallback(() => {
      setTimeout(() => {
        setToggle(toggle => !toggle)
      }, 1000)
    },[]);
    const changeNav = () => {
      if(window.scrollY > 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);

    return (
    <HomeWrapper scrollNav={scrollNav} smooth={true}> 
     <HomeHeaderLeft>
     <HomeHeaderH1 to="/sdsd">빠른메뉴</HomeHeaderH1>
        <HomeHeaderH1 to="sss">글찾기</HomeHeaderH1>
      </HomeHeaderLeft>
        <HomeHeaderRight> 
         <HomeHeaderInput type="search" value="검색창" htmlFor="" onClick={onToggle}>
           Search 
        {toggle && <Search/>} 
         </HomeHeaderInput>
         <HomeHeaderInput type="submit" value="검색하기">검색하기</HomeHeaderInput>
        </HomeHeaderRight>
      </HomeWrapper> 
      )
    }

export default Main
