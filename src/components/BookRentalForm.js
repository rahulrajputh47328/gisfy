import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const BookRentalForm = ({ students, books, onSave, selectedRental, bookRentals }) => {
  const [rentalData, setRentalData] = useState({
    studentName: "",
    bookName: "",
    startDate: "",
    endDate: "",
  });
  useEffect(() => {
    if (selectedRental !== null) {
      const rental = bookRentals[selectedRental];
      setRentalData(rental);
    } else {
      setRentalData({
        studentName: "",
        bookName: "",
        startDate: "",
        endDate: "",
      });
    }
  }, [selectedRental, bookRentals]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRentalData({ ...rentalData, [name]: value });
  };

  const handleSave = () => {
    onSave(rentalData);
    setRentalData({
      studentName: "",
      bookName: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setRentalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Form>
      <Form.Group controlId="studentName">
        <Form.Label>Student Name</Form.Label>
        <Form.Control as="select" name="studentName" value={rentalData.studentName} onChange={handleChange}>
          <option value="">Select a student</option>
          {students.map((student, index) => (
            <option key={index} value={student.name}>
              {student.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bookName">
        <Form.Label>Book Name</Form.Label>
        <Form.Control as="select" name="bookName" value={rentalData.bookName} onChange={handleChange1}>
          <option value="">Select a book</option>
          {books.map((book, index) => (
            <option key={index} value={book.name}>
              {book.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" name="startDate" value={rentalData.startDate} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="date" name="endDate" value={rentalData.endDate} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" onClick={handleSave}>
        {selectedRental !== null ? "Update" : "Save"}
      </Button>
    </Form>
  );
};

export default BookRentalForm;
