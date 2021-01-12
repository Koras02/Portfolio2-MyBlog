import React from 'react';
import {
    MenuHeaderWrapper,
    MenuHeaderH1Link,
    MenuHeaderP} from './HomeStyle';

function Home() {
     return (
        <MenuHeaderWrapper>
            <MenuHeaderH1Link to="/ss">홈페이지 바로이동</MenuHeaderH1Link>
            <MenuHeaderP to="/ss">디스코드</MenuHeaderP>
            <MenuHeaderP to="/ss">홈페이지</MenuHeaderP>
            <MenuHeaderP>홈페이지</MenuHeaderP>
            <MenuHeaderP>홈페이지</MenuHeaderP>
        </MenuHeaderWrapper>
     );
 }


 export default Home;