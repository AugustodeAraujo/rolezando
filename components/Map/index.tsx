'use client'

import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    lat: number
    long: number
  }
}

export type MapProps = {
  places?: Place[]
}

export default function Map({ places }: MapProps) {
  return (
    <MapContainer
    className='z-10'
      style={{
        height: '100vh',
        width: '100vw'
      }}
      center={[-15.7838129, -47.8801398]}
      zoom={18}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, slug, name, location }) => {
        const { lat, long } = location

        return (
          <Marker
            key={`place-${id}`}
            icon={
              new L.Icon({
                iconUrl: MarkerIcon.src,
                iconRetinaUrl: MarkerIcon.src,
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: MarkerShadow.src,
                shadowSize: [41, 41]
              })
            }
            position={[lat, long]}
            title={name}
          >
            {/* <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
          </Marker>
        )
      })}
    </MapContainer>
  )
}
