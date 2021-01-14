import React, { useCallback, useState } from 'react'
import '../index.css';
import {HomeWrapper,HomeHeaderLeft,HomeHeaderH1,HomeHeaderRight,HomeHeaderInput} from './MainStyle';
import Search from './Servics/Search';
 
 
function Main() {
    const [toggle,setToggle] = useState(false);
    const onToggle = useCallback(() => {
      setTimeout(() => {
        setToggle(toggle => !toggle)
      }, 1000)
    },[]);
    return (
    <HomeWrapper>
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
