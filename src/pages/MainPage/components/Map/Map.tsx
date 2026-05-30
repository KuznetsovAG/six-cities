import { useRef, useEffect } from 'react';
import { Marker, layerGroup } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { Cities } from '../../utils/types';
import { useMap } from '../../../../hooks';
import { Offers } from '../../../../components/PlaceCard/utils/types';
import { currentCustomIcon, defaultCustomIcon } from '../../utils/constants';

interface MapProps {
  city: Cities;
  points: Offers[];
  selectId: string | null;
  height?: string;
}

export const Map = ({
  city,
  points,
  selectId,
  height,
}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });
  const selectPoint = points.find((item) => item.id === selectId);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectPoint && selectPoint.id === point.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectPoint]);

  return <div style={{ height: `${height ?? '705px'}` }} ref={mapRef}></div>;
};
