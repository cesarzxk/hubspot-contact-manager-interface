import axios from 'axios';

export const apiContacts = axios.create({
    baseURL: "http://localhost:3333/contacts",
    headers: {
    'Content-Type': 'application/json',
    }
  });

export const apiAuthentication = axios.create({
    baseURL: "http://localhost:3333/authorization",
    headers: {
    'Content-Type': 'application/json',
    }
  });

  
export const apiSchemas = axios.create({
  baseURL: "http://localhost:3333/schemas",
  headers: {
  'Content-Type': 'application/json',
  }
});

  
