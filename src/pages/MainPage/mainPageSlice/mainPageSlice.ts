import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Offers } from '../../../components/PlaceCard/utils/types';
import { RootState } from '../../../store/rootStore';
import { SortType } from '../utils/types';
import { OfferDTO } from '../api/dto';

export interface InitialState {
  offer: OfferDTO;
  offersList: Offers[];
  currentCity: string;
  currentSort: SortType;
}

const initialState: InitialState = {
  offer: {} as OfferDTO,
  offersList: [],
  currentCity: 'Paris',
  currentSort: SortType.Popular,
};

export const mainPageSlice = createSlice({
  name: 'offersList',
  initialState,
  reducers: {
    setOffersList: (state, { payload }: PayloadAction<Offers[]>) => {
      state.offersList = payload;
    },
    setCurrentCity: (state, { payload }: PayloadAction<string>) => {
      state.currentCity = payload;
    },
    setCurrentSort: (state, { payload }: PayloadAction<SortType>) => {
      state.currentSort = payload;
    },
  },
});

export const { setOffersList, setCurrentCity, setCurrentSort } =
  mainPageSlice.actions;

const selectOffersList = (state: RootState) => state.mainPage.offersList;
export const selectCurrentCity = (state: RootState) =>
  state.mainPage.currentCity;
export const selectCurrentSort = (state: RootState) =>
  state.mainPage.currentSort;

export const selectOffersByCity = createSelector(
  [selectOffersList, selectCurrentCity],
  (offersList, currentCity) =>
    offersList.filter((offer) => offer.city.name === currentCity)
);

export const selectSortedOffers = createSelector(
  [selectOffersByCity, selectCurrentSort],
  (offers, currentSort) => {
    switch (currentSort) {
      case SortType.PriceLowToHigh:
        return [...offers].sort((a, b) => a.price - b.price);
      case SortType.PriceHighToLow:
        return [...offers].sort((a, b) => b.price - a.price);
      case SortType.TopRatedFirst:
        return [...offers].sort((a, b) => b.rating - a.rating);
      case SortType.Popular:
      default:
        return offers;
    }
  }
);

export default mainPageSlice.reducer;
