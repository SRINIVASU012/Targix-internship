import { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 30px;
`;

const Title = styled.h1`
  color: #1e293b;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #2563eb;
  color: white;
`;

const DeleteButton = styled(Button)`
  background: #dc2626;
  margin-left: 10px;
`;
function ManageStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch(
      "http://localhost:8080/admin/students",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();
    setStudents(data);
  };

  const deleteStudent = async (id) => {
    await fetch(
      `http://localhost:8080/admin/students/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    fetchStudents();
  };

  const updatePassword = async (id) => {
    const newPassword = prompt("Enter New Password");

    if (!newPassword) return;

    await fetch(
      `http://localhost:8080/admin/students/${id}/password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      }
    );

    alert("Password Updated Successfully");
  };

  useEffect(() => {
    const loadStudents = async () => {
      await fetchStudents();
    };

    loadStudents();
  }, []);

  return (
    <Container>
      <Title>Manage Students</Title>
<Grid>
      {students.map((student) => (
        <Card
          key={student.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
          }}
        >
          <h4>{student.name}</h4>
          <p>{student.email}</p>

          <Button
            onClick={() => updatePassword(student.id)}
            style={{ marginRight: "10px" }}
          >
            Change Password
          </Button>

          <DeleteButton onClick={() => deleteStudent(student.id)}>
            Delete
          </DeleteButton>
        </Card>
      ))}
      </Grid>
    </Container>
  );
}

export default ManageStudents;