
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployeeComponetn from './components/ListEmployeeComponetn';
import OneEmployee from './components/OneEmployee';
import DeleteByIdComponent from './components/DeleteByIdComponent';
import StudentMainPage from './components/StudentMainPage';
import InsertListEmployee from './components/InsertListEmployee';
function App() {
  return (
    <>
   
   
   <Router>
      <Routes>
        <Route  path="/" element={<StudentMainPage/>}/>
        <Route  path="/showAllStudent" element={<ListEmployeeComponetn/>}/>
        <Route  path="/OneStudent" element={<OneEmployee/>}/>
        <Route  path="/insert" element={<InsertListEmployee/>} />
        <Route  path="/delete" element={<DeleteByIdComponent/>}/>
      </Routes>
    </Router>

    </>
  )
    
}

export default App;

