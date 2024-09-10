import http from "./httpService";

// Service to fetch a specific contact by ID
export default function getOneContact(id) {
  return http.get(`/contacts/${id}`);
}
