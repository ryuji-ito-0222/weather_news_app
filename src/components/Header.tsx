import React from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';
import Select from './Select';

const Header: React.FC = () => (
  <Stack as="header" backgroundColor="blue.200" py={3} px={5} width="100vw">
    <Flex
      width="100%"
      maxWidth="800px"
      justifyContent="space-between"
      mx="auto"
      align="center"
    >
      <Heading as="h1" flex={1}>
        天気予報
      </Heading>
      <Flex>
        <Select />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  </Stack>
);

export default Header;
