import React, { Component } from 'react';
import logo from './../../assets/image/Logo/Logo.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-12 col-sm-12 col-md-2">
                    <a href="index.html" className="navbar-brand"><img src={logo} alt="logo" /> Blanja</a>
                </div>
                <div className="col-10 col-sm-10 col-md-6">
                    <div className="input-group">
                        <input type="text" className="form-control border-right-0" style={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px" }} placeholder="Search here..." />
                        <span className="input-group-append">
                            <div className="input-group-text bg-transparent border-left-0">
                                <i className="fas fa-search"></i>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="col-1">
                    <button className="btn btn-outline-secondary"><i class="fal fa-filter"></i></button>
                </div>
                <div className="navbar-nav ml-auto"></div>
                <div className="col-1">
                    <button className="btn">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
                <div className="col-12 col-sm-12 col-md-auto">
                    <button onClick={() => { }} className="btn rounded-pill btn btn-danger btn-login">Login</button>
                </div>
                <div className="col-12 col-sm-12 col-md-auto">
                    <button onClick={() => { }} className="btn rounded-pill btn-outline-secondary btn-signup">SignUp</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;