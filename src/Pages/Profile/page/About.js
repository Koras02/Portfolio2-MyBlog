import React from 'react';
import {
  AboutWrapper,
  AboutContainer,
  AboutCollpase,
  Box,
  AboutRow,
  AboutFirstRow,

} from './style/AboutStyle';
import './style/About.scss'
import AboutLeft from './Form/AboutLeft';
import AboutRight from './Form/AboutRight';



export function About() {
  return (
    <AboutWrapper id="About">
      <AboutContainer>
        <AboutFirstRow>
          <AboutCollpase>
            <Box>
              <AboutRow>
                <AboutLeft />
                <AboutRight />
              </AboutRow>
            </Box>
          </AboutCollpase>
        </AboutFirstRow>
      </AboutContainer>
    </AboutWrapper>
  );
}


export default About;