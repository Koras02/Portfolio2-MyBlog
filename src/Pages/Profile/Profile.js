import React from 'react';
import About from './page/About';
import CounterSection from './page/Form/CounterSection';
import Services from './page/Services';
import {ProfileWrapper} from './ProfileStyle'

export function Profile() {
     return (
        <ProfileWrapper id="Profile">
            <About />
            <Services />
            <CounterSection/>
        </ProfileWrapper>
     );
 }


 export default Profile;