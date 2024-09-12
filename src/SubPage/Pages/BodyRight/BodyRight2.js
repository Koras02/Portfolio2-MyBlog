import React from 'react';
import { BodyRight2SidebarTitle, BodyRight2SlideListLink, BodyRight2SliderContent, BodyRight2SliderList, BodyRight2SliderListli, BodyRight2SliderListUl, BodyRight2Wrapper } from './style/BodyRight2Style'
import './style/BodyRight2Style.scss'

function BodyRight2() {
    return (
        <BodyRight2Wrapper>
            <BodyRight2SidebarTitle>Receent Post</BodyRight2SidebarTitle>
            <BodyRight2SliderContent>
                <BodyRight2SliderList>
                    <BodyRight2SliderListUl>
                        <BodyRight2SliderListli className="Link">
                            <BodyRight2SlideListLink>Atque placeat maiores.</BodyRight2SlideListLink>
                        </BodyRight2SliderListli>
                        <BodyRight2SliderListli className="Link">
                            <BodyRight2SlideListLink>Lorem ipsum dolor sit amet consectetur</BodyRight2SlideListLink>
                        </BodyRight2SliderListli>
                        <BodyRight2SliderListli className="Link">
                            <BodyRight2SlideListLink>Nam quo autem exercitationem.</BodyRight2SlideListLink>
                        </BodyRight2SliderListli>
                        <BodyRight2SliderListli className="Link">
                            <BodyRight2SlideListLink to="/">Atque placeat maiores nam quo autem</BodyRight2SlideListLink>
                        </BodyRight2SliderListli>
                        <BodyRight2SliderListli className="Link">
                            <BodyRight2SlideListLink to="/">Nam quo autem exercitationem.</BodyRight2SlideListLink>
                        </BodyRight2SliderListli>
                    </BodyRight2SliderListUl>
                </BodyRight2SliderList>
            </BodyRight2SliderContent>
        </BodyRight2Wrapper>
    );
}


export default BodyRight2;