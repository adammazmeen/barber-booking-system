import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
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
