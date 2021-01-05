import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark Switch"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      color={colorMode === 'dark' ? 'red.500' : 'gray.500'}
      backgroundColor="white"
      _focus={{ outline: 'none' }}
    />
  );
};
export default DarkModeSwitch;
