import React from 'react';
import '../styles/globals.scss';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
