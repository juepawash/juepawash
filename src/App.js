
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/Inicio';
import Qr from './components/Qr';
import Camara from './components/Camara';

function App() {
  return (
    <Router>
      <div>
        <div className="container mt-5">
          <div className="btn-group">
          <nav>
          <Link to="/" className="btn btn-dark">
             Inicio  
          </Link>
          <Link to="/Qr" className="btn btn-dark">
              Qr 
          </Link>
          <Link to="/Camara" className="btn btn-dark">
            Camara  
          </Link>
          </nav>   
          </div>        
          <hr />
          <Switch>
              <Route exact path ="/" >
               <Inicio />
             </Route>
             <Route exact  path ="/Qr" >
              <Qr />
             </Route>
             <Route path ="/camara" >
               <Camara />
             </Route>
          </Switch>
       </div>
    </div> 
    </Router>    
  );
}


export default App;
