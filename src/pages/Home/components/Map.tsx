import React, { useEffect } from "react";
import L, { LatLngTuple, Map } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  initialCoords: LatLngTuple;
}

const MapComponent: React.FC<MapComponentProps> = ({ initialCoords }) => {
  useEffect(() => {
    // Cria o mapa quando o componente for montado
    const map: Map = L.map("map").setView(initialCoords, 13);

    // Adiciona a camada de tile do OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
    }).addTo(map);

    // Adiciona um marcador ao mapa
    L.marker([initialCoords[0] + 0.0002, initialCoords[1] - 0.001])
      .addTo(map)
      .bindPopup("Empresa 1");
    // .openPopup();

    L.marker([initialCoords[0] + 0.008, initialCoords[1] + 0.0])
      .addTo(map)
      .bindPopup("Empresa 2")
      .openPopup();

    // Lembre-se de limpar o mapa quando o componente for desmontado
    return () => {
      map.remove();
    };
  }, [initialCoords]);

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default MapComponent;
