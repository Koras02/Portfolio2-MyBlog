import React from 'react';
import About from './page/About';
import CounterSection from './page/Form/CounterSection';
import Services from './page/Services';
import WORK from './page/WORK';
import {ProfileWrapper} from './ProfileStyle'
 

export function Profile() {
     return (
      <> 
         <ProfileWrapper>
         <About />
         <Services />
         <CounterSection />
         <WORK/>
         </ProfileWrapper>
      </>
     );
 }


 export default Profile;