import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/a63ef625248c4658a8479fcf1ca6b7b5',
    timeout: 1000,
  });