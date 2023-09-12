import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="300px" height="40px" />
        <Typography variant='h5' pb="40px" mt="20px" sx={{color: '#000'}}>
          Made with ❤️ by Palak Desai
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
