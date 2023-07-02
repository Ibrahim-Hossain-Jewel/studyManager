import './App.scss';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';   
import TopNav from './components/menubar/TopNav';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './DarkTheme.scss';
import React from 'react';
import Home from './components/home';
import { messages } from "./language/messages";
import { IntlProvider, FormattedMessage } from "react-intl";
import Upload from './components/upload';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from "reselect";
import { makeSelectPublicLanguage } from './selector';
class App extends React.Component {
  render(){
    console.log("your selected language from app.js",localStorage.getItem("selectedlanguage"));
    
    if (localStorage.getItem('selectedlanguage') == null) {
      localStorage.setItem('selectedlanguage', 'en')
    }
    return (
      <IntlProvider locale={localStorage.getItem("selectedlanguage")} messages={messages[localStorage.getItem("selectedlanguage")]}>
      <div className="App">
        <header className="App-header">
            <Router>
              <TopNav />
              <Routes>
                <Route path="/" exact element = {<Home />} />
                <Route path='/upload' element = {<Upload />}/>
              </Routes>
            </Router>
        </header>
      </div>
    </IntlProvider>
    );
  }
}
App.propTypes ={
  languagesChange:PropTypes.any,
};
const mapStateToProps = createStructuredSelector({
  languagesChange : makeSelectPublicLanguage(),
});
const mapDispatchToProps = (dispatch)=>{
  return{
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
