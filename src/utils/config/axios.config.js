import axios from 'axios';

//Default config from AXIOS
export default axios.create(
  {
    baseURL: "https://api.chucknorris.io/jokes",
    responseType: 'json',
    timeout: 6000, //la peticion falla si tarda más de 6s

  }
)