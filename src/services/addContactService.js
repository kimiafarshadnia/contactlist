import http from "./httpService";

// Service to add a new contact
export default function addOneContact(data) {
  return http.post(`/contacts`, data);  // This will send a POST request to /contacts
}
