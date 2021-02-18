import React from 'react';
import {  
     SubVisualHeadersWrapper, SubVisualHeaderTableCall
     } from '../../FrontPages/Styles/SubPageHeadersStyle';
import { SubVisualH1, SubVisualHeadersContainer, SubVisualP } from '../../FrontPages/Styles/SubPagStyle';
import SubVisualBody from './SubVisualBody';
// import SubVisualBody from './SubVisualBody';
// import SubVisualBack from './SubVisualBack';
 
 export function SubVisualHeader() {
      return (
         <>
        <SubVisualHeadersWrapper>
           <SubVisualHeaderTableCall>
               <SubVisualHeadersContainer>
                   <SubVisualH1>
                    Portfolio Details
                    </SubVisualH1>
                    <SubVisualP>
                      Home / Portfolio Details
                    </SubVisualP>
               </SubVisualHeadersContainer>
           </SubVisualHeaderTableCall>
           <SubVisualBody />
         </SubVisualHeadersWrapper>
         </>
      );
  }
 
 
  export default SubVisualHeader;