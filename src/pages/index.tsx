/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import Layout from 'components/Layout';
import WeatherCard from 'components/WeatherCard';

const Home: React.FC = () => (
  <Layout>
    <WeatherCard />
  </Layout>
);
export default Home;
