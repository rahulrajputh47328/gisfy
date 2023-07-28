import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BooksTable from './components/BooksTable';
import StudentsTable from './components/StudentsTable';
import BooksForm from './components/BooksForm';
import StudentsForm from './components/StudentsForm';
import BookRentalForm from './components/BookRentalForm';
import BookRentalsTable from './components/BookRentalsTable';

const App = () => {
  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState([]);
  const [editedStudent, setEditedStudent] = useState(null);
  const [editedBook, setEditedBook] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookRentals, setBookRentals] = useState([]); // Define and initialize the bookRentals array
  const [selectedRental, setSelectedRental] = useState(null);
  const [rentalData, setRentalData] = useState({
    studentName: "",
    bookName: "",
    startDate: "",
    endDate: "",
  });

  const handleStudentSave = (studentData) => {
    if (editedStudent !== null) {
      // Update existing student
      const updatedStudents = [...students];
      updatedStudents[editedStudent] = studentData;
      setStudents(updatedStudents);
      setEditedStudent(null);
      setSelectedStudent(null);
    } else {
      // Add new student
      setStudents([...students, studentData]);
    }
  };

  const handleBookSave = (bookData) => {
    if (editedBook !== null) {
      // Update existing book
      const updatedBooks = [...books];
      updatedBooks[editedBook] = bookData;
      setBooks(updatedBooks);
      setEditedBook(null);
      setSelectedBook(null);
    } else {
      // Add new book
      setBooks([...books, bookData]);
    }
  };

  const handleStudentEdit = (index) => {
    setEditedStudent(index);
    setSelectedStudent(students[index]);
  };

  const handleBookEdit = (index) => {
    setEditedBook(index);
    setSelectedBook(books[index]);
  };

  const handleStudentDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    setEditedStudent(null);
    setSelectedStudent(null);
  };

  const handleBookDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    setEditedBook(null);
    setSelectedBook(null);
  };

  const handleRentalSave = (rentalData) => {
    setBookRentals([...bookRentals, rentalData]);
  };

  const handleBookRentalEdit = (index) => {
    setSelectedRental(index);
    setSelectedStudent({ name: bookRentals[index].studentName });
    setSelectedBook({ name: bookRentals[index].bookName });
    setRentalData({
      studentName: bookRentals[index].studentName,
      bookName: bookRentals[index].bookName,
      startDate: bookRentals[index].startDate,
      endDate: bookRentals[index].endDate,
    });
  };

  const handleBookRentalDelete = (index) => {
    const updatedRentals = [...bookRentals];
    updatedRentals.splice(index, 1);
    setBookRentals(updatedRentals);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Student Form</h1>
          <StudentsForm onSave={handleStudentSave} selectedStudent={selectedStudent} />
        </Col>
        <Col>
          <h1>Book Form</h1>
          <BooksForm onSave={handleBookSave} selectedBook={selectedBook} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Students</h1>
          <StudentsTable data={students} onEdit={handleStudentEdit} onDelete={handleStudentDelete} />
        </Col>
        <Col>
          <h1>Books</h1>
          <BooksTable data={books} onEdit={handleBookEdit} onDelete={handleBookDelete} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Book Rentals</h1>
          <BookRentalForm students={students} books={books}  onSave={handleRentalSave} bookRentals={bookRentals} selectedRental={selectedRental} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Book Rental Details</h1>
          <BookRentalsTable data={bookRentals} onEdit={handleBookRentalEdit} onDelete={handleBookRentalDelete} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
