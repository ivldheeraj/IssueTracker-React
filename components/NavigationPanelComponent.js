import React from 'react';
import {Link} from "react-router-dom"
class NavigationPanelComponent extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
            <Link to="/home" className="navbar-brand text-dark" href=''>{this.props.logoText}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                <span className= "navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                        <Link to="/home" className="nav-Link text-dark" >Home <span className="sr-only">(current)</span></Link>        
                    </li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="nav-item ">
                        <Link to="/about" className="nav-Link text-dark" tabIndex="-1" aria-disabled="true">About</Link>        
                    </li>
                   
                </ul>
            </div>

            </nav>
        );
    }
}
export default NavigationPanelComponent;