import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
  width: '80%',
  height: '65%'
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  
  }
  componentDidMount(){
  
fetch('./store_directory.json')
.then(response => response.json()
.then(location =>{
let dataLocation =[];
for(let i=0; i<location.length;i++){
 
  let item=location[i];
  item.key= i;
  item.address=location[i].Address;

dataLocation.push(item);
}
  this.setState(prevState => {
    return { data: [...prevState.data, ...dataLocation]}
  });
}))
}
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">StoresFilter</h1>
        </header>
  
      <Map google={this.props.google}
       zoom={12.5}
       style={style}
          initialCenter={{
            lat:19.419444,lng:-99.145556
          }}
          onClick={this.onMapClicked}>
 

{this.state.data.map(item=>{
 
  return(
   
    <Marker position={{lat:item.Coordinates.lat,lng:item.Coordinates.lng}} onClick={this.onMarkerClick}
    name={item.address}
  />

  )
}

)}




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

