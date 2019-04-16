import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import MiFavorytes from './MiFavorytes';
import firebase from 'firebase';
import './Content.css'



class Content extends Component{
    constructor(props){
        super(props);
          this.state={
            data:[],
            name:[]
           }   
      }
      onMarkerClick(stores) {
      let favorites=[];
      let existe=false;
      let refLike= firebase.database().ref();
      refLike.on('value',(snapshot)=>{
        snapshot.forEach(function(item){
          favorites.push(item.val().name+","+item.val().address);
          if(item.val().correo === document.getElementById('usersLogin').value && item.val().address=== stores.address && item.val().name=== stores.name){
            existe=true;
          }
        })
      });
      if(existe){
        alert("La tienda ya esta agregada");
      }
      else{
        let refName=firebase.database().ref();
        refName.push({name:stores.name,correo:document.getElementById('usersLogin').value,address:stores.address})
      }
      this.setState(prevState => {
        return { favorites: [...prevState.name, ...favorites]}
      });
      }
      showTienda(){
          document.getElementById("lista").style.display="block";
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
                                name={item.name} address={item.address} />
                                )}
                        )}
                    </Map>
                   
                  </div>
                  <button id="tiendas" onClick={this.showTienda.bind()}>Ver Tiendas</button>
                  <div id="lista" className="lista" style={{display: 'none'}}>
                  <p> Mis Tiendas Favoritas</p>
                  <MiFavorytes name={this.state.favorites}/>
                  </div>
              </div>
    ) 
    }
};


// 


export default GoogleApiWrapper({
    apiKey: ("AIzaSyC0ki-b7om6VfJY1AN0ZDeRWqSEgySn5vw")
  })(Content)

