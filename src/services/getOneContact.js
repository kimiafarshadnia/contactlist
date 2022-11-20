import http from "./httpService";

export default function getOneContact(id) {
  return http.get(`/contacts/${id}`);
}
