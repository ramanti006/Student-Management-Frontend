import React,{useState} from "react";
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function StudentMainPage()
{
  return(
    <>
    <div>

      <h1  className="head">Student-Management-System</h1>
      </div>
    <div className ="divison">
      <nav className ="divison">

      
      <Link to="/showAllStudent">
      <button id = "btn">All Student's Details</button>
      </Link>

      <Link to="/OneStudent">
      <button id = "btn">One Student Detail</button>
      </Link>

      <Link to="/insert">
      <button id = "btn">Insert</button>
      </Link>

      <Link to="/OneStudent">
      <button id = "btn">Update</button>
      </Link>

      <Link to="/delete">
      <button id = "btn">Delete</button>
      </Link>


      </nav>
       <Footer/>
        
    </div>
    </>
  )
   

}

export default StudentMainPage;