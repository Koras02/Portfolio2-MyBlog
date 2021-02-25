import React from 'react';
import { BodyWrapper, SectionContainer, SectionRow,SectionWrapper} from './style/BodyStyle';
 
import './style/Body.scss'
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';

function Body() {
     return (
       <BodyWrapper>
          <SectionWrapper>
            <SectionContainer>
                <SectionRow>
                  <BodyLeft />
                  <BodyRight />
                </SectionRow>
            </SectionContainer>
          </SectionWrapper>
       </BodyWrapper>
     );
 }


 export default Body;