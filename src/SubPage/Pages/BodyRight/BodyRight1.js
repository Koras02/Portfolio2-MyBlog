import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BodyRightSliderContent, BodyRightSliderContentForm, BodyRightSliderContentFormGroup, BodyRightSliderContentFormGroupInput, BodyRightSliderSerchForm, BodyRightSliderTitle } from '../style/BodyRightStyle';

function BodyRight1() {
    return (
        <BodyRightSliderSerchForm>
            <BodyRightSliderTitle>
                SEARCH
          </BodyRightSliderTitle>
            <BodyRightSliderContent>
                <BodyRightSliderContentForm type="search" >
                    <BodyRightSliderContentFormGroup>
                        <BodyRightSliderContentFormGroupInput type="text" placeholder="Search for.." label="Search for..." />
                        <span class="input_btn">
                            <BiSearch class="Search1" size="20px" />
                        </span>
                    </BodyRightSliderContentFormGroup>
                </BodyRightSliderContentForm>
            </BodyRightSliderContent>
        </BodyRightSliderSerchForm>
    );
}


export default BodyRight1;