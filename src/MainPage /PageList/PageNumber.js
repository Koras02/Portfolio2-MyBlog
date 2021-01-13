 import React, { useState } from 'react';
import one from './List/1page/one';
import three from './List/1page/three';
import two from './List/1page/two';
import PageNation from './PageNation';
import {NumberHeader,NumberHeaderH1,NumberHeaderP} from './PageNumberStyle'




function PageNumber() {
    const [comp, setComp] = useState(PageNation);
         
    const prev = () => {
        this.setComp({
            comp: this.state.comp - 1
        })
    }

    const next = () => {
        this.setComp({
             comp: this.state.comp + 1
        })
    }

     return (
       <>
        <main children={comp} />
        <NumberHeader>
            <NumberHeaderH1 onClick={() => setComp(prev)}>Prev
            </NumberHeaderH1>
            <NumberHeaderP onClick={() => setComp(PageNation)}>
                1
            </NumberHeaderP>
            <NumberHeaderP onClick={() => setComp(one)}>
                2
            </NumberHeaderP>
            <NumberHeaderP onClick={() => setComp(two)}>
                3
            </NumberHeaderP>
            <NumberHeaderP onClick={() => setComp(three)}>
                4
            </NumberHeaderP>
            <NumberHeaderP>
                5
            </NumberHeaderP>
            <NumberHeaderP>
                6
            </NumberHeaderP>
            <NumberHeaderH1 onClick={() => setComp(next)}>
                Next
            </NumberHeaderH1>
        </NumberHeader>
        </>
     );
 }


 export default PageNumber;