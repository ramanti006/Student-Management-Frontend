import React,{useState} from "react";
import Footer from './Footer';


import ListEmployeeComponetn from './ListEmployeeComponetn'
import OneEmployee from './OneEmployee'
import DeleteByIdComponent from './DeleteByIdComponent'
import InsertListEmployee from './InsertListEmployee';

function StudentMainPage()
{
    const [view, setView] = useState("");

  const renderComponent = () => {
   // event.preventDefault();
    switch (view) {
      case "list":
        return <ListEmployeeComponetn/>;
      case "one":
        return <OneEmployee/>;
      case "dlt":
        return <DeleteByIdComponent/>;
      case "insrt":
        return <InsertListEmployee/>;
      default:
        return <div className ="divison">Select an option</div>;
    }
  };
    return (
      <>
      <div>

    <h1  className="head">Student-Management-System</h1>
    </div>
    <div className ="divison">
    <button id = "btn" onClick={() => setView("list")} >showAll</button>
    
    <button id = "btn" onClick={() => setView("one")}>OneStudent</button>
    <button id = "btn" onClick={() => setView("insrt")}>Insert</button>
    <button id = "btn">Update</button>
    <button id = "btn"onClick={() => setView("dlt")}>Delete</button>
    {renderComponent()}
     
     <Footer/>
</div>
</>


)}

export default StudentMainPage;