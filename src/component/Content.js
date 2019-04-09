import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import MiFavorytes from './MiFavorytes';

import './Content.css'

let favorites=[];
/*const style = {
    width: '60%',
    height: '45%'
  }
*/
class Content extends Component{
    constructor(props){
        super(props);
        this.state={
         data:[],
         name:[]
        }
      }
      onMarkerClick(stores) {
        favorites.push(stores.name+","+stores.title);
        //le.log(favorites)
        this.setState(prevState => {
          return { favorites: [...prevState.name, ...favorites]}
        });
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
        item.name=location[i].Name;
      dataLocation.push(item);
      }
        this.setState(prevState => {
          return { data: [...prevState.data, ...dataLocation]}
        });
      }))
      }
      render(){
          return(
              <div>
                  <div className="mapa">
                    <Map google={this.props.google}
                        zoom={13}
                         //styles={style}
                        initialCenter={{
                        lat:19.419444,lng:-99.145556
                        }}
                        onClick={this.onMapClicked}>
                         {this.state.data.map(item=>{
                            return(
                                <Marker position={{lat:item.Coordinates.lat,lng:item.Coordinates.lng}} onClick={this.onMarkerClick.bind(this)}
                                name={item.name} title={item.address} />
                                )}
                        )}
                    </Map>
                   
                  </div>
                  
                  <div className="lista">
                  <p> Mis Tiendas Favoritas</p>
                    <MiFavorytes name={this.state.favorites}/>
                  </div>
              </div>
    ) 
    }
};





export default GoogleApiWrapper({
    apiKey: ("AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A")
  })(Content)

