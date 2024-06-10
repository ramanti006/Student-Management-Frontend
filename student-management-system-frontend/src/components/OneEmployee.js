import React,{useEffect, useState} from "react";
import OneEmploeeService from '../services/OneEmploeeService';

const OneEmployee =() =>
    {
        const [inputValue, setInputValue] = useState("")
        const[students, setStudents] = useState(null);
        const [hasSearched, setHasSearched] = useState(false);

        const handelShowOneStudent =(event) =>
            {
                event.preventDefault();
                setHasSearched(true);

                OneEmploeeService.getOneEmployee(inputValue).then((response)=>
                {
                    setStudents(response.data.data);
                    console.log(response.data.data);
                }).catch(error =>
                    {
                        setStudents(null);
                        console.log(error);
                    }
                )

                

            }

        return(
          <>
          <h2 className="head">Student</h2>
           <div className ="divison">

           <h3>Please give the id to get student's information</h3>
        

        <input
        type="number"
        className="input"
        placeholder="Enter ID"
        value={inputValue}
        onChange={(event) => {
            setInputValue(event.target.value);}}
        />
        <br>
    </br>
         <button className="btn" onClick={handelShowOneStudent}>Check</button>
         {hasSearched && (
         students ? ( 
                    <table className="tab">
                      <thead>
                          <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>College</th>
                          <th>RollNo</th>
                          <th>Email</th>
                          <th>PhoneNo</th>
                          <th>Department</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              
                                
                                      <tr key ={students.id}>
                                          <td>{students.id}</td>
                                          <td>{students.name}</td>
                                          <td>{students.collgname}</td>
                                          <td>{students.rollno}</td>
                                          <td>{students.email}</td>
                                          <td>{students.phoneno}</td>
                                          <td>{students.department}</td>
      
                                      </tr>
                                  
                          }
                      </tbody>
      
      
                    </table>
                 ) : <p>No student present with this Id!</p>
                )}  
            

           
            </div>
            </>
        );





    }

export default OneEmployee;