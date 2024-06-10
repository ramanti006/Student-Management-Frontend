import axios from 'axios';

const API_URL = "http://localhost:9090/showOne";


class OneEmploeeService
{

    getOneEmployee(id)
    {
        return axios.get(`${API_URL}/${id}`);
    }
}

export default  new OneEmploeeService();
//export default { getAllEmployee };