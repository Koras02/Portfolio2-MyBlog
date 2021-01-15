import styled from 'styled-components';

export const FormWrap = styled.div`
  display:block;
  overflow:hidden
  transition: all .5 ease-in-out;
`;

export const FormHeader = styled.div`
 
  overflow:hidden;
  border: 1px solid #000;
  background:#fff;  
  transition: all .5 ease-in-out;
`;

export const FormInput = styled.div`
  width:20%;
  hieght:20px;
   
  animation-duration: 0.5s;
  animation-name: slideOut;
  
  @keyframes slidOut {
    from {
      position:asolute;
      top:30%;
      height:100px;
      transition: 5s;
    }
    to {
      position:absolute;
      top:20%;
      height:200px;
    }

  }
  `;