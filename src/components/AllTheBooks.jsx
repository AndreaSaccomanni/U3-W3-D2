import { Col, Container, Row } from "react-bootstrap";
import books from "../horror.json";

import Card from "react-bootstrap/Card";
const AllTheBooks = () => (
  <Container>
    <Row className="justify-content-center">
      {books.map((book) => {
        return (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={4} xl={4} style={{ marginBottom: "20px" }}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <div>
                  <Card.Text className="d-flex justify-content-around mt-4">
                    <p>
                      <strong>Category: </strong>
                      {book.category}
                    </p>
                    <p>
                      <strong>Price: </strong>
                      {book.price}$
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>
);
export default AllTheBooks;
