import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PriceList() {
  const services = [
    { id: 1, name: "Haircut", price: "RM25", duration: "30m" },
    { id: 2, name: "Beard Trim", price: "RM15", duration: "15m" },
    { id: 3, name: "Haircut + Beard", price: "RM35", duration: "45m" },
    { id: 4, name: "Kids Haircut", price: "RM20", duration: "25m" },
    { id: 5, name: "Hot Towel Shave", price: "RM30", duration: "30m" },
    { id: 6, name: "Fade", price: "RM28", duration: "35m" },
  ];

  return (
    <Container className="mt-4">
      <h2>Price List</h2>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.id}>
              <td>
                <div className="fw-bold">{s.name}</div>
                <div className="text-muted small">{s.duration}</div>
              </td>
              <td>{s.price}</td>
              <td>
                <Button
                  as={Link}
                  to={`/bookings/add?service=${encodeURIComponent(s.name)}`}
                  size="sm"
                >
                  Book Now
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
