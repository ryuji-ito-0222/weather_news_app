/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import useSWR from 'swr';
import { createURL } from 'api';
import { useSelector } from 'react-redux';
import { Flex, Heading } from '@chakra-ui/react';
import { selectPlace } from 'features/placeSlice';
import DailyWeather from './DailyWeather';

const WeeklyWeather: React.FC = () => {
  const prefecture = useSelector(selectPlace);
  const { data } = useSWR(createURL('forecast', `${prefecture},JP`));
  console.log(data?.list);

  return (
    <Flex direction="column">
      <Heading
        as="h2"
        fontSize="18px"
        color="gray.500"
        my={2}
        textAlign="center"
      >
        5日間の天気
      </Heading>
      <Flex justifyContent="space-between">
        <DailyWeather idx={0} />
        <DailyWeather idx={1} />
        <DailyWeather idx={2} />
        <DailyWeather idx={3} />
        <DailyWeather idx={4} />
      </Flex>
    </Flex>
  );
};
export default WeeklyWeather;
