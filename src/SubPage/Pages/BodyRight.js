import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BodyRightSliderContent, BodyRightSliderContentForm, BodyRightSliderContentFormGroup, BodyRightSliderContentFormGroupInput, BodyRightSliderSerchForm, BodyRightSliderTitle, BodyRightWrapper } from './style/BodyRightStyle'
import './style/BodyRight.scss'
export function BodyRight() {
  return (
    <>
      <BodyRightWrapper>
        <BodyRightSliderSerchForm>
          <BodyRightSliderTitle>
            Search
          </BodyRightSliderTitle>
          <BodyRightSliderContent>
            <BodyRightSliderContentForm type="search" >
              <BodyRightSliderContentFormGroup>
                <BodyRightSliderContentFormGroupInput type="text" placeholder="Search for.." label="Search for..." />
                <span class="input_btn">
                  <BiSearch class="Search1" size={10} />
                </span>
              </BodyRightSliderContentFormGroup>
            </BodyRightSliderContentForm>
          </BodyRightSliderContent>
        </BodyRightSliderSerchForm>
      </BodyRightWrapper>
    </>
  );
}


export default BodyRight;