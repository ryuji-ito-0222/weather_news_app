/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectPlace } from 'features/placeSlice';
import useSWR from 'swr';
import { createURL } from 'api';
import Header from './Header';

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const place = useSelector(selectPlace);
  const { data } = useSWR(createURL('weather', `${place},JP`));

  return (
    <>
      <Head>
        <title>{data?.name}の天気</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Stack as="main" width="100vw" maxWidth="800px" mx="auto" p={5}>
        {children}
      </Stack>
    </>
  );
};

export default Layout;
