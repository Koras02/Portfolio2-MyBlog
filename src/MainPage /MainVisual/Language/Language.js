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
            <LanguageHeaderForm href="https://medium.com/level-up-web/amazingly-useful-html-css-and-javascript-tools-and-libraries-d73b10fbae29" 
            target="_blank">
                <Img src={Img2}/>
            </LanguageHeaderForm>
            <LanguageHeaderForm href="https://ko.reactjs.org/"
            target="blank">
                <Img src={Img3}/>
            </LanguageHeaderForm>
            <LanguageHeaderForm href="https://kr.vuejs.org/v2/guide/index.html">
                <Img src={Img4}/>
            </LanguageHeaderForm>
       
        </LanguageWrapper>
     );
 }


 export default homeObjThree;