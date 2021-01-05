import React from 'react';
import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
import Header from './Header';

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title = 'Whether News',
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Stack as="main" width="100vw" maxWidth="800px" mx="auto" p={5}>
      {children}
    </Stack>
  </>
);

export default Layout;
