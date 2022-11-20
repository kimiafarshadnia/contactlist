import http from "./httpService";

export default function deleteOneContact(id) {
  return http.delete(`/contacts/${id}`);
}
