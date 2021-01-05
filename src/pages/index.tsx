import React from 'react';
import Layout from 'components/Layout';
import WeatherCard from 'components/WeatherCard';
import WeeklyWeather from 'components/WeeklyWeather';

const Home: React.FC = () => (
  <Layout>
    <WeatherCard />
    <WeeklyWeather />
  </Layout>
);
export default Home;
