import axios from 'axios';

const API_URl = 'http://localhost:5000/api/users/';

//Register User
const signup = async(userData) => {
    const response = await axios.post(API_URl + 'signup', userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

//Login User
const login = async(userData) => {
    const response = await axios.post(API_URl + 'login', userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// logout user
const logout = async(userData) => {
    
    localStorage.removeItem('user');

}

const authService = {
    signup,
    login,
    logout
}

export default authService;