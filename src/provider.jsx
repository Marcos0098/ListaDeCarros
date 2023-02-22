import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/add1fd033a9d433f857930a62906ff1f',
    timeout: 1000,
  });