 import React from 'react';
import { 
    SubVisualFooterCol,
    SubVisualFooterContainer, 
    SubVisualFooterCopyBox, 
    SubVisualFooterCopyRightBox, 
    SubVisualFooterCreadits, 
    SubVisualFooterH1, 
    SubVisualFooterRow, 
    SubVisualFooterWrapper 
} from '../style/SubVisualFooterStyle';

function SubVisualFooter() {
     return (
       <SubVisualFooterWrapper>
          <SubVisualFooterContainer>
            <SubVisualFooterRow>
                <SubVisualFooterCol>
                 <SubVisualFooterCopyRightBox>
                     <SubVisualFooterCopyBox>
                         @ Copyright <span>DevFolio</span>.All Rights Reserved
                     </SubVisualFooterCopyBox>
                 </SubVisualFooterCopyRightBox>
                 <SubVisualFooterCreadits>
                     <SubVisualFooterH1>
                   Designed By <span>BootstrapMade</span>
                   </SubVisualFooterH1>
                 </SubVisualFooterCreadits>
                </SubVisualFooterCol>
            </SubVisualFooterRow>
          </SubVisualFooterContainer>
       </SubVisualFooterWrapper>
     );
 }


 export default SubVisualFooter;