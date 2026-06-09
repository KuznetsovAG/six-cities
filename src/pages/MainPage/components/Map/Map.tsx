import { useRef, useEffect, useMemo } from 'react';
import { Marker, layerGroup } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { Cities } from '../../utils/types';
import { useMap } from '../../../../hooks';
import { Offers } from '../../../../components/PlaceCard/utils/types';
import { currentCustomIcon, defaultCustomIcon } from '../../utils/constants';

interface MapProps {
  points: Offers[];
  selectId: string | null;
  height?: string;
}

export const Map = ({ points, selectId, height }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const city = useMemo<Cities>(() => {
    const locationCity = points[0].city;
    return {
      title: locationCity.name,
      lat: locationCity.location.latitude,
      lng: locationCity.location.longitude,
      zoom: locationCity.location.zoom,
    };
  }, [points]);
  const map = useMap({ mapRef, city });
  const selectPoint = useMemo(
    () => points.find((item) => item.id === selectId),
    [points, selectId]
  );

  useEffect(() => {
    if (map) {
      map.setView({ lat: city.lat, lng: city.lng }, city.zoom);
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
  }, [map, points, selectPoint, city]);

  return <div style={{ height: `${height ?? '980px'}` }} ref={mapRef}></div>;
};
