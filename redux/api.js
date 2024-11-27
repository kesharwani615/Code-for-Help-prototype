import axios from "axios";

const API = axios.create({
    baseURL: `http://15.206.16.230:4000/api/v1/`
    // baseURL: `${process.env.REACT_APP_BASE_URL}`
})

// Dashboard Couter api 
// *************************************

export const getCounter = () => API.get('admin/getcount-articles',{
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
  },
});