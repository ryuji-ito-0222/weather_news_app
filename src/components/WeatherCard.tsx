/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { createURL } from 'api';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectPlace } from '../features/placeSlice';

const WeatherCard: React.FC = () => {
  const place = useSelector(selectPlace);
  const { data } = useSWR(createURL('weather', `${place},JP`));

  return !data ? (
    <Spinner mx="auto" size="xl" mt={20} />
  ) : (
    <Box p={3} borderWidth="1px" borderRadius="lg" maxWidth="500px" mx="auto">
      <Text as="h1" fontWeight="bold" textAlign="center">
        {data?.name}の現在の天気
      </Text>
      {data?.weather[0].main === 'Clouds' && (
        <Image width={300} height={300} src="/image/cloudy.jpg" alt="sonny" />
      )}
      {data?.weather[0].main === 'Rain' && (
        <Image width={300} height={300} src="/image/rain.jpg" alt="sonny" />
      )}
      {data?.weather[0].main === 'Clear' && (
        <Image width={300} height={300} src="/image/sonny.jpg" alt="sonny" />
      )}
      {data?.weather[0].main === 'Snow' && (
        <Image width={300} height={300} src="/image/snow.jpg" alt="sonny" />
      )}
      <Flex direction="column">
        <Box>
          現在の天気:
          <Text as="strong" ml={1}>
            {data?.weather[0].description}
          </Text>
        </Box>
        <Box>
          現在の気温:
          <Text as="strong" ml={1}>
            {Math.floor(data?.main.temp)}℃
          </Text>
        </Box>
        <Box>
          今日の最高気温:
          <Text as="strong" ml={1}>
            {Math.floor(data?.main.temp_max)}℃
          </Text>
        </Box>
        <Box>
          今日の最低気温:
          <Text as="strong" ml={1}>
            {Math.floor(data?.main.temp_min)}℃
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default WeatherCard;
