import React from 'react';
import BodyLeft1 from './BodyLeft/BodyLeft1';
import BodyLeft2 from './BodyLeft/BodyLeft2';
import BodyLeft3 from './BodyLeft/BodyLeft3';
import { SectionRow1, } from './style/BodyStyle';


function BodyLeft() {
  return (
    <SectionRow1>
      <BodyLeft1 />
      <BodyLeft2 />
      <BodyLeft3 />
    </SectionRow1>
  );
}


export default BodyLeft;