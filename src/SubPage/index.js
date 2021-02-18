 import React from 'react';
import { 
 
  // SubVisualHeadersWrapper,
  SubVisualWrapper,
} from './FrontPages/Styles/SubPagStyle';
import SubvisualBackGround from './FrontPages/SubvisualBackGround';
// import SubvisualBackGround from './FrontPages/SubvisualBackGround';
import SubVisualHeaders from './BackPages/SubVisualHeaders';
// import SubVisualHeaders from './SubVisualHeaders';

export function SubVisual() {
     return (
        <SubVisualWrapper>
            <SubVisualHeaders />
            <SubvisualBackGround />
        </SubVisualWrapper>
     );
 }


 export default SubVisual;