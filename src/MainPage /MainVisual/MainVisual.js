import React from 'react';
import Footer from '../Footer/Footer';
import InfoSection from './InfoSection';
import { homeObjOne } from './InfoSection/Data';
// import PageNation from '../PageList/PageNation';
// import PageNumber from '../PageList/PageNumber';
import MainBoard from './MainBoard';
import MainHeader from './MainHeader';
 

 
// 메인비쥬얼 컴포넌트  
export function MainVisual() {
  return (
   <>
      <MainHeader />
       <MainBoard />
       <InfoSection {...homeObjOne} />
      <Footer/>
   </>
    );
  }


export default MainVisual;