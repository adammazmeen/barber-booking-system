import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getBooking, updateBooking } from "../services/apiClient";
import { useParams, useNavigate } from "react-router-dom";

export default function EditBooking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    getBooking(id).then((res) => setForm(res));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBooking(id, form);
    navigate("/bookings");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Service</Form.Label>
      <Form.Control
        className="mb-2"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <Form.Label>Description</Form.Label>
      <Form.Control
        className="mb-2"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <Form.Label>Date</Form.Label>
      <Form.Control
        className="mb-2"
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <Form.Label>Time</Form.Label>
      <Form.Control
        className="mb-2"
        name="time"
        type="time"
        value={form.time}
        onChange={handleChange}
        required
      />
      <Form.Label>Phone</Form.Label>
      <Form.Control
        className="mb-2"
        name="phone_number"
        value={form.phone_number}
        onChange={handleChange}
        required
      />
      <Form.Label>Email</Form.Label>
      <Form.Control
        className="mb-2"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Button type="submit">Update Booking</Button>
    </Form>
  );
}
