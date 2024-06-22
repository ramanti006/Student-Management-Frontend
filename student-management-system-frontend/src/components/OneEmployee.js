import React, { useState } from "react";
import EmployeeService from '../services/EmployeeService';
import EditStudentComponent from './EditStudentComponent';
import '../App.css';

const OneEmployee = () => {
  const [inputValue, setInputValue] = useState("");
  const [students, setStudents] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleShowOneStudent = (event) => {
    event.preventDefault();
    setHasSearched(true);

    EmployeeService.getOneEmployee(inputValue).then((response) => {
      const studentData = response.data.data;
      setStudents(studentData);
      console.log(response.data.data);
    }).catch(error => {
      setStudents(null);
      console.log(error);
    });
  };

  return (
    <>
      <h2 className="head">One Student Detail</h2>
      <h3 align="center">Please Give The Id To Get Student's Information</h3>
      <div className="divison">
        

        <input
          type="number"
          className="input"
          placeholder="Enter ID"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <br />
        <button className="greenbtn" onClick={handleShowOneStudent}>Check</button>
        {hasSearched && (
          students ? (
            <>
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
                  <tr key={students.id}>
                    <td>{students.id}</td>
                    <td>{students.name}</td>
                    <td>{students.collgname}</td>
                    <td>{students.rollno}</td>
                    <td>{students.email}</td>
                    <td>{students.phoneno}</td>
                    <td>{students.department}</td>
                  </tr>
                </tbody>
              </table>
              <button className='redbtn' onClick={() => setIsEditing(true)}>Edit</button>
              <EditStudentComponent
                studentData={students}
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
              />
            </>
          ) : <p>No student present with this Id!</p>
        )}
      </div>
    </>
  );
};

export default OneEmployee;