import React from 'react';
import { BodyRightWrapper } from './style/BodyRightStyle'
import './style/BodyRight.scss'
import BodyRight1 from './BodyRight/BodyRight1';
import BodyRight2 from './BodyRight/BodyRight2';
import BodyRight3 from './BodyRight/BodyRight3';
export function BodyRight() {
  return (
    <>
      <BodyRightWrapper>
        <BodyRight1 />
        <BodyRight2 />
        <BodyRight3 />
      </BodyRightWrapper>
    </>
  );
}


export default BodyRight;