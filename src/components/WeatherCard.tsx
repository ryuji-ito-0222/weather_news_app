/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { createURL } from 'api';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { weatherImage } from 'data/weatherImage';
import { selectPlace } from '../features/placeSlice';

const WeatherCard: React.FC = () => {
  const prefecture = useSelector(selectPlace);
  const { data } = useSWR(createURL('weather', `${prefecture},JP`));

  const createWeatherOption = (desc: string, content: string | number) => (
    <Box px={1}>
      <Text as="span" fontWeight="bolder" color="gray.500">
        {desc}
      </Text>
      <Text as="strong" ml={2}>
        {content}
      </Text>
    </Box>
  );

  return !data ? (
    <Spinner mx="auto" size="xl" mt={20} />
  ) : (
    <Box py={3} borderWidth="2px" borderRadius="lg" maxWidth="500px" mx="auto">
      <Heading
        as="h3"
        fontWeight="bold"
        textAlign="center"
        fontSize="18px"
        color="gray.500"
        mb={2}
      >
        {data?.name}の現在の天気
      </Heading>
      <Image
        width={350}
        height={230}
        src={weatherImage[data?.weather[0].main]}
        alt={data?.weather[0].main}
      />
      <Flex direction="column">
        {createWeatherOption('現在の天気', data?.weather[0].description)}
        {createWeatherOption('現在の気温', `${data?.main.temp}℃`)}
        {createWeatherOption('今日の最高気温', `${data?.main.temp_max}℃`)}
        {createWeatherOption('今日の最低気温', `${data?.main.temp_min}℃`)}
      </Flex>
    </Box>
  );
};

export default WeatherCard;
