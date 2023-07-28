import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const BooksForm = ({ onSave, selectedBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bookData, setBookData] = useState({
    bookName: "",
    author: "",
    year:"",
    publishedOn: "",
  });

  useEffect(() => {
    if (selectedBook) {
      setBookData(selectedBook);
      setIsEditing(true);
    } else {
      setBookData({ bookName:"", author: "",year:"", publishedOn: "" });
      setIsEditing(false);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSave = () => {
    onSave(bookData);
    setBookData({ bookName:"", author: "", publishedOn: "" });
    setIsEditing(false);
  };

  return (
    <Form>
      <Form.Group controlId="bookName">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          name="bookName"
          value={bookData.bookName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="year">
        <Form.Label>published On</Form.Label>
        <Form.Control
          type="number"
          name="year"
          value={bookData.year}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="publishedOn">
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="date"
          name="publishedOn"
          value={bookData.publishedOn}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSave}>
        {isEditing ? "Update" : "Save"}
      </Button>
    </Form>
  );
};

export default BooksForm;
