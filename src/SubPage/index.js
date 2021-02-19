 import React from 'react';
import BackPage from './BackPage/BackPage';
import FronPage from './FrontPage/FontPage';
import { Wrapper } from './style/WrapperStyle';

export function BackPages() {
     return (
       <Wrapper>
        <FronPage />
        <BackPage />
      </Wrapper>
     );
 }


 export default BackPages;