import React, { useState } from 'react';
import shortid from 'shortid';
import { Button, MenuButton, MenuDropdown, DropdownContent } from './style';
import { useRouteMatch } from 'react-router-dom';
import { ReactComponent as ArrowDown } from './arrow_down.svg';

const HeaderMenuDropdown = ({ text, dropdown, match, styled }) => {
  const [open, setOpen] = useState(false);

  const onMouseEnter = () => {
    setOpen(true);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  return (
    <MenuDropdown onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Button styled={{ ...styled, open, isActive: match }}>
        <span>{text}</span>
        <ArrowDown />
      </Button>

      <DropdownContent open={open}>
        {dropdown.map((item) => (
          <HeaderMenuButton key={shortid.generate()} {...item} />
        ))}
      </DropdownContent>
    </MenuDropdown>
  );
};

export default function HeaderMenuButton({
  url,
  text,
  dropdown,
  index,
  lastIndex,
}) {
  const match = useRouteMatch(url);
  const isDropdown = dropdown && dropdown.length !== 0;

  const styled = index !== undefined && {
    isFirst: index === 0,
    isLast: index === lastIndex,
  };

  return isDropdown ? (
    <HeaderMenuDropdown
      text={text}
      match={match}
      dropdown={dropdown}
      styled={styled}
    />
  ) : (
    <MenuButton
      to={url}
      styled={{ ...styled, isActive: match && match.isExact }}
    >
      {text}
    </MenuButton>
  );
}
