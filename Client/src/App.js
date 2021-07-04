import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import EmployeesList from "./components/Employees-List";
import EditEmployee from "./components/Edit-Employee";
import CreateEmployee from "./components/Create-Employee";
import CreateDepartment from "./components/Create-Department";

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={EmployeesList}/>
        <Route path="/edit/:id" component={EditEmployee}/>
        <Route path="/create" component={CreateEmployee}/>
        <Route path="/department" component={CreateDepartment}/>
    </Router>
  );
}

export default App;
