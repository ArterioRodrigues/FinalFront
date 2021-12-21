import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent } = props;
  if(student.campus == null){
    return (
      <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>Not Enrolled in a Campus</h3>
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
    </div>

  );
    
  }

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <Link to={`/campus/${student.campus.id}`}>
        <h3>{student.campus.name}</h3>
      </Link>
      <Link to={`/students`}> 
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </Link>
       
    </div>
  );

};
export default StudentView;