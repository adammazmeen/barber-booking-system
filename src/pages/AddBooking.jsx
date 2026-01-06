import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { createBooking } from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AddBooking() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    phone_number: "",
    email: "",
    user_id: "guest",
  });

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get("service");
    if (service) setForm((f) => ({ ...f, title: service }));
  }, [location.search]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBooking(form);
    navigate("/bookings");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Service</Form.Label>
      <Form.Control
        className="mb-2"
        name="title"
        placeholder="Service"
        value={form.title}
        onChange={handleChange}
        required
      />
      <Form.Label>Description</Form.Label>
      <Form.Control
        className="mb-2"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <Form.Label>Date</Form.Label>
      <Form.Control
        className="mb-2"
        name="date"
        type="date"
        placeholder="YYYY-MM-DD"
        value={form.date}
        onChange={handleChange}
        required
      />
      <Form.Label>Time</Form.Label>
      <Form.Control
        className="mb-2"
        name="time"
        type="time"
        placeholder="HH:MM"
        value={form.time}
        onChange={handleChange}
        required
      />
      <Form.Label>Phone</Form.Label>
      <Form.Control
        className="mb-2"
        name="phone_number"
        placeholder="Phone"
        value={form.phone_number}
        onChange={handleChange}
        required
      />
      <Form.Label>Email</Form.Label>
      <Form.Control
        className="mb-2"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Button type="submit">Add Booking</Button>
    </Form>
  );
}
