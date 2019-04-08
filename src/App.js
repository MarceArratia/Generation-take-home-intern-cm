import React, { Component } from 'react';
import './App.css';


import Header from './component/Header.js';
import Content from './component/Content.js';
import Footer from './component/Footer.js';



class App extends Component {
  

  render(){
    return(

      <div>
      <Header title="StoresFilter"/>
     <Content/>
      <Footer copyright ="&copy; StoresFilter 2019"/>
      </div>
    )
   
  }

}
    
   
export default App;



