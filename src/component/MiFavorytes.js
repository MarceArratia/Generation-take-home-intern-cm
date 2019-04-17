import React, { Component } from 'react';
import './MiFavorytes.css';
import firebase from 'firebase';


class MyFavorytes extends Component {

    constructor(props){
      super(props);
      this.state={
        data:[]
       }  
       this.fillData();
    }
    fillData() {
      let datafirebase=[];
      let refData=firebase.database().ref();
      refData.on('value',(snapshot)=>{
        snapshot.forEach((item)=>{
          datafirebase.push({id:item.key,
                              name:item.val().name,
                              address:item.val().address,
                            correo:item.val().correo});
        })
      });
      this.setState({ data:datafirebase});   
    }
    componentWillReceiveProps(next_props) {
      console.log("llego un cambio");
      this.fillData();

    }
    componentDidMount(){
      this.fillData();
    }
    deleteFavorite(event){
      console.log(event.target.id);
     firebase.database().ref(event.target.id).remove();
     this.fillData();
    }
        render() {
            return(
              <ul>
                {this.state.data.map(item =>{
                      return(
                        <li>{item.address},{item.name} <button value="X" id={item.id} onClick={this.deleteFavorite.bind(this)} /></li>
                      )
                    })}
              </ul>
            )
      }
    }

export default MyFavorytes;

        