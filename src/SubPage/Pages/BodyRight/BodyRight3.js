import React from 'react';
import {
    BodyRight3Title,
    BodyRight3Wrapper,
    BodyRightContent,
    BodyRightListContainer,
    BodyRightListContainerList,
    BodyRightListContainerListLink,
} from './style/BodyRight3Style';
import './style/BodyRight3Style.scss'


function BodyRight3() {
    return (
        <BodyRight3Wrapper>
            <BodyRight3Title>ARCHIVES</BodyRight3Title>
            <BodyRightContent>
                <BodyRightListContainer>
                    <BodyRightListContainerList>
                        <BodyRightListContainerListLink to="/">September, 2017</BodyRightListContainerListLink>
                    </BodyRightListContainerList>
                    <BodyRightListContainerList>
                        <BodyRightListContainerListLink to="/">April, 2017.</BodyRightListContainerListLink>
                    </BodyRightListContainerList>
                    <BodyRightListContainerList>
                        <BodyRightListContainerListLink to="/">Nam quo autem exercitationem.</BodyRightListContainerListLink>
                    </BodyRightListContainerList>
                    <BodyRightListContainerList>
                        <BodyRightListContainerListLink to="/">Atque placeat maiores nam quo autem</BodyRightListContainerListLink>
                    </BodyRightListContainerList>
                    <BodyRightListContainerList>
                        <BodyRightListContainerListLink to="/">Nam quo autem exercitationem.</BodyRightListContainerListLink>
                    </BodyRightListContainerList>
                </BodyRightListContainer>
            </BodyRightContent>
        </BodyRight3Wrapper>
    );
}


export default BodyRight3;