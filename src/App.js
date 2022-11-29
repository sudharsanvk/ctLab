import logo from './logo.svg';
import './App.css';
import CourseOffer from './Components/CourseOffer';
import UpdateCourse from './Components/UpdateCourse';
import AddFac from './Components/AddFac';
import Faculty from './Components/Faculty';
import HandBookEntry from './Components/HandBookEntry';
import CourseDetails from './Components/CourseDetails';
import PaperForm from './Components/PaperForm';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';

function App() {
  return (
  //  <CourseOffer/>
  //  <UpdateCourse/
  // <AddFac/>
  // <Faculty/>
  // <HandBookEntry/>
  // <CourseDetails/>
  <>
  <Navbar/>
  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<Home/>}/> */}
    <Route path="/AddCourse" element={<CourseOffer/>}/>
    <Route path="/HODView" element={<UpdateCourse/>}/>
    <Route path="/addFaculty" element={<AddFac/>}/>
    <Route path="/FacView" element={<Faculty/>}/>
    <Route path="/addHand" element={<HandBookEntry/>}/>
    <Route path="/courseDetails" element={<CourseDetails/>}/>
    <Route path="/studentForm" element={<PaperForm/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
