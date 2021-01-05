import React, { createContext } from 'react';
import { Select as SelectValue } from '@chakra-ui/react';
import { prefectures } from 'data/prefectures';
import { prefectureCode } from 'data/prefectureCode';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlace, setPlace } from 'features/placeSlice';

export const PlaceContext = createContext('');

const Select: React.FC = () => {
  const place = useSelector(selectPlace);
  const dispatch = useDispatch();

  return (
    <SelectValue
      placeholder="場所の選択"
      value={place}
      onChange={(e) => dispatch(setPlace(e.target.value))}
      width="200px"
      mr="3"
      borderColor="white"
      backgroundColor="white"
      color="black"
    >
      {prefectures.map((p) => (
        <option key={p.code} value={prefectureCode[p.code]?.en}>
          {p.name}
        </option>
      ))}
    </SelectValue>
  );
};

export default Select;
