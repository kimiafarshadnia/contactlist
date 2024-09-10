import http from "./httpService";

// Service to update a contact by ID
export default function updateContact(id, data) {
  return http.put(`/contacts/${id}`, data);
}
