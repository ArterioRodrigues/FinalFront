import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer, //stores homepage info
  CampusContainer,  //stores campus info
  StudentContainer, //stores student info
  AllCampusesContainer, //stores all campus info
  AllStudentsContainer, //stores all Student info
  NewStudentContainer,
  NewCampusContainer,
  EditCampusContainer,
} from './components/containers';

 
// added route components provided here


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/edit" component={EditCampusContainer} />
      </Switch>        
    </div>
  );
}

export default App;
