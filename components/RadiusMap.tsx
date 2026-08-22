"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Circle, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconAnchor: [12, 41],
});

function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
}

export default function RadiusMap({
  lat,
  lng,
  radius,
  unit,
  targetType,
}: {
  lat: number;
  lng: number;
  radius: number;
  unit: "km" | "miles";
  targetType: "city" | "radius";
}) {
  const radiusInMeters = unit === "miles" ? radius * 1609.34 : radius * 1000;

  return (
    <MapContainer center={[lat, lng]} zoom={11} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <RecenterMap lat={lat} lng={lng} />
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