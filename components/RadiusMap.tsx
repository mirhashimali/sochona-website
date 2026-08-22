"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Circle, Marker, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconAnchor: [12, 41],
});

function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [lat, lng, map]);
  return null;
}

// This new function allows you to click anywhere on the map to drop the pin
function MapClickLocator({ setLat, setLng }: { setLat?: (lat: number) => void; setLng?: (lng: number) => void }) {
  useMapEvents({
    click(e) {
      if (setLat && setLng) {
        setLat(e.latlng.lat);
        setLng(e.latlng.lng);
      }
    },
  });
  return null;
}

export default function RadiusMap({
  lat,
  lng,
  radius,
  unit,
  targetType,
  setLat,
  setLng,
}: {
  lat: number;
  lng: number;
  radius: number;
  unit: "km" | "miles";
  targetType: "city" | "radius";
  setLat?: (lat: number) => void;
  setLng?: (lng: number) => void;
}) {
  const radiusInMeters = unit === "miles" ? radius * 1609.34 : radius * 1000;

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <RecenterMap lat={lat} lng={lng} />
      <MapClickLocator setLat={setLat} setLng={setLng} />
      <Marker position={[lat, lng]} icon={customIcon} />
      {targetType === "radius" && (
        <Circle
          center={[lat, lng]}
          radius={radiusInMeters}
          pathOptions={{ color: "#06b6d4", fillColor: "#06b6d4", fillOpacity: 0.25 }}
        />
      )}
    </MapContainer>
  );
}