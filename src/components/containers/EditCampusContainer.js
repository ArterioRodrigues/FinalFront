import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk } from '../../store/thunks';
import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          address: "", 
          description: "",
          id: 0,
          firstname: "", 
          lastname: "", 
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      console.log(event.target.name, event.target.value)
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            id: this.props.campus.id
        };
        
        console.log("This is the campus: ",campus)
        await this.props.editCampus(campus);
       
        this.setState({
            campusname: "", 
            address: "", 
            description: "", 
            id: 0,
            redirect: true, 
            redirectId: this.props.campus.id
        });

    
      let student = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          campusId: this.props.campus.id,
          email: this.state.email,
          gpa: this.state.gps,
      };
        

        let newStudent = await this.props.addStudent(student);
      
        this.setState({
          firstname: "", 
          lastname: "", 
          campusId: null, 
          redirect: true, 
          redirectId: newStudent.id
        });
    }

    
    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to={`/campuses`}/>)
        }
        return (
          <EditCampusView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}   
            handleSubmitStudent = {this.handleSubmitStudent}   
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(null, mapDispatch)(EditCampusContainer);