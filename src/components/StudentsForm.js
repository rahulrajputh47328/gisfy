import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentsForm = ({ onSave, selectedStudent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    name: "",
    class: "",
    image: null, 
    video: null,
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudentData(selectedStudent);
      setIsEditing(true);
    } else {
      setStudentData({ name: "", class: "", image: null, video: null });
      setIsEditing(false);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setStudentData({ ...studentData, image: file });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setStudentData({ ...studentData, video: file });
  };

  const handleSave = () => {
    onSave(studentData);
    setStudentData({ name: "", class: "", image: null, video: null });
    setIsEditing(false);
  };

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Student Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={studentData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="class">
        <Form.Label>Class</Form.Label>
        <Form.Control
          type="text"
          name="class"
          value={studentData.class}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        {studentData.image && (
          <img src={URL.createObjectURL(studentData.image)} alt="Student Preview" style={{ maxWidth: "100px", maxHeight: "100px" }} />
        )}
        <Form.Control
          type="file"
          name="image"
          onChange={handleImageChange}
        />
      </Form.Group>

      <Form.Group controlId="video">
        <Form.Label>Video</Form.Label>
        {studentData.video && (
          <video controls autoPlay width="200" height="100">
            <source src={URL.createObjectURL(studentData.video)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <Form.Control
          type="file"
          name="video"
          onChange={handleVideoChange}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSave}>
        {isEditing ? "Update" : "Save"}
      </Button>
    </Form>
  );
};

export default StudentsForm;
