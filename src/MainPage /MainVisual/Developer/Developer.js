import React from 'react';
import {
    DeveloperWrapper,
    DeveloperH1,
    DeveloperP,
    DeveloperP1,
    DeveloperGraph,
    DeveloperPrecent} from './DeveloperStyle'

function Developer() {
 

     return (
       <DeveloperWrapper id="Developer">
         <DeveloperH1>My Developer</DeveloperH1>
         <DeveloperP>총 개발 기간</DeveloperP>
         <DeveloperGraph>
             <DeveloperP1>HTML/CSS/JS</DeveloperP1>
             <DeveloperP1>React/Vue.js</DeveloperP1>
             <DeveloperPrecent>
               75%
             </DeveloperPrecent>
             <DeveloperPrecent>
               25%
            </DeveloperPrecent>
        
         </DeveloperGraph>
       </DeveloperWrapper>
     );
 }


 export default Developer;