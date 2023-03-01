import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/90602bff15494f0da8296ea080715046',
    timeout: 1000,
  });