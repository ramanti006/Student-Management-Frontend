import axios from 'axios';

//const Delete_One_Employee_API_URL = "http://localhost:9090/deleteById/2";


const API_URL = 'http://localhost:9090/deleteById';

class DeleteByIdEmployeeService {
    deleteById(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new DeleteByIdEmployeeService();