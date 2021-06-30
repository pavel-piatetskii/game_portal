//import logo from './logo.svg';
import './App.scss';
import Homepage from './Content/Homepage'
import Games from './Content/Games'
import Highscores from './Content/Highscores'
import SignUp from './Content/SignUp'
import NavBar from './NavBar/NavBar'
import Footer from './Footer';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  //const [showImageViewer, setShowImageViewer] = useState(false);
  
  // State controlling ghreetings component (now disabled for debugging)
  //const [showGreetings, setShowGreetings] = useState(true);
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/highscores">
            <Highscores />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
