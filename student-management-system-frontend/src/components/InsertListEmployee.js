import React,{useEffect, useState} from "react";
import InsertListEmplyooService from "../services/InsertListEmplyooService";

const InsertListEmployee = () =>
    {
        const [name, setName] = useState("");
        const [clg, setclgName] = useState("");
        
        const [rollno, setrollNo] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNo, setphoneNo] = useState("");
        const [department, setDepartment] = useState("");



        const handelInsertAllStudent = (event) =>
            {
                event.preventDefault();
                
                if (name && clg && rollno && email && phoneNo && department) {
                    const studentData = {
                        name,
                        clg,
                        rollno,
                        email,
                        phoneNo,
                        department
                    };
                    const studentList = [studentData];

                    InsertListEmplyooService.InsertAllStudents(studentList)
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
            <div className='divison'>
             <h2>Insert Student Detail</h2>

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
            placeholder="college"
            value={clg}
            onChange={(event) => {
            setclgName(event.target.value);}}
            />
            
            Roll No :
            <input
             type="number"
            className="input"
            placeholder="Roll No"
            value={rollno}
            onChange={(event) => {
            setrollNo(event.target.value);}}
            />
            
            Email:
            <input
             type="email"
            className="input"
            placeholder="email"
            value={email}
            onChange={(event) => {
            setEmail(event.target.value);}}
            />
             
            Contact Number:
            <input
             type="number"
            className="input"
            placeholder="Phone"
            value={phoneNo}
            onChange={(event) => {
            setphoneNo(event.target.value);}}
            />

            Department:
            <input
             type="text"
            className="input"
            placeholder="department"
            value={department}
            onChange={(event) => {
            setDepartment(event.target.value);}}
            />

            <div className="sub" >
            <button type="submit" onClick={handelInsertAllStudent}>Submit</button>
            </div>
            
             
             </div>


        );
    }

export default InsertListEmployee;