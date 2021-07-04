import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component { 
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Employee Details</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Employees</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Add Employee</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/department" className="nav-link">Add Department</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

