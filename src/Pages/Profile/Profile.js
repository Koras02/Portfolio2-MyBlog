import React from 'react';
import About from './page/About';
import {ProfileWrapper} from './ProfileStyle'

export function Profile() {
     return (
        <ProfileWrapper id="Profile">
            <About />
        </ProfileWrapper>
     );
 }


 export default Profile;