import React, {Component} from 'react';
import axios from 'axios';

export default class CreateDepartment extends Component{
    constructor(props){
        super(props);

        //defining 'this' for each of the methods
        this.onChangeDeptName = this.onChangeDeptName.bind(this);
        this.onChangeDeptNum = this.onChangeDeptNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            DeptName: '',
            DeptNum: 1 
        }
    }

    onChangeDeptName(e) {
        this.setState({
            DeptName: e.target.value 
        });
    }

    onChangeDeptNum(e) {
        this.setState({
            DeptNum: e.target.value 
        });
    }

    onSubmit(e){
        e.preventDefault();
        const department = {
            DeptName: this.state.DeptName,
            DeptNum: this.state.DeptNum
        }
        console.log(department)

        axios.post('http://localhost:3001/departments/add/',department)
            .then(res => console.log(res.data));

        this.setState({
            Deptname: '',
            DeptNum: 0
        })

        window.location ='/';
    }

    render(){
        return(
            <div className="container">
                <h3>Add New Department</h3>
                <form onSubmit={this.onSubmit}>
                    {/* for entering department name */}
                    <div className="form-group">
                        <label>Department Name: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.DeptName}
                            onChange={this.onChangeDeptName}
                        />
                    </div>
                    <br/>
                    {/* for department number */}
                    <div className="form-group">
                        <label>Department Number: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.DeptNum}
                            onChange={this.onChangeDeptNum}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Create Department" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}