 import React from 'react';
import { ColLeft, Graph, Img, ImgForm, Profile1, ProfileDescription, ProfileH1, RowProfile, Skill, SkillH1, SkillP } from '../style/AboutStyle';
import Image from '../../Images/Profile2.png'


function AboutLeft() {
     return (
        <ColLeft>
        <RowProfile>
           <Profile1>
             <ImgForm>
               <Img src={Image} />
             </ImgForm>
             <ProfileDescription>
                 <ProfileH1>Name: <span>Kim Jung Ho</span></ProfileH1>
                 <ProfileH1>Developer:<span>Front-End</span></ProfileH1>
                 <ProfileH1>Email:<span> wjdgh0727@gmail.com</span></ProfileH1>
                 <ProfileH1>Phone: <span>(617) 557-0089</span></ProfileH1>
             </ProfileDescription>
           </Profile1>
        </RowProfile>
       <Skill>
         <SkillH1>
           Skill
         </SkillH1>
         <SkillP>
           HTML  <p>100%</p> 
         </SkillP>
         <Graph>
           <div class="progressbar" role="progressbar">
           </div>
         </Graph>
         <SkillP>
            CSS <p>80%</p> 
         </SkillP>
         <Graph>
           <div class="progressbar2" role="progressbar">
           </div>
         </Graph>
         <SkillP>
            Javascript  <p>80%</p>
         </SkillP>
         <Graph>
           <div class="progressbar3" role="progressbar">
           </div>
         </Graph>
         <SkillP>
           React <p>80%</p>
         </SkillP>
         <Graph>
           <div class="progressbar4" role="progressbar">
           </div>
         </Graph>
       </Skill>
      </ColLeft>
     );
 }


 export default AboutLeft;