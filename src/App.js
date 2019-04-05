import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




const style = {
  width: '100%',
  height: '80%'
}
class App extends Component {
  componentDidMount(){
    let url='./store_directory.json';
    fetch(url, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then(res => res.json())
    .then(text => console.log(text))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Ciudad de México</h1>
        </header>
         
      <Map google={this.props.google}
       zoom={13}
       style={style}
          initialCenter={{
            lat:19.419444,lng:-99.145556
          }}
          onClick={this.onMapClicked}>
 
 <Marker position={{lat:19.434322,lng:-99.099506}} onClick={this.onMarkerClick}
         name={'Los burritos de Mike'}
       />
<Marker position={{lat:19.431994,lng:-99.131153}} onClick={this.onMarkerClick}
         name={'Palacio Nacional'} />
<Marker position={{lat:40.640771,lng:-74.016133}} onClick={this.onMarkerClick}
         name={'Museo'} />     

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

