import axios from 'axios';

const All_Employee_API_URL = "http://localhost:9090/addMultipleStudent";


class InsertListEmplyooService
{

    InsertAllStudents(student)
    {
        return axios.post(All_Employee_API_URL, student, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default  new InsertListEmplyooService();