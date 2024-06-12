import React,{useEffect, useState} from "react";
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => 
    {
        const employeeService = EmployeeService;


        const[students, setStudents] = useState([]);

        useEffect(() =>
            {

                employeeService.getAllEmployee().then((response)=>
                {
                    setStudents(response.data.data);
                    console.log(response.data.data);
                }).catch(error =>
                    {
                        console.log(error);
                    }
                )
            

            },[]
        )

        return(
          <>
          <h2 className="head">Student List</h2>
           <div className ="divison">
              
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
                        students.map(
                            student =>
                                <tr key ={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.collgname}</td>
                                    <td>{student.rollno}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phoneno}</td>
                                    <td>{student.department}</td>

                                </tr>
                            )
                    }
                </tbody>


              </table> :
             
            </div>
            </>
        );







    }
export default ListEmployeeComponent;