import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu, MenuButton as BaseMenuButton, MenuItem as BaseMenuItem, menuItemClasses, CssTransition, PopupContext } from '@mui/base';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export const colors = {
  color_1: '#80e285',
  color_2_half: '#00876a9d',
  color_2: '#00876a',
  color_3: '#f6f0dc',
  color_4: '#37b388',
  color_5: '#c8e5a7',
  color_grey: '#010101',
  color_white: '#f6f6f6',
};
export const MenuTransitions = ({ linkName }) => {
    const navigate = useNavigate();
	const handleMenuClick = (menuItem) => () => navigate(menuItem);

  return (
    <Dropdown>
      <StyledMenuButton>{linkName.main.name}</StyledMenuButton>
      <StyledMenu>
        {linkName.buttons.map((link) => (
          <StyledMenuItem key={link.name} onClick={handleMenuClick(link.link)}>
            {link.name}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </Dropdown>
  );
};

const StyledMenuButton = styled(BaseMenuButton)(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 600,
  fontSize: '0.875rem',
  padding: '8px 16px',
  borderRadius: '8px',
  color: colors.color_grey,
  backgroundColor: colors.color_3,
  border: `1px solid ${colors.color_3}`,
  cursor: 'pointer',
  transition: 'all 150ms ease',

  '&:hover': {
    backgroundColor: colors.color_2,
	color: colors.color_white,
    borderColor: theme.palette.mode === 'dark' ? colors.color_3 : colors.color_white,
  },

  '&:focus-visible': {
    boxShadow: `0 0 0 4px ${theme.palette.mode === 'dark' ? colors.color_1 : colors.color_5}`,
    outline: 'none',
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  zIndex: 2000,
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: '0.875rem',
  padding: '6px',
  margin: '12px 0',
  minWidth: '200px',
  borderRadius: '12px',
  backgroundColor: theme.palette.mode === 'dark' ? colors.color_grey : colors.color_white,
  border: `1px solid ${theme.palette.mode === 'dark' ? colors.color_2 : colors.color_3}`,
  color: theme.palette.mode === 'dark' ? colors.color_5 : colors.color_grey,
  boxShadow: `0px 4px 30px ${theme.palette.mode === 'dark' ? colors.color_2 : colors.color_3}`,
  transition: 'opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48)',

  '&.closed': {
    opacity: 0,
    transform: 'scale(0.95, 0.8)',
    transition: 'opacity 200ms ease-in, transform 200ms ease-in',
  },
  '&.open': {
    opacity: 1,
    transform: 'scale(1, 1)',
  },
}));

const StyledMenuItem = styled(BaseMenuItem)(({ theme }) => ({
  listStyle: 'none',
  padding: '8px',
  borderRadius: '8px',
  cursor: 'default',
  userSelect: 'none',

  [`&.${menuItemClasses.focusVisible}`]: {
    outline: `3px solid ${theme.palette.mode === 'dark' ? colors.color_1 : colors.color_3}`,
    backgroundColor: theme.palette.mode === 'dark' ? colors.color_2_half : colors.color_5,
  },

  [`&.${menuItemClasses.disabled}`]: {
    color: theme.palette.mode === 'dark' ? colors.color_2 : colors.color_3,
  },

  '&:hover:not(.disabled)': {
    backgroundColor: colors.color_2,
    color: colors.color_white,
  },
}));

StyledMenu.propTypes = { ownerState: PropTypes.object.isRequired };

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = useContext(PopupContext);

  if (!popupContext) {
    throw new Error('The `AnimatedListbox` component must be used within a `Popup` component');
  }

  const verticalPlacement = popupContext.placement.split('-')[0];

  return (
    <CssTransition className={`placement-${verticalPlacement}`} enterClassName="open" exitClassName="closed">
      <StyledMenu {...other} ref={ref} />
    </CssTransition>
  );
});

AnimatedListbox.propTypes = { ownerState: PropTypes.object.isRequired };
