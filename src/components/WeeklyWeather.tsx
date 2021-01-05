/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Flex } from '@chakra-ui/react';
import { createURL } from 'api';
import { selectPlace } from 'features/placeSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

const WeeklyWeather: React.FC = () => {
  const prefecture = useSelector(selectPlace);
  const { data } = useSWR(createURL('weather', `${prefecture},JP`));
  console.log(data);

  return (
    <Flex>
      <h1>Hello</h1>
    </Flex>
  );
};
export default WeeklyWeather;
