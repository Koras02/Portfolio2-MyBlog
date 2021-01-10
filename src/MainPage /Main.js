import React from 'react'
import '../index.css';
import {HomeWrapper,HomeHeaderLeft,HomeHeaderH1,HomeHeaderRight,HomeHeaderInput, HomeHeaderCenter} from './MainStyle';
import MainVisual from './MainVisual/MainVisual';
import PageNation from './PageList/PageNation';
 

function Main() {
    return ( 
      <>
    <HomeWrapper>
       <HomeHeaderLeft>
         <HomeHeaderH1 to="/sdsd">빠른메뉴</HomeHeaderH1>
         <HomeHeaderH1 to="sss">글찾기</HomeHeaderH1>
       </HomeHeaderLeft>
       <HomeHeaderRight>
         <HomeHeaderInput type="search" value="검색창" htmlForm>검색</HomeHeaderInput>
         <HomeHeaderInput type="submit" value="검색하기">검색하기</HomeHeaderInput>
       </HomeHeaderRight>
    </HomeWrapper>
    <MainVisual />
    <PageNation />
    </>
  );

}

export default Main
