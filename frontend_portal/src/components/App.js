//import logo from './logo.svg';
import './App.scss';
import Homepage from './Content/Homepage'
import Games from './Content/Games'
import Highscores from './Content/Highscores'
import SignUp from './Content/SignUp'
import NavBar from './NavBar/NavBar'
import Footer from './Footer';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  const [content, setContent] = useState('homepage');
  //const [showImageViewer, setShowImageViewer] = useState(false);

  
  // State controlling ghreetings component (now disabled for debugging)
  //const [showGreetings, setShowGreetings] = useState(true);
  const [contentComponent, setContentComponent] = useState('');  
  
  
  useEffect(() => {
    const contentComponents = {
      homepage: <Homepage setContent={setContent}/>,
      games: <Games />,
      highscores: <Highscores />,
      signup: <SignUp />,
    };
    setContentComponent(contentComponents[content]);
  }, [content]);

  return (
    <div className="App">
      <NavBar setContent={setContent}/>
      <section className="content">{contentComponent}</section>
      <Footer />
    </div>
  );
}

export default App;
