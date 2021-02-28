import styled from 'styled-components';


export const BodyRightWrapper = styled.div`
   max-width:412px;
 
`

export const BodyRightSliderSerchForm = styled.div`
    width:360px;
    height:188px;
    border:1px solid #000;
    background:#fff;
    box-sizing:border-box;
    margin-bottom:48px;
    padding:48px 48px 48px 48px;
   
`;

export const BodyRightSliderTitle = styled.div`
    font:bold 28px/38px arial;
    border-left:5px solid #0078ff;
    padding-left:15px;
    text-transfrom:uppercase;
    margin-bottom:24px;      
`;

export const BodyRightSliderContent = styled.div`
   max-width:310px;
   height:40px;
   box-sizing:border-box;
   color:rgb(78,78,78);
   display:block;
   position:relative;
   left:-20px;
   font:bold 16px/24px arial;
   outline:none;
`

export const BodyRightSliderContentForm = styled.div`
   max-width:310px;
   height:38px;
//    border:1px solid #000;
`;

export const BodyRightSliderContentFormGroup = styled.div`
    align-items:stretch;
    box-sizing:border-box;
    display:flex;
    font:bold 16px/24px arial;
    position:relative;
    width:319px;
    height:38px;
    `;

export const BodyRightSliderContentFormGroupInput = styled.input`
    width:230px;
    height:24px;
    border:1px solid #000;
    padding:6px 12px 6px 12px;
    // outline:none;

    &:focus {
        color:#212529;
        background-color:#fff;
        border-color:#86b7fe;
        outline:0;
        box-shadow: 0 0 0.25rem rgb(13 110 253 / 25%);
    }
     
`