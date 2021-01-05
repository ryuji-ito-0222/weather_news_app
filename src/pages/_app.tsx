/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import '../styles/globals.scss';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from 'app/store';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher: (url: string) => axios(url).then((r) => r.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  </Provider>
);

export default App;
