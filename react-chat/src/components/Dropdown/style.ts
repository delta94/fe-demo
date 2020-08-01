import styled from 'styled-components';

import StyledSeperator from 'components/Seperator/style';

import { Align } from './type';

const DropdownItem = styled.div`
  margin: 12px 0;
`;

interface DropdownContainerProps {
  visible?: boolean;
  align?: Align;
}

const DropdownContainer = styled.div<DropdownContainerProps>`
  position: absolute;
  white-space: nowrap;
  padding: 4px 26px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);

  display: ${({ visible }) => (visible ? 'block' : 'none')};

  ${({ align }) => align}: 0;

  ${StyledSeperator} {
    margin: -3px -26px;
    width: calc(100% + 52px);
  }
`;

const StyledDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

export default StyledDropdown;

export { DropdownContainer, DropdownItem };
