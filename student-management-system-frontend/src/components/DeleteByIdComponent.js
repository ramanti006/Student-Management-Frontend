import React,{useEffect, useState} from "react";
import DeleteByIdEmployeeService from "../services/DeleteByIdEmployeeService";

const DeleteByIdComponent = () =>
    {
        const [inputValue, setInputValue] = useState(0);
        const [message, setMessage] = useState("");

        const handleDelete =(event) =>
            {
                event.preventDefault();

                DeleteByIdEmployeeService.deleteById(inputValue).then((response)=>
                {
                    setMessage(response.data);
                    console.log(response.data);
                }).catch(error =>
                    {
                        setMessage("Not Found!");
                        console.log(error);
                    }
                )
            

            }
        

        
    return(
        <div className='divison'>
        <h3>Please give the id to delete student's information</h3>
        

        <input
        type="number"
        className="input"
        placeholder="Enter ID"
        value={inputValue}
        onChange={(event) => {
            setInputValue(event.target.value);}}
        />
    <button className="btn" onClick={handleDelete}>Delete</button>
      {message && (
        <p>
          {message === "SUCCESSFUL!"
            ? "Student record deleted from database"
            : "Student record not present in database"}
        </p>
      )}
        
        
        </div>
    );
        

    }

    export default DeleteByIdComponent;