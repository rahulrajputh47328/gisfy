import React from "react";
import { Table, Button } from "react-bootstrap";

const BooksTable = ({ data, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Author</th>
          <th>Year</th>
          <th>Published On</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.bookName}</td>
            <td>{item.author}</td>
            <td>{item.year}</td>
            <td>{item.publishedOn}</td>
            
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

export default BooksTable;
