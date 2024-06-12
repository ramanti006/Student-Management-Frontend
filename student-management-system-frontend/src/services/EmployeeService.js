import axios from 'axios';

const All_Employee_API_URL = "http://localhost:9090/showAll";
const DLT_API_URL = 'http://localhost:9090/deleteById';
const INSERT_Employee_API_URL = "http://localhost:9090/addMultipleStudent";
const ONE_API_URL = "http://localhost:9090/showOne";



class EmployeeService
{

    getAllEmployee()
    {
        return axios.get(All_Employee_API_URL);
    }

    deleteById(id) {
        return axios.delete(`${ DLT_API_URL}/${id}`);
    }

    InsertAllStudents(students)
    {
        return axios.post(INSERT_Employee_API_URL,students,
            {
                headers: {
                    'Content-Type': 'application/json'
                }}
        );
    }

    getOneEmployee(id)
    {
        return axios.get(`${ONE_API_URL}/${id}`);
    }
}

export default new EmployeeService();
//export default { getAllEmployee };