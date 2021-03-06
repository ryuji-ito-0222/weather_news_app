import React from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';
import SelectPrefecture from './SelectPrefecture';

const Header: React.FC = () => (
  <Stack
    as="header"
    py={2}
    px={4}
    top={0}
    width="100vw"
    position="sticky"
    borderRadius="0 0 4px 4px"
    backgroundColor="blue.100"
    zIndex={100}
  >
    <Flex
      width="100%"
      maxWidth="800px"
      justifyContent="space-between"
      mx="auto"
      align="center"
    >
      <Heading as="h1" flex={1} color="gray.500" fontSize="20px" mr={3}>
        Weather News
      </Heading>
      <Flex>
        <SelectPrefecture />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  </Stack>
);

export default Header;
