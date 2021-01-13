 import React from 'react';
 import {NumberHeader,NumberHeaderH1,NumberHeaderP} from './PageNumberStyle'

function PageNumber() {
     return (
        <NumberHeader>
            <NumberHeaderH1>
                Prev
            </NumberHeaderH1>
            <NumberHeaderP>
                1
            </NumberHeaderP>
            <NumberHeaderP>
                2
            </NumberHeaderP>
            <NumberHeaderP>
                3
            </NumberHeaderP>
            <NumberHeaderP>
                4
            </NumberHeaderP>
            <NumberHeaderP>
                5
            </NumberHeaderP>
            <NumberHeaderP>
                6
            </NumberHeaderP>
            <NumberHeaderH1>
                Next
            </NumberHeaderH1>
        </NumberHeader>
     );
 }


 export default PageNumber;