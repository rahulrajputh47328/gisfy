import React from "react";
import { Table, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentsTable = ({ data, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Class</th>
          <th>Image</th>
          <th>Video</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.class}</td>
            <td>
              {item.image && (
                <img src={URL.createObjectURL(item.image)} alt="" style={{ maxWidth: "100px", maxHeight: "100px" }} />
              )}
            </td>
            <td>
              {item.video && (
                <video controls autoPlay width="200" height="100">
                  <source src={URL.createObjectURL(item.video)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </td>
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

export default StudentsTable;
