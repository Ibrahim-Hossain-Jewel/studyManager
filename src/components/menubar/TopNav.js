import React from "react";
import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from "primereact/inputswitch";
import './style.scss';
class TopNav extends React.Component{
    constructor(){
        super();
        this.state = {
          off: "hidden",
          dropdown: "pi pi-angle-down",
          navigationOff: "hiddenMainNav",
          navIcon: "pi pi-align-right",
          themeContent: "Dark",
          themeIcon: "pi pi-sun",
          themeState: false
        }
    }
    themeController = ()=>{
      if(this.state.themeState == false){
        localStorage.setItem('themeName', 'dark');
        localStorage.setItem('themeState', true);
        localStorage.setItem('themeIcon', "pi pi-moon");
        this.setState({themeIcon: "pi pi-moon", themeState: Boolean(localStorage.getItem("themeState"))});
      }
      if(this.state.themeState == true){
        localStorage.setItem('themeName', 'light');
        localStorage.setItem('themeState', false);
        localStorage.setItem('themeIcon', 'pi pi-sun');
        this.setState({themeIcon: "pi pi-sun", themeState: Boolean(! localStorage.getItem("themeState"))});
      }
    }
    dropdownController = ()=>{
      if(this.state.off == "hidden"){
        this.setState({off: "show", dropdown: "pi pi-angle-up"});
      }if(this.state.off == "show"){
        this.setState({off: "hidden", dropdown: "pi pi-angle-down"});
      }
    }
    navigationController = ()=>{
      if(this.state.navigationOff == "hiddenMainNav"){
        this.setState({navigationOff: "showMainNav", off: "hidden", navIcon: "pi pi-times"});
      }if(this.state.navigationOff == "showMainNav"){
        this.setState({navigationOff: "hiddenMainNav", navIcon: "pi pi-align-right"});
      }
    }
    render(){
      console.log(JSON.parse(localStorage.getItem("themeState")));
      console.log("icon", localStorage.getItem('themeIcon'));
      document.body.className=localStorage.getItem("themeName");
      const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
      const end = <InputText placeholder="Search" type="text" className="w-full" />;
        return (
          <div className="mainNavBar">
            {/* <style jsx="true">
              {`
                
              `}
            </style> */}
              <div className="topBar">
                <div className="original-menu">
                  <div className="nav-left">
                    <div className="brand"><li>{start}</li>
                    </div>
                    <div className="menu-end">
                    <li>{end}</li>
                  </div>
                    <div className="menu-middle">
                      <ul>
                      <div className="navigation" onClick={this.navigationController}>
                          <i className={this.state.navIcon}></i>
                      </div>
                        <div className={`${this.state.navigationOff} jewel`} >
                          <li><Link to="/">
                            Home
                          </Link></li>
                          <div className="dropdown-menu">
                            <li onClick={this.dropdownController}   ><Link>Study level <i className={this.state.dropdown}></i> </Link>
                            <li className={`${this.state.off} flex-none`}>
                              <li><Link>Primary School</Link></li>
                              <li><Link>High School</Link></li>
                              <li><Link>Intermediate</Link></li>
                              <li><Link>Diploma</Link></li>
                              <li><Link>University</Link></li>
                            </li>
                            </li>
                          </div>
                          <li><Link  className="p-menubar-item" to="/ModelTest">Model Test</Link></li>
                          <li><Link  className="p-menubar-item" to="/ModelTest">My Classes</Link></li>
                          <li><Link  className="p-menubar-item" to="/ModelTest">My Money</Link></li>
                          <li><Link className="p-menubar-item"> <InputSwitch checked={JSON.parse(localStorage.getItem("themeState"))} onChange={this.themeController}/>  <i className={localStorage.getItem('themeIcon')}></i></Link></li>
                          <li><Link  className="p-menubar-item" to="/Quit">Log out</Link></li>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-endBig">
                    <li>{end}</li>
                  </div>
                </div>
            </div>
            <br />
          </div>
        );
    }
}
export default TopNav;