import React, { createContext } from 'react';
import { Select } from '@chakra-ui/react';
import { prefectures } from 'data/prefectures';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlace, setPlace } from 'features/placeSlice';

export const PlaceContext = createContext('');

const SelectPrefecture: React.FC = () => {
  const place = useSelector(selectPlace);
  const dispatch = useDispatch();

  return (
    <Select
      mr="3"
      width="180px"
      color="gray.500"
      borderColor="white"
      backgroundColor="white"
      value={place}
      onChange={(e) => dispatch(setPlace(e.target.value))}
    >
      {prefectures.map((p) => (
        <option key={p.id} value={p.en}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectPrefecture;
