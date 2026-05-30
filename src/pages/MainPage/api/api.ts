import axios from 'axios';
import { Offers } from '../../../components/PlaceCard/utils/types';

export const getOffers = async (): Promise<Offers[]> => {
  try {
    const response = await axios.get<Offers[]>(
      'https://16.design.htmlacademy.pro/six-cities/offers'
    );
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Server returned invalid data structure.');
    }
    return response.data;
  } catch {
    throw new Error('An unexpected error occurred: error');
  }
};
