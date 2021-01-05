import React from 'react';
import NextLink from 'next/link';
import { Flex, Stack, Heading, Link } from '@chakra-ui/react';
import DarkModeSwitch from 'components/DarkModeSwitch';
import Layout from '../components/Layout';

const Home: React.FC = () => (
  <Stack
    as="main"
    align="center"
    display="grid"
    placeItems="center"
    height="100vh"
  >
    <Layout>
      <Flex direction="column" maxWidth="700px" align="center">
        <DarkModeSwitch />
      </Flex>
      <Flex flexDirection="column" maxWidth="700px" align="center">
        <Heading as="h1" size="2xl" fontWeight="bold" color="red.500" my={5}>
          Next.js with Chakra UI
        </Heading>
        <NextLink href="/about">
          <Link color="blue.500" fontWeight="bold" my={5}>
            go about
          </Link>
        </NextLink>
      </Flex>
    </Layout>
  </Stack>
);

export default Home;
