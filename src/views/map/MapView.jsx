import React from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { setMapRef } from '../../redux/App/appActions';
import MarkerCard from '../../components/MarkerCard';
import SearchBar from '../../components/SearchBar';

const MapView = (props) => {
  const handleZoomstart = () => {
    if (props.mapRef) {
      console.log(props.mapRef.leafletElement.getBounds());
    }
  };

  return (
    <>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="map-and-card-container">
        <div className="card-grid">
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
          <MarkerCard />
        </div>
        <Map
          ref={(ref) => {
            props.setMapRef(ref);
          }}
          onZoomEnd={() => handleZoomstart()}
          className="markercluster-map"
          center={[-22.0154, -47.8911]}
          zoom={14}
          maxZoom={16}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup>
            <Marker id="teste" position={[-22.054, -47.8911]} />
            <Marker position={[-22.0174, -47.8951]} />
            <Marker position={[-22.0144, -47.8961]} />
            <Marker position={[-22.0124, -47.8971]} />
            <Marker position={[-22.0194, -47.8981]} />
            <Marker position={[-22.0114, -47.8991]} />
            <Marker position={[-22.0134, -47.8911]} />
            <Marker position={[-22.0174, -47.8921]} />
            <Marker position={[-22.0144, -47.8931]} />
            <Marker position={[-22.0124, -47.8941]} />
            <Marker position={[-22.0174, -47.8951]} />
            <Marker position={[-22.0114, -47.8961]} />
          </MarkerClusterGroup>
        </Map>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  mapRef: state.mapRef,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMapRef: (refMap) => dispatch(setMapRef(refMap)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
