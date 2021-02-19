 import React from 'react';
import SubVisualFooter from '../BackPages/pages/SubVisualFooter';
// import SubVisualDescription from '../BackPages/pages/SubVisualDescription';
// import SubVisualBody from '../BackPages/pages/SubVisualBody';
// import SubVisualBody from '../BackPages/pages/SubVisualBody';
import { SubVisualOverflow } from '../BackPages/style/SubVisualBackgroundStyle';
import SubVisualFronBody from './pages/SubVisualFronBody';
import SubVisualHeaderss from './SubVisualHeaderss';

function SubvisualBackGround() {
     return (
        <SubVisualOverflow>
            <SubVisualHeaderss />
            <SubVisualFronBody />
            <SubVisualFooter />
        </SubVisualOverflow>
     );
 }


 export default SubvisualBackGround;