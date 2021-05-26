import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

import { COLORS } from '../../values/Colors'

export const HelloContainer = styled.div`
  display: flex;
  background: #000;
  justify-content: center;
  align-items: center;
  }
`;

export const HelloH1 = styled.h1`
  color: ${COLORS.BurlyWood};
  font-size: 48px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;