import './App.scss';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';   
import TopNav from './components/menubar/TopNav';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './DarkTheme.scss'; //linked theme SCSS
import React from 'react';
import Home from './components/home';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <Router>
              <TopNav />
              <Routes>
                <Route path="/" exact element = {<Home />} />
              </Routes>
            </Router>
        </header>
      </div>
    );
  }
}

export default App;
