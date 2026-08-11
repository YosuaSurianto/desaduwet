"use client";

import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import type { MapPlace } from "@/data";

type VillageMapProps = {
  center: { lat: number; lng: number };
  places: MapPlace[];
};

/** Gold pulsing dot for a verified coordinate, dashed ring for a place we
 * only know the general area of — see the accuracy note in data/location.ts
 * for why some pins are deliberately not exact. */
function pinIcon(verified: boolean) {
  return L.divIcon({
    className: "",
    html: `<span class="${verified ? "map-pin pulse-ring" : "map-pin map-pin-approx"}"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

export default function VillageMap({ center, places }: VillageMapProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="village-map relative h-[22rem] w-full overflow-hidden rounded-3xl border border-cream-100/15 sm:h-[28rem] lg:h-[32rem]">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={14}
        dragging={active}
        scrollWheelZoom={active}
        touchZoom={active}
        doubleClickZoom={active}
        keyboard={active}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {places.map((place) => (
          <Marker
            key={place.name}
            position={[
              place.coordinates?.lat ?? center.lat,
              place.coordinates?.lng ?? center.lng,
            ]}
            icon={pinIcon(Boolean(place.coordinates))}
          >
            <Popup>
              <p className="font-semibold">{place.name}</p>
              <p className="mt-0.5 text-xs opacity-80">{place.address}</p>
              {!place.coordinates && (
                <p className="mt-1 text-xs italic opacity-70">Titik area, bukan lokasi presisi</p>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="glass-dense absolute inset-0 z-[500] flex items-center justify-center gap-2 text-sm font-medium text-cream-50"
        >
          <span className="pulse-ring h-2 w-2 rounded-full bg-gold-400" aria-hidden />
          Sentuh untuk jelajah peta
        </button>
      )}
    </div>
  );
}
