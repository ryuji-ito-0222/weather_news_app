import React from 'react';
import NextLink from 'next/link';
import { Stack, Link, Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';

const About: React.FC = () => (
  <Stack as="main" align="center" height="100vh">
    <Flex flexDirection="column" align="center" my="auto">
      <Layout>
        <NextLink href="/">
          <Link
            color="blue.400"
            fontWeight="bold"
            display="block"
            my="10"
            fontSize={20}
          >
            back home
          </Link>
        </NextLink>
      </Layout>
    </Flex>
  </Stack>
);

export default About;
