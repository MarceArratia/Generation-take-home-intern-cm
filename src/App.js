import React, { Component } from 'react';
import './App.css';


import Header from './component/Header.js';
import Content from './component/Content.js';
import firebase from 'firebase';
import Login from './component/Login'


class App extends Component {
  constructor(){
    super()
  }
  loginFunction(){
    
    let email=document.getElementById("usersLogin").value;
    let password=document.getElementById("passwordLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      document.getElementById("home").style.display="block";
      document.getElementById("login").style.display="none";
    })
    .catch(function(error) {
        // Handle Errors here.
        alert("Usuario o Contraseña no Existe");
        // ...
      });
  }

  createAccount(){
    document.getElementById("sesionInit").style.display="none";
    document.getElementById("createAccount").style.display="block";
    document.getElementById("buttonLogin").style.display="none";
    document.getElementById("registerUser").style.display="block";
    
  }
  buttonRegisterUser(){
    //reguistra un usuario
    let email=document.getElementById("emailRegister").value;
    let password=document.getElementById("passwordRegister").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
      alert("Usuario creado correctamente");
      document.getElementById("sesionInit").style.display="block";
      document.getElementById("createAccount").style.display="none";
    })
    .catch(function(error) {
      // Handle Errors here.
      // ...
    });
    document.getElementById("sesionInit").style.display="block";
    document.getElementById("createAccount").style.display="none";
    document.getElementById("buttonLogin").style.display="block";
    document.getElementById("registerUser").style.display="none";
  }
  

  render(){
    return(
      <div>
         <div>
      <div className="container-form" id="login">
      <div className="toggle">
        <span id="buttonAccount" onClick={this.createAccount}>Crear Cuenta</span>
            </div>
       <Login/>
       <input type="button" id="buttonLogin" value="Iniciar sesión" onClick={this.loginFunction}/>
       <input type="button" value="Registrarse" style={{display: 'none'}} id="registerUser" onClick={this.buttonRegisterUser}/>
       <div className="reset-password">
                <a href>Olvide mi Contraseña</a>
        
            </div>
       </div>
      </div>
      <div className="App" style={{display: 'none'}} id="home">
      <Header title="Tiendas Favoritas"/>
     <Content/>
      </div>
      </div>
    )
   
  }

}
    
   
export default App;



