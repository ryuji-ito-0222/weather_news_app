/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Flex, Image, Text } from '@chakra-ui/react';
import { createURL } from 'api';
import { selectPlace } from 'features/placeSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

interface DailyWeatherProps {
  idx: number;
}

const DailyWeather: React.FC<DailyWeatherProps> = ({ idx }) => {
  const prefecture = useSelector(selectPlace);
  const { data } = useSWR(createURL('forecast', `${prefecture},JP`));

  return (
    <Flex direction="column" align="center">
      <Text letterSpacing={2} fontWeight="bold">
        {new Date(data?.list[idx * 8].dt * 1000)
          .toLocaleDateString()
          .substring(5)}
      </Text>
      <Text as="h2" fontWeight="bold">
        {data?.list[idx * 8].weather[0].description}
      </Text>
      <Image
        width={50}
        height={50}
        alt="logo"
        src={`http://openweathermap.org/img/wn/${
          data?.list[idx * 8].weather[0].icon
        }.png`}
      />

      <Text color="red.500" fontWeight="bold">
        {Math.round(data?.list[idx * 8].main.temp_max)}
      </Text>
      <Text color="blue.500" fontWeight="bold">
        {Math.round(data?.list[idx * 8].main.temp_min)}
      </Text>
    </Flex>
  );
};

export default DailyWeather;
