import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01BF71': '#01BF71')};
  white-space:nowrap;
  padding ${({big}) => (big ? '14px 48p' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#010606')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline:none;
  border:none;
  cursor: pointer;
  text-decoration:none;
  display:flex;
  justify-content: cetner;
  align-items:center;
  transition:all 0.2s ease-in-out;


  &:hover {
      transition: all 0.2s ease-in-out;
      background: ${({ primary }) =>
    (primary ? '#fff' : '#01BE71')}
  }
`;