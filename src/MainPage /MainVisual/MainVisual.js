import React from 'react';
import Footer from '../Footer/Footer';
// import PageNation from '../PageList/PageNation';
import PageNumber from '../PageList/PageNumber';
import MainHeader from './MainHeader';
 

 
// 메인비쥬얼 컴포넌트  
export function MainVisual() {
  return (
   <>
      <MainHeader />
      <PageNumber />
      <Footer/>
   </>
    );
  }


export default MainVisual;