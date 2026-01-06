import axios from "axios";

const api = axios.create({
  baseURL:
    "https://e6aac041-8e28-4929-8ba9-0f2a5d62989c-00-25ghwiog9745b.pike.replit.dev",
});

export const getBookings = () => api.get("/bookings").then((r) => r.data);
export const getBooking = (id) =>
  api.get(`/bookings/${id}`).then((r) => r.data);
export const createBooking = (payload) =>
  api.post("/bookings", payload).then((r) => r.data);
export const updateBooking = (id, payload) =>
  api.put(`/bookings/${id}`, payload).then((r) => r.data);
export const deleteBooking = (id) =>
  api.delete(`/bookings/${id}`).then((r) => r.data);

export default api;
