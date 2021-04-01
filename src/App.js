
import React from 'react'
import Icon from './assests/pizza.jpg';

if(module.hot){
    module.hot.accept()  
  }
function App() {
    return (
        <div>
           <h1 >Welcome{new Date().toDateString()}</h1> 
           <img src={Icon} alt="icon"/>
           

             </div>
    )
}

export default App;
