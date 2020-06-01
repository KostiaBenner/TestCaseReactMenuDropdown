import React from 'react';
import shortid from 'shortid';
import * as items from './HeaderMenu.json';
import { HeaderMenuContainer, Menu } from './style';
import HeaderMenuButton from './HeaderMenuButton';

export default function HeaderMenu() {
  return (
    <HeaderMenuContainer>
      <Menu>
        {items.default.map((item, i) => (
          <HeaderMenuButton
            key={shortid.generate()}
            index={i}
            lastIndex={items.default.length - 1}
            {...item}
          />
        ))}
      </Menu>
    </HeaderMenuContainer>
  );
}
