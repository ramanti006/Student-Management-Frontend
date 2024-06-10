import axios from 'axios';

const All_Employee_API_URL = "http://localhost:9090/showAll";


class EmployeeService
{

    getAllEmployee()
    {
        return axios.get(All_Employee_API_URL);
    }
}

export default  new EmployeeService();
//export default { getAllEmployee };