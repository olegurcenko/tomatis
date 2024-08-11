import React from 'react';
import { Box, Typography } from "@mui/material";
import video from './videos/2024-07-28 02.37.43.mp4';
import { colors } from "../../media/colorsModule";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Reviews = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        marginInline: 'auto',
        width: '90%',
        position: 'relative',
        top: { xs: '90px', lg: '170px' },
        marginBottom: { xs: '110px', lg: '190px' },
        paddingBottom: '20px',
        borderRadius: '25px',
        paddingTop: '30px'
      }}
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'flex', lg: 'flex' },
          alignItems: 'center',
          flexDirection: 'row-reverse'
        }}
      >
        <Typography
          sx={{
            padding: '10px',
            backgroundColor: colors.color_2_half,
            marginInline: { xs: 'auto', md: '30px', lg: '30px' },
            maxWidth: '500px',
            width: '90%'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque expedita totam molestias impedit rerum sapiente, sequi voluptas hic voluptatem modi, ea cumque deleniti eum similique quod officiis ut ipsam!
        </Typography>
        <video
          style={{
            display: 'flex',
            marginInline: 'auto',
            height: isXs ? 'fit-content' : (isMd ? 'auto' : '400px'),
            width: isXs || isMd ? '90%' : 'auto'
          }}
          src={video}
          controls
        />
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex', lg: 'flex' },
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            padding: '10px',
            backgroundColor: colors.color_3,
            marginInline: { xs: 'auto', md: '30px', lg: '30px' },
            maxWidth: '500px',
            width: '90%'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque expedita totam molestias impedit rerum sapiente, sequi voluptas hic voluptatem modi, ea cumque deleniti eum similique quod officiis ut ipsam!
        </Typography>
        <video
          style={{
            display: 'flex',
            marginInline: 'auto',
            height: isXs ? 'fit-content' : (isMd ? 'auto' : '400px'),
            width: isXs || isMd ? '90%' : 'auto'
          }}
          src={video}
          controls
        />
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex', lg: 'flex' },
          alignItems: 'center',
          flexDirection: 'row-reverse'
        }}
      >
        <Typography
          sx={{
            padding: '10px',
            backgroundColor: colors.color_2_half,
            marginInline: { xs: 'auto', md: '30px', lg: '30px' },
            maxWidth: '500px',
            width: '90%'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque expedita totam molestias impedit rerum sapiente, sequi voluptas hic voluptatem modi, ea cumque deleniti eum similique quod officiis ut ipsam!
        </Typography>
        <video
          style={{
            display: 'flex',
            marginInline: 'auto',
            height: isXs ? 'fit-content' : (isMd ? 'auto' : '400px'),
            width: isXs || isMd ? '90%' : 'auto'
          }}
          src={video}
          controls
        />
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex', lg: 'flex' },
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            padding: '10px',
            backgroundColor: colors.color_3,
            marginInline: { xs: 'auto', md: '30px', lg: '30px' },
            maxWidth: '500px',
            width: '90%'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque expedita totam molestias impedit rerum sapiente, sequi voluptas hic voluptatem modi, ea cumque deleniti eum similique quod officiis ut ipsam!
        </Typography>
        <video
          style={{
            display: 'flex',
            marginInline: 'auto',
            height: isXs ? 'fit-content' : (isMd ? 'auto' : '400px'),
            width: isXs || isMd ? '90%' : 'auto'
          }}
          src={video}
          controls
        />
      </Box>
    </Box>
  );
};
