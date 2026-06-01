import styled from "styled-components";
import { Link } from "react-router-dom";

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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0,0,0,0.08);
  text-align: center;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
`;

function StudentDashboard() {
  return (
    <Container>
      <Title>Student Dashboard</Title>

      <CardGrid>
        <Card>
          <h3>Browse Courses</h3>
          <p>View and enroll in available courses.</p>

          <Link to="/courses">
            <Button>View Courses</Button>
          </Link>
        </Card>

        <Card>
          <h3>My Courses</h3>
          <p>View your enrolled courses.</p>

          <Link to="/my-courses">
            <Button>My Courses</Button>
          </Link>
        </Card>

        <Card>
          <h3>Profile</h3>
          <p>Manage your profile information.</p>

          <Link to="/profile">
            <Button>Profile</Button>
          </Link>
        </Card>
      </CardGrid>
    </Container>
  );
}

export default StudentDashboard;