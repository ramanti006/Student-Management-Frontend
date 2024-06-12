import React,{useEffect, useState} from "react";
import EmployeeService from '../services/EmployeeService';

const InsertListEmployee = () =>
    {

        const employeeService = EmployeeService;

        const [name, setName] = useState("");
        const [collgname, setclgName] = useState("");
        
        const [rollno, setrollNo] = useState("");
        const [email, setEmail] = useState("");
        const [phoneno, setphoneNo] = useState("");
        const [department, setDepartment] = useState("");



        const handelInsertAllStudent = (event) =>
            {
                event.preventDefault();
                
                if (name && collgname && rollno && email && phoneno && department) {
                    const studentData = {
                        name,
                        collgname,
                        rollno,
                        email,
                        phoneno,
                        department
                    };
                    const studentList = [studentData];
                    //const jsonString = JSON.stringify(studentList);

                    //console.log(jsonString);

                    employeeService.InsertAllStudents(studentList)
                        .then(response => {
                            console.log("Student data inserted successfully", response);
                        })
                        .catch(error => {
                            console.error("There was an error inserting the student data!", error);
                            if (error.response) {
                                console.error("Error Response Data:", error.response.data);
                                console.error("Error Response Status:", error.response.status);
                                console.error("Error Response Headers:", error.response.headers);
                            }
                        });
                } else {
                    alert("Please fill in all fields");
                }
            
        





            }

        return(
            <>
            <h2 className="head"> Register Student</h2>
            <div className='divison'>
             <h3>Insert Student Detail</h3>

             Student Name :
             <input
             type="text"
            className="input"
            placeholder="Name"
            value={name}
            onChange={(event) => {
            setName(event.target.value);}}
            />
            
            College Name :
            <input
            type="text"
            className="input"
            placeholder="College"
            value={collgname}
            onChange={(event) => {
            setclgName(event.target.value);}}
            />
            
            Roll No :
            <input
             type="number"
            className="input"
            placeholder="Roll Number"
            value={rollno}
            onChange={(event) => {
            setrollNo(event.target.value);}}
            />
            
            Email:
            <input
             type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(event) => {
            setEmail(event.target.value);}}
            />
             
            Contact Number:
            <input
             type="text"
            className="input"
            placeholder="Phone Number"
            value={phoneno}
            onChange={(event) => {
            setphoneNo(event.target.value);}}
            />

            Department:
            <input
             type="text"
            className="input"
            placeholder="Department"
            value={department}
            onChange={(event) => {
            setDepartment(event.target.value);}}
            />

            <div className="sub" >
            <button  className='greenbtn' type="submit" onClick={handelInsertAllStudent}>Submit</button>
            </div>
            
             
             </div>
             </>


        );
    }

export default InsertListEmployee;