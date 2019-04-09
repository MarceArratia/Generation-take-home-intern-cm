import React, { Component } from 'react';
import './styleLogin.css';
class Login extends Component {
 
    render(){
        return(
          <div className="divLogin">
           
            <div className="divForm" id="sesionInit" style={{display: 'block'}}>
                <h2>Iniciar Sesión</h2>
                    <input type="text" id="usersLogin" placeholder="Usuario" required />
                    <input type="password" id="passwordLogin" placeholder="Contraseña" required />        
                </div>
            <div className="divForm" id="createAccount" style={{display: 'none'}}>
               
                <h2>Crea tu Cuenta</h2>
                    <input type="email" placeholder="Correo Electrónico" id="emailRegister" required />    
                    <input type="password" placeholder="Contraseña" id="passwordRegister" required />
                    <input type="password" placeholder="Teléfono" required />
                   

            </div>
            </div>
        )

    }
    
}
export default Login;