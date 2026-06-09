import { useQuery } from '@tanstack/react-query';
import { getCurrentOffer } from '../api/api';
import { OfferDTO } from '../api/dto';

interface UseGetOfferReturn {
  isLoading: boolean;
  offer?: OfferDTO;
}

export const useGetOffer = (offerId?: string): UseGetOfferReturn => {
  const { data, isLoading } = useQuery({
    queryKey: ['offer'],
    queryFn: () => getCurrentOffer(offerId),
  });

  return {
    offer: data,
    isLoading,
  };
};
