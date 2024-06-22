import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import EmployeeService from '../services/EmployeeService';
import '../App.css';

const EditStudentComponent = ({ studentData, isOpen, onClose }) => {
  const [updateMsg, setUpdateMsg] = useState("");
  const [updatedStudent, setUpdatedStudent] = useState(studentData);

  useEffect(() => {
    setUpdatedStudent(studentData);
  }, [studentData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedStudent({ ...updatedStudent, [name]: value });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    EmployeeService.updateOneEmployeeByid(studentData.id, updatedStudent)
      .then((response) => {
        setUpdateMsg("Update successful!");
        console.log(response);
        onClose(); // Close the popup after a successful update
      })
      .catch((error) => {
        setUpdateMsg("Update failed!");
        console.log(error);
      });
  };

  return (
    <Popup open={isOpen} onClose={onClose} modal>
      <div className="popUP">
        <form onSubmit={handleUpdate}>
          <h3>Update Student Details</h3>
          <label>ID: {updatedStudent.id}</label><br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedStudent.name}
            onChange={handleInputChange}
          />
          <br />
          <label>College Name:</label>
          <input
            type="text"
            name="collgname"
            value={updatedStudent.collgname}
            onChange={handleInputChange}
          />
          <br />
          <label>Roll No:</label>
          <input
            type="text"
            name="rollno"
            value={updatedStudent.rollno}
            onChange={handleInputChange}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedStudent.email}
            onChange={handleInputChange}
          />
          <br />
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
          />
          <br />
          <button type="submit" className="blubtn">Update</button>   <button onClick={onClose}className="blubtn">Close</button>
          {updateMsg && <p>{updateMsg}</p>}
        </form>
        
      </div>
    </Popup>
  );
};

export default EditStudentComponent;