import './App.scss';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';   
import TopNav from './components/menubar/TopNav';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <Routes>
              <Route path="/" exact element = {<TopNav />} />
            </Routes>
          </Router>
        <h1>Hello world</h1>
      </header>
    </div>
  );
}

export default App;
