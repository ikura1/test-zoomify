import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./modules/L.TileLayer.Zoomify";
import "./css/index.css";

let map = L.map("photo").setView(new L.LatLng(0, 0), 0);
L.tileLayer
  .zoomify("http://thematicmapping.org/playground/zoomify/books/", {
    width: 5472,
    height: 3648,
    tolerance: 0.8,
    attribution: "Photo: Bjørn Sandvik"
  })
  .addTo(map);
