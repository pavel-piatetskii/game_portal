//import logo from './logo.svg';
import './App.scss';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {

  const [content, setContent] = useState('homepage');
  //const [showImageViewer, setShowImageViewer] = useState(false);

  
  // State controlling ghreetings component (now disabled for debugging)
  // const [showGreetings, setShowGreetings] = useState(true);
  const [contentComponent, setContentComponent] = useState('');  
  
  
  useEffect(() => {
    const contentComponents = {
      homepage: <Homepage setContent={setContent}/>,
      // games: <Projects projects={projects} showImageViewer={showImageViewer} setShowImageViewer={setShowImageViewer}/>,
      // highscores: <About showImageViewer={showImageViewer} setShowImageViewer={setShowImageViewer}/>,
    };
    setContentComponent(contentComponents[content]);
  }, [content]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
      </header>
    </div>
  );
}

export default App;
