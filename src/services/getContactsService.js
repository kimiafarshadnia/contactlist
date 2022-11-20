import http from "./httpService";

export default function getContacts() {
  return http.get("/contacts");
}
