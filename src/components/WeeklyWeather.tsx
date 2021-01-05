/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import { createURL } from 'api';
import { selectPlace } from 'features/placeSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

const WeeklyWeather: React.FC = () => {
  const prefecture = useSelector(selectPlace);
  const { data } = useSWR(createURL('forecast', `${prefecture},JP`));
  console.log(data?.list);

  const createDailyWeather = (idx: number) => (
    <Flex direction="column" align="center">
      <Text as="h2" fontWeight="bold">
        {data?.list[(idx - 1) * 8].weather[0].description}
      </Text>
      <Image
        width={50}
        height={50}
        alt="logo"
        src={`http://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}.png`}
      />
    </Flex>
  );

  return (
    <Flex direction="column">
      <Heading
        as="h2"
        fontSize="18px"
        color="gray.500"
        mb={3}
        textAlign="center"
      >
        5日間の天気 (0時時点)
      </Heading>
      <Flex justifyContent="space-between">
        {createDailyWeather(1)}
        {createDailyWeather(2)}
        {createDailyWeather(3)}
        {createDailyWeather(4)}
        {createDailyWeather(5)}
      </Flex>
    </Flex>
  );
};
export default WeeklyWeather;
