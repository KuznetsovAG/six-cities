export interface Cities {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export type Points = Omit<Cities, 'zoom'>;

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}
