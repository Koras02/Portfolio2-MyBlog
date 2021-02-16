 import React from 'react';
 import {
     LanguageWrapper,
     LanguageHeaderH1,
     LanguageHeaderP,
     LanguageHeaderForm,
     Img
    } from './LanguageStyle'

const homeObjThree = ({
  headLine,
  description,
  Img2,
  Img3,
  Img4
}) => {
     return (
        <LanguageWrapper id="Language">
            <LanguageHeaderH1>{headLine}</LanguageHeaderH1>
            <LanguageHeaderP>{description}</LanguageHeaderP>
            <LanguageHeaderForm href="https://github.com/Koras02">
                <Img src={Img2}/>
            </LanguageHeaderForm>
            <LanguageHeaderForm href="https://discord.com/channels/@me">
                <Img src={Img3}/>
            </LanguageHeaderForm>
            <LanguageHeaderForm href="/">
                <Img src={Img4}/>
            </LanguageHeaderForm>
            <LanguageHeaderForm>React</LanguageHeaderForm>
            <LanguageHeaderForm>Vue.js</LanguageHeaderForm>
        </LanguageWrapper>
     );
 }


 export default homeObjThree;