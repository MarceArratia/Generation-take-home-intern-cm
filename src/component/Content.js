import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import MiFavorytes from './MiFavorytes';
import firebase from 'firebase';
import './Content.css'


const style = {
  width: '90%',
  height: '100%',
  
}
class Content extends Component{
    constructor(props){
        super(props);
          this.state={
            data:[],
            cambio:false
           }   
      }
      onMarkerClick(stores) {
     let existe=false;
      let refLike= firebase.database().ref();
      refLike.on('value',(snapshot)=>{
        snapshot.forEach(function(item){
          if(item.val().correo === document.getElementById('usersLogin').value && item.val().address=== stores.address && item.val().name=== stores.name){
            existe=true;
          }
        })
      });
      if(existe){
        alert("La tienda ya esta agregada");
      }
      else{
        refLike.push({name:stores.name,correo:document.getElementById('usersLogin').value,address:stores.address})
      }
      this.setState({cambio:true});

      }
      componentDidMount(){
      fetch('./store_directory.json')
      .then(response => response.json()
      .then(location =>{
      let dataLocation =[];
      for(let i=0; i<location.length;i++){
       // console.log(location[i].Coordinates.lat);
      dataLocation.push({
        id:i,address:location[i].Address,name:location[i].Name,lat:location[i].Coordinates.lat,lng:location[i].Coordinates.lng
      });
      }
        this.setState(prevState => {
          return { data: [...prevState.data, ...dataLocation]}
        });
      }))
      }
      
      render(){
          return(
            <div class="container">
  <div class="row">
    <div class="col-12 col-md-6 stores">
    <Map google={this.props.google}
                        zoom={10}
                        style={style}
                        initialCenter={{
                        lat:19.419444,lng:-99.145556
                        }}
                        onClick={this.onMapClicked}>
                         {this.state.data.map(item=>{
                           //console.log(item);
                           //position={{lat:item.Coordinates.lat,lng:item.Coordinates.lng}}
                            return(
                                <Marker position={{lat:item.lat,lng:item.lng}} id={item.id} onClick={this.onMarkerClick.bind(this)}
                                name={item.name} address={item.address} />
                                )}
                        )}
                    </Map>
    </div>
    <div class="col">
    <p className="pTittle"> Mis Tiendas Favoritas</p>
                  <MiFavorytes name={this.state.cambio}/>
    </div>
  </div>
</div>
           
    ) 
    }
};


// 


export default GoogleApiWrapper({
    apiKey: ("AIzaSyC0ki-b7om6VfJY1AN0ZDeRWqSEgySn5vw")
  })(Content)

