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
      placeholder="場所の選択"
      value={place}
      onChange={(e) => dispatch(setPlace(e.target.value))}
      width="180px"
      mr="3"
      borderColor="white"
      backgroundColor="white"
      color="gray.500"
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
