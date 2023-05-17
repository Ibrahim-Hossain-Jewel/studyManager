import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from 'primereact/avatar';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from "primereact/inputswitch";
import './style.scss';
import { Dialog } from 'primereact/dialog';
import { OverlayPanel } from 'primereact/overlaypanel';
class TopNav extends React.Component{
    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
          off: "hidden",
          dropdown: "pi pi-angle-down",
          navigationOff: "hiddenMainNav",
          navIcon: "pi pi-align-right",
          themeContent: "Dark",
          themeIcon: "pi pi-sun",
          selectedLanguage: "English",
          languages: [
            {name: "English"}, {name: "বাংলা"} 
          ],
          themeState: false,

        }
    }
    selectedLanguage = (e)=>{
      this.setState({selectedLanguage: e.value});
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
      const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2" />;
      const end = 
      <div className="right-nav">
        <Dropdown
        value={this.state.selectedLanguage}
        onChange={this.selectedLanguage}
        options={this.state.languages}
        optionLabel="name"
        placeholder={this.state.selectedLanguage}
        className="md:w-0.5rem"
        selected= {this.state.selectedLanguage}
      />
        <Avatar
          image={require('./IMG_20210518_112211.jpg')}
          icon="pi pi-user"
          shape="circle"
          size="large"
          onClick={(e) => this.myRef.current.toggle(e)}
        />
        <OverlayPanel
        ref={this.myRef}
        pt={{
          root: { className: 'surface-ground' }
      }}
        >
          <div className="grid profileDescrip">
            <div className="col-3">
              <Avatar
                image={require('./IMG_20210518_112211.jpg')}
                icon="pi pi-user"
                shape="circle"
                size="large"
                onClick={(e) => this.myRef.current.toggle(e)}
              />
            </div>
            <div className="col-9">
              <b>IBRAHIM HOSSAIN</b>
              <p>Professor</p>
            </div>
          </div>
          <div className="grid ">
            <div className="col-12 profileList">
             <ul>
              <li><Link  className="p-menubar-item" to="/Setting">Setting</Link></li>
              <li><Link  className="p-menubar-item" to="/Logout">Logout</Link></li>
             </ul>
            </div>
          </div>
        </OverlayPanel>
      </div>;

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
                            <div onClick={this.dropdownController} className="studyLevelOver">
                              <Link>
                                <span>Study level</span> <i className={this.state.dropdown}></i>
                              </Link>
                            <div className={`${this.state.off} flex-none`}>
                              <li><Link>Primary School</Link></li>
                              <li><Link>High School</Link></li>
                              <li><Link>Intermediate</Link></li>
                              <li><Link>Diploma</Link></li>
                              <li><Link>Madrasha</Link></li>
                              <li><Link>Medical College</Link></li>
                              <li><Link>University</Link></li>
                            </div>
                            </div>
                          </div>
                          <li><Link  className="p-menubar-item" to="/ModelTest">Model Test</Link></li>
                          <li><Link  className="p-menubar-item" to="/ModelTest">My Classes</Link></li>
                          <li><Link  className="p-menubar-item" to="/ModelTest">My Money</Link></li>
                          <li><Link  className="p-menubar-item" to="/jobmpa">Job Map</Link></li>
                          <li><Link className="p-menubar-item"> <InputSwitch checked={JSON.parse(localStorage.getItem("themeState"))} onChange={this.themeController}/>  <i className={localStorage.getItem('themeIcon')}></i></Link></li>
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