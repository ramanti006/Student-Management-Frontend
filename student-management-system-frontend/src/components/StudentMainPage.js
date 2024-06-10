import React,{useState} from "react";
import ListEmployeeComponetn from './ListEmployeeComponetn'
import OneEmployee from './OneEmployee'
import DeleteByIdComponent from './DeleteByIdComponent'

function StudentMainPage()
{
    const [view, setView] = useState("");

  const renderComponent = (event) => {
    event.preventDefault();
    switch (view) {
      case "list":
        return <ListEmployeeComponetn/>;
    case "one":
            return <OneEmployee/>;
      case "dlt":
            return <DeleteByIdComponent/>
      default:
        return <div>Select an option</div>;
    }
  };
    return (

<div className ="divison">
    <h1  className="head">Student-Management-System</h1>
    <button id = "btn" onClick={() => setView("list")}>showAll</button>
    <button id = "btn" onClick={() => setView("one")}>OneStudent</button>
    <button id = "btn">Insert</button>
    <button id = "btn">Update</button>
    <button id = "btn"onClick={() => setView("dlt")}>Delete</button>
    {renderComponent()}

</div>
)}

export default StudentMainPage;