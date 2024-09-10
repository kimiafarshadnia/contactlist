import http from "./httpService";

// Service to delete a contact by ID
export default function deleteOneContact(id) {
  return http.delete(`/contacts/${id}`);
}
