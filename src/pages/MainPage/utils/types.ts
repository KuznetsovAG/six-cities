export interface Cities {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export type Points = Omit<Cities, 'zoom'>;
