import React from 'react';
import Footer from '../Footer/Footer';
import InfoSection from './InfoSection';
import { homeObjOne } from './InfoSection/Data';
import MainBoard from './MainBoard';
import MainDes from './MainDes/MainDes';
import MainHeader from './MainHeader';
 

 
// 메인비쥬얼 모든 컴포넌트 렌더링 부분  
export function MainVisual() {
  return (
   <>
      <MainHeader />
      <MainDes />
       <InfoSection {...homeObjOne} />
      <Footer/>
   </>
    );
  }


export default MainVisual;