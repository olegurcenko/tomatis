import React from 'react';
import { Box } from '@mui/material';
import Draggable from 'react-draggable';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { colors } from '../../media/colorsModule';

export const DraggablePortal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const targetLink = location.pathname === '/tomatis' ? '/' : '/tomatis';

  return (
    <Draggable
      bounds="parent"  // Ensure the draggable element stays within the viewport
      defaultPosition={{ x: 0, y: 0 }}
    >
      <Box
        sx={{
		display: { xs: 'none', md: 'flex' },
        	position: 'fixed',
        	bottom: 20,
        	right: 20,
        	zIndex: 1000,
        	width: '80px',
        	height: '80px',
        	alignItems: 'center',
        	justifyContent: 'center',
        	borderRadius: '50%',
        	cursor: 'move',
        	backgroundColor: colors.color_white,
        	'&:before': {
            	content: '""',
            	position: 'absolute',
            	top: -15,
            	left: -15,
            	width: '30px',
            	height: '30px',
            	backgroundColor: colors.color_black,
            	borderRadius: '50%',
            	backgroundImage: 'url(https://www.svgrepo.com/show/55607/move.svg)',
            	backgroundSize: '15px',
				backgroundColor: colors.color_white,
            	backgroundPosition: 'center',
            	backgroundRepeat: 'no-repeat',
            	display: 'none',  // Hide the handle on mobile
          },
          '@media (min-width: 768px)': {  // Show the handle on desktop
            '&:before': {
              display: 'block',
              cursor: 'grab',
            },
          },
        }}
      >
        {/* Button for desktop */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },  // Hide on mobile, show on desktop
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <button
            onClick={() => navigate(targetLink)}
            style={{
              height: '100%',
              width: '100%',
              border: 'none',
              borderRadius: '50%',
              backgroundColor: colors.color_black,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',  // Ensure button is within the Box
            }}
          >
            <ChangeCircleIcon sx={{ height: 60, width: 60, color: colors.color_2 }} />
          </button>
        </Box>
      </Box>
    </Draggable>
  );
};
