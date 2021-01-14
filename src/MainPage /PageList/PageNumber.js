import React, { useState } from 'react';
import one from './List/1page/one';
import three from './List/1page/three';
import two from './List/1page/two';
import PageNation from './PageNation';
import {NumberHeader,NumberHeaderH1,NumberHeaderP} from './PageNumberStyle'

 
 
function PageNumber({ onIncrease, onDecrease }) {
    const [comp, setComp] = useState(PageNation);
     
     return (
       <>
        <main children={comp}/>
        <NumberHeader>
            <NumberHeaderH1 onClick={onDecrease}>Prev
            </NumberHeaderH1>
            <NumberHeaderP
            onClick={() => setComp(PageNation)}>
                1
            </NumberHeaderP>
            <NumberHeaderP 
            onClick={() => setComp(one)}>
                2
            </NumberHeaderP>
            <NumberHeaderP 
            onClick={() => setComp(two)}>
                3
            </NumberHeaderP>
            <NumberHeaderP
            onClick={() => setComp(three)}>
                4
            </NumberHeaderP>
            <NumberHeaderP>
                5
            </NumberHeaderP>
            <NumberHeaderP>
                6
            </NumberHeaderP>
            <NumberHeaderH1 onClick={onIncrease}>Next
            </NumberHeaderH1>
        </NumberHeader>
        </>
     );
 }


 export default PageNumber;