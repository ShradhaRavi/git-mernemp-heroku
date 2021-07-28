import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Total 2 components in this file

//Employee Component (funtional component)
const Employee = props => (
    <tr>
        <td>{props.employee.EmployeeSSN}</td>
        <td>{props.employee.Fname}</td>
        <td>{props.employee.Lname}</td>
        <td>{props.employee.DOB.substring(0,10)}</td>
        <td>{props.employee.Sex}</td>
        <td>{props.employee.PhoneNumber}</td>
        <td>{props.employee.DeptNum}</td>
        <td>
        <button className="btn btn-secondary"><Link to={"/edit/"+props.employee._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteEmployee(props.employee._id) }}>Delete</button>
        </td>
    </tr>
)

//Employees component (class component)
export default class EmployeeList extends Component{
    constructor(props)
    {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);

        this.state = {employees: [] };        
    }

    componentDidMount() {
        axios.get('/employees/')
            .then(response => {
                this.setState({ employees: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEmployee(id) {
        axios.delete('/employees/' +id)
            .then(res => console.log(res.data));

        this.setState({ 
            /* here we will show only the employees that are left after deletion.
            this means that it will show all the employes with id with does not equal to teh id in this method.*/
            employees: this.state.employees.filter(el => el._id !== id)
        })
    }

    employeesList()
    {
        return this.state.employees.map(currentemployee => {
            return <Employee employee = {currentemployee} deleteEmployee={this.deleteEmployee} key={currentemployee._id}/>;
        })
    }


    render(){
        return(
            <div className="container">
            <h3>All Employees</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Employee SSN</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Department Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.employeesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
