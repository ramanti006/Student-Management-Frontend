import axios from 'axios';

const All_Employee_API_URL = "http://localhost:9090/addMultipleStudent";


class InsertListEmplyooService
{

    InsertAllStudents(students)
    {
        return axios.post(All_Employee_API_URL,students,
            {
                headers: {
                    'Content-Type': 'application/json'
                }}
        );
    }
}

export default  new InsertListEmplyooService();