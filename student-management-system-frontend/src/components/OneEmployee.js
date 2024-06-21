import React,{useEffect, useState} from "react";
import EmployeeService from '../services/EmployeeService';
import InsertListEmployee from './InsertListEmployee'

const OneEmployee =() =>
    {

        const employeeService = EmployeeService;

        const [inputValue, setInputValue] = useState("")
        const[students, setStudents] = useState(null);
        const [hasSearched, setHasSearched] = useState(false);
        const [updateMsg,setupdateMsg] = useState("")
        const [isEditing, setIsEditing] = useState(false);

        const [updatedStudent, setUpdatedStudent] = useState({
            id: "",
            name: "",
            collgname: "",
            rollno: "",
            email: "",
            phoneno: "",
            department: ""
        });

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setUpdatedStudent({ ...updatedStudent, [name]: value });
        };
    

        const handelShowOneStudent =(event) =>
            {
                event.preventDefault();
                setHasSearched(true);

                employeeService.getOneEmployee(inputValue).then((response)=>
                {
                    const studentData = response.data.data;
                    setStudents(studentData);
                    setUpdatedStudent(studentData);
                    console.log(response.data.data);
                }).catch(error =>
                    {
                        setStudents(null);
                        console.log(error);
                    }
                )

                

            }

        const handleUpdate = (event) =>
            {
                event.preventDefault();

                employeeService.updateOneEmployeeByid(students.id,updatedStudent).then((response)=>
                    {
                        setupdateMsg(response);
                        console.log(response);

                    }).catch(error =>
                        {
                            setupdateMsg(null);
                            console.log(error);
                        }
                    )
            }
            

        return(
          <>
          <h2 className="head">One Student Detail</h2>
           <div className ="divison">

           <h3 >Please give the id to get student's information</h3>
        

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
         <button className="greenbtn" onClick={handelShowOneStudent}>Check</button>
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
      
                      <button className='redbtn' onClick={() => setIsEditing(true)} >Update</button>
                      
                    </table>
                 ) : <p>No student present with this Id!</p>
                )} 

                {isEditing && (
                    <form onSubmit={handleUpdate}>
                        <h3>Update Student Details</h3>
                        <label>ID: {students.id}</label><br />
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedStudent.name}
                            onChange={handleInputChange}
                        /><br />
                        <label>College Name:</label>
                        <input
                            type="text"
                            name="collgname"
                            value={updatedStudent.collgname}
                            onChange={handleInputChange}
                        /><br />
                        <label>Roll No:</label>
                        <input
                            type="text"
                            name="rollno"
                            value={updatedStudent.rollno}
                            onChange={handleInputChange}
                        /><br />
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={updatedStudent.email}
                            onChange={handleInputChange}
                        /><br />
                        <label>Phone No:</label>
                        <input
                            type="text"
                            name="phoneno"
                            value={updatedStudent.phoneno}
                            onChange={handleInputChange}
                        /><br />
                        <label>Department:</label>
                        <input
                            type="text"
                            name="department"
                            value={updatedStudent.department}
                            onChange={handleInputChange}
                        /><br />
                        <button type="submit" className="greenbtn" onClick={handleUpdate}>Submit Update</button>
                    </form>
                )}
            
            

           
            </div>
            </>
        );





    }

export default OneEmployee;