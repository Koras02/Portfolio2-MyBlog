 import React from 'react';
 import {FormWrap, FormHeader,FormInput} from './SearchStyle'

function Search() {
     return (
            <FormWrap>
              <FormHeader>
                <FormInput type="Search" value="검색어를 입력하세요" require/>
                <FormInput type="Button" value="검색" require/>
              </FormHeader>
            </FormWrap>
     );
 }


 export default Search;