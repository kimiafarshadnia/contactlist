import http from "./httpService";

// Service to fetch all contacts
export default function getContacts() {
  return http.get("/contacts");
}
