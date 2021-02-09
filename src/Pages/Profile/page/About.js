 import React from 'react';
import { 
  AboutWrapper,
  AboutContainer,
  ProfileLow,
  ProfileImageForm,
  ProfileImage,
  Img,
  ProfileDescription,
  ProfileH1,
  SkillForm,
  SkillH1,
  SkillP,
  Processbar,
  Color,
  Color1,
  Color2,
  Color3
} from './style/AboutStyle';
import './style/About.scss'

export function About() {
     return (
       <AboutWrapper id="About">
         <AboutContainer>
            <ProfileLow>
               <ProfileImageForm>
                  <ProfileImage>
                      <Img src="/" />
                  </ProfileImage>
                  <ProfileDescription>
                      <ProfileH1>
                        Name: <span>KIM JUNG HO</span>
                      </ProfileH1>
                      <ProfileH1>
                        Profile: <span>front-end developer</span>
                      </ProfileH1>
                      <ProfileH1>
                        Email: <span>wjdgh0727@gmail.com</span>
                      </ProfileH1>
                      <ProfileH1>
                        Phone: <span>(010)-4230-7682</span>
                      </ProfileH1>
                  </ProfileDescription>
               </ProfileImageForm>
                  <SkillForm>
                        <SkillH1>Skill</SkillH1>
                        <SkillP>HTML 100% </SkillP>
                        <Processbar>
                          <Color></Color>
                        </Processbar>
                        <SkillP>CSS 70%</SkillP> 
                        <Processbar>
                        <Color1></Color1>
                        </Processbar>
                        <SkillP>Javascript 70%</SkillP>
                        <Processbar>
                        <Color2></Color2>
                        </Processbar>
                        <SkillP>React 60%</SkillP>
                        <Processbar>
                        <Color3></Color3>
                        </Processbar>
                      </SkillForm>
            </ProfileLow>
         </AboutContainer>
       </AboutWrapper>
     );
 }


 export default About;