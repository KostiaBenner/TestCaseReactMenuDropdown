import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const MENU_HEIGHT = '2em';

const buttonStyle = css`
  display: flex;
  align-items: center;
  min-height: ${MENU_HEIGHT};
  background-color: #fff;
  padding: 0 40px;
  color: #df9047;
  cursor: pointer;
  text-decoration: none;

  & svg {
    fill: currentColor;
  }

  ${({ styled: { isActive } }) =>
    isActive &&
    `
    color: #fff;
    background-color: #df9047;
  `}

  ${({ styled: { isFirst } }) =>
    isFirst &&
    `
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  `} 

  ${({ styled: { isLast } }) =>
    isLast &&
    `
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  `} 

  &:hover,
  :focus {
    color: #fff;
    background-color: #df9047;
  }

  ${({ styled: { open } }) =>
    open &&
    `
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  `} 
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 0px #fff;
  border-radius: 20px;
  height: ${MENU_HEIGHT};
`;

export const Button = styled.a`
  ${buttonStyle}
`;

export const MenuButton = styled(Link)`
  ${buttonStyle}
`;

export const MenuDropdown = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
`;

export const DropdownContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: relative;
  box-shadow: 0px 0px 10px 0px #fff;
  border-radius: 20px;

  & > a:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
