import React from 'react';
import About from './page/About';
import Services from './page/Services';
import {ProfileWrapper} from './ProfileStyle'

export function Profile() {
     return (
        <ProfileWrapper id="Profile">
            <About />
            <Services />
        </ProfileWrapper>
     );
 }


 export default Profile;