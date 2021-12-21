import { Link } from "react-router-dom";
import { EditCampusContainer} from "../containers";

const CampusView = (props) => {
  const {campus, deleteCampus, deleteStudent} = props;
  
  if(campus.students.length === 0){
    return (
      <div>      
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <p>No students enrolled</p>

      <Link to={'/campuses'}>
          <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </Link>
      
      <EditCampusContainer campus = {campus}/> 
    </div>
    )
  }
  return (
    <div>      
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h1>{name}</h1>
            </Link>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        );
      })}
      </ul>
    
      <Link to={'/campuses'}>
        <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </Link>
      <Link>
        <button>Delete Campus</button>
      </Link>
      <EditCampusContainer campus = {campus}/> 
    </div>
  );

};

export default CampusView;