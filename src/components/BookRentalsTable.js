import React from "react";
import { Table, Button } from "react-bootstrap";

const BookRentalsTable = ({ data, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Book Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.studentName}</td>
            <td>{item.bookName}</td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
            <td>
              <Button variant="info" onClick={() => onEdit(index)}>Edit</Button>
              <Button variant="danger" onClick={() => onDelete(index)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BookRentalsTable;
