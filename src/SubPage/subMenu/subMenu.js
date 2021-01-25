import React from 'react';
import {
    MenuHeaderWrapper,
    MenuHeaderH1Link,
    MenuHeaderP} from './SubMenuStyle';

function SubMenu() {
     return (
        <MenuHeaderWrapper>
            <MenuHeaderH1Link to="/description">홈페이지 바로이동</MenuHeaderH1Link>
            <MenuHeaderP to="/ss">디스코드</MenuHeaderP>
            <MenuHeaderP to="/ss">홈페이지</MenuHeaderP>
            <MenuHeaderP>홈페이지</MenuHeaderP>
            <MenuHeaderP>홈페이지</MenuHeaderP>
        </MenuHeaderWrapper>
     );
 }


 export default SubMenu;