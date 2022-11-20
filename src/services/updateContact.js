import http from "./httpService";

export default function updateContact(id, data) {
  return http.put(`/contacts/${id}`, data);
}
