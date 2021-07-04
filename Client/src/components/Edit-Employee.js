import React, {Component} from 'react';
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class EditEmployee extends Component{
    constructor(props){
        super(props);

        //defining 'this' for each of the methods
        this.onChangeEmployeeSSN = this.onChangeEmployeeSSN.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeDeptNum = this.onChangeDeptNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            EmployeeSSN: 0,
            Fname: '',
            Lname: '',
            DOB: new Date(),
            Sex: '',
            PhoneNumber: 0,
            DeptNum: 0,
            depts: []
        }
    }

    componentDidMount() 
    {
        axios.get('http://localhost:3001/employees/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    EmployeeSSN: response.data.EmployeeSSN,
                    Fname: response.data.Fname,
                    Lname: response.data.Lname,
                    DOB: new Date(response.data.DOB),
                    Sex: response.data.Sex,
                    PhoneNumber: response.data.PhoneNumber,
                    DeptNum: response.data.DeptNum
                })
        })

        axios.get('http://localhost:3001/departments/')
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        depts: response.data.map(department => department.DeptNum),
                        DeptNum: response.data[0].DeptNum
                    })
                }
            })
    }
    //to change the employeessn
    onChangeEmployeeSSN(e) {
        this.setState({
            EmployeeSSN: e.target.value 
        });
    }
    //to set the Fname
    onChangeFname(e) {
        this.setState({
            Fname: e.target.value 
        });
    }
    //To set the Lname
    onChangeLname(e) {
        this.setState({
            Lname: e.target.value 
        });
    }
    //To set the DOB
    onChangeDOB(date) {
        this.setState({
            DOB: date
        });
    }
    //To set the Sex
    onChangeSex(e) {
        this.setState({
            Sex: e.target.value 
        });
    }
    //To set the phone number
    onChangePhoneNumber(e) {
        this.setState({
            PhoneNumber: e.target.value 
        });
    }
    //To set department number
    onChangeDeptNum(e) {
        this.setState({
            DeptNum: e.target.value 
        });
    }

    onSubmit(e){
        e.preventDefault();
        const employee = {
            EmployeeSSN: this.state.EmployeeSSN,
            Fname: this.state.Fname,
            Lname: this.state.Lname,
            DOB: this.state.DOB,
            Sex: this.state.Sex,
            PhoneNumber: this.state.PhoneNumber,
            DeptNum: this.state.DeptNum
        }
        console.log(employee)

        axios.post('http://localhost:3001/employees/update/'+this.props.match.params.id, employee)
            .then(res => console.log(res.data));

        window.location ='/';
    }

    render(){
        return(
            <div className="container">
                <h3>Update Employee Details</h3>
                <form onSubmit={this.onSubmit}>
                    {/* for department number */}
                    <div className="form-group">
                        <label>Department Number: </label>
                        <select ref="deptNoInput"
                            required
                            className="form-control"
                            value={this.state.DeptNum}
                            onChange={this.onChangeDeptNum} >
                            {
                                this.state.depts.map(function(department) {
                                    return <option
                                        key={department} value={department}>{department}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <br/>
                    {/* for employee ssn */}
                    <div className="form-group">
                        <label>Employee SSN: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.EmployeeSSN}
                            onChange={this.onChangeEmployeeSSN}
                        />
                    </div>
                    <br/>
                    {/* for Fisrt Name */}
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.Fname}
                            onChange={this.onChangeFname}
                        />
                    </div>
                    <br/>
                    {/* for Last Name */}
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.Lname}
                            onChange={this.onChangeLname}
                        />
                    </div>
                    <br/>
                    {/* for date, we implement a date picker */}
                    <div className="form-group">
                        <label>Date of Birth: </label>
                        <div>
                            <DatePicker
                            selected={this.state.DOB}
                            onChange={this.onChangeDOB}
                            />
                        </div>
                    </div>
                    <br/>
                    {/* for Phone Number */}
                    <div className="form-group">
                        <label>Gender: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.Sex}
                            onChange={this.onChangeSex}
                        />
                    </div>
                    <br/>
                    {/* for Phone Number */}
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.PhoneNumber}
                            onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Update Employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
                              


