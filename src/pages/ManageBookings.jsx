import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookings, deleteBooking } from "../services/apiClient";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  getBookings().then((data) => setBookings(data));
  }, []);

  const handleDelete = async (id) => {
    await deleteBooking(id);
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Bookings</h2>
  <Button as={Link} to="/bookings/add">
          Create Booking
        </Button>
      </div>

      <Table striped bordered className="mt-3">
        <thead>
          <tr>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.phone_number}</td>
              <td>{b.email}</td>
              <td>
                <Button
                  as={Link}
                  to={`/bookings/edit/${b.id}`}
                  size="sm"
                  variant="warning"
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(b.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
