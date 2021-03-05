import axios from 'axios';
import {Character} from '../models/Character';

export const getCharacterById = async (index: number) => {
  const ind = parseInt(index + '');
  const data = await axios.get<Character>(
    'https://rickandmortyapi.com/api/character/' + ind,
  );

  return data.data;
};
