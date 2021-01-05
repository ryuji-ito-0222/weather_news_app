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
  const place = useSelector(selectPlace);
  const { data } = useSWR(createURL('weather', `${place},JP`));
  console.log(data);

  return !data ? (
    <Spinner mx="auto" size="xl" mt={20} />
  ) : (
    <Box p={3} borderWidth="2px" borderRadius="lg" maxWidth="500px" mx="auto">
      <Heading
        as="h3"
        fontWeight="bold"
        textAlign="center"
        fontSize="18px"
        mb={2}
      >
        {data?.name}の現在の天気
      </Heading>
      <Image
        width={300}
        height={250}
        src={weatherImage[data?.weather[0].main]}
        alt={data?.weather[0].main}
      />
      <Flex direction="column">
        <Box>
          <Text as="span">現在の天気:</Text>
          <Text as="strong" ml={2}>
            {data?.weather[0].description}
          </Text>
        </Box>
        <Box>
          現在の気温:
          <Text as="strong" ml={2}>
            {Math.floor(data?.main.temp)}℃
          </Text>
        </Box>
        <Box>
          今日の最高気温:
          <Text as="strong" ml={2}>
            {Math.floor(data?.main.temp_max)}℃
          </Text>
        </Box>
        <Box>
          今日の最低気温:
          <Text as="strong" ml={2}>
            {Math.floor(data?.main.temp_min)}℃
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default WeatherCard;
