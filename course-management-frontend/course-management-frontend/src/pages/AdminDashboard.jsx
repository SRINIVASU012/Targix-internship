import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 30px;
`;

const Title = styled.h1`
  text-align: center;
  color: #1e293b;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardTitle = styled.h2`
  color: #475569;
  margin-bottom: 10px;
`;

const CardNumber = styled.h1`
  color: #2563eb;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2563eb;
  color: white;
  font-size: 15px;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch("http://localhost:8080/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard");
        }

        const data = await response.json();
        setDashboard(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);

  if (!dashboard) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Title>Admin Dashboard</Title>
<CardContainer>
  <Card>
    <CardTitle>Total Students</CardTitle>
    <CardNumber>
      {dashboard.totalStudents}
    </CardNumber>
  </Card>

  <Card>
    <CardTitle>Total Courses</CardTitle>
    <CardNumber>
      {dashboard.totalCourses}
    </CardNumber>
  </Card>
</CardContainer>

<ButtonContainer>
  <Link to="/admin/courses">
    <Button>Manage Courses</Button>
  </Link>

  <Link to="/admin/students">
    <Button>Manage Students</Button>
  </Link>

  <Link to="/admin/course-stats">
    <Button>Course Statistics</Button>
  </Link>
</ButtonContainer>
</Container>
  );
}

export default AdminDashboard;
