import { useQuery } from '@tanstack/react-query';
import { getOffers } from '../api/api';
import { Offers } from '../../../components/PlaceCard/utils/types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOffersList } from '../mainPageSlice/mainPageSlice';

interface UseRentalOffersReturn {
  data: Offers[];
  isLoading: boolean;
}

export const useRentalOffers = (): UseRentalOffersReturn => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ['offers'],
    queryFn: getOffers,
  });

  useEffect(() => {
    if (data) {
      dispatch(setOffersList(data));
    }
  }, [data, dispatch]);

  return {
    data: data ?? [],
    isLoading,
  };
};
