import React, { Component } from 'react';
import './MiFavorytes.css'
import { stat } from 'fs';
class MyFavorytes extends Component {
    constructor(props){
      super();
      this.state={
        name:[]
       }
 
    }
        render() {
          if(typeof this.props.name !== "undefined"){
            let favorites=this.props.name;
            return(
              
              <ul>
              {favorites.map(item=>{
                return(
                <li>{item}</li>
                )
              })}
              </ul>
            )
          }else{
            return(<p>Sin Información</p>)
          }
          
        }
      }

export default MyFavorytes;

/*if {(this.state.name !=null) 
  return(
    <h3 className="divh">Mis tiendas favoritas</h3>
    {this.props.name.map(item=>{
     return(
      <p className="stores" position={{lat:item.Coordinates.lat,lng:item.Coordinates.lng}} 
     name={item.name} title={item.address}> X</p>
                  )}
          )}
  )}
      */
        