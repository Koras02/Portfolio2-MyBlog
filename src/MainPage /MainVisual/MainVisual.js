import React from 'react';
import Profile from '../ProfilePage/Profile';
import { homeObjThree, homeObjTwo } from './DataPage/Data';
import Developer from './Developer/Developer';
import Footer from './Footer/Footer';
import Language from './Language/Language';
// import Footer from '../Footer/Footer';
// import MainBoard from './MainBoard';
import MainDes from './MainDes/MainDes';
import MainHeader from './MainHeader';
 

 
// 메인비쥬얼 모든 컴포넌트 렌더링 부분  
export function MainVisual() {
  return (
   <>
      <MainHeader />
      <MainDes />
      <Profile {...homeObjTwo} />
      <Language {...homeObjThree} />
      <Developer />    
      <Footer /> 
   </>
    );
  }


export default MainVisual;