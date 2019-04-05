import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Ciudad de México</h1>
        </header>
         
      <Map google={this.props.google}
       zoom={13}
          initialCenter={{
            lat:19.419444,lng:-99.145556
          }}
          onClick={this.onMapClicked}>
 
 <Marker position={{lat:19.4978,lng:-99.1269}} onClick={this.onMarkerClick}
         name={'Mexico'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
  
 </InfoWindow>
</Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A")
})(App)

