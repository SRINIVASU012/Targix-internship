import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h3`
  color: #1e293b;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #64748b;
`;

const Price = styled.h4`
  color: #2563eb;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;

function CourseCard({ course, enrollCourse }) {
  const role = localStorage.getItem("role");

  return (
    <Card>
      <Title>{course.title}</Title>

      <Description>{course.description}</Description>

      <Price>₹ {course.price}</Price>

      {role === "STUDENT" && (
        <Button onClick={() => enrollCourse(course.id)}>
          Enroll
        </Button>
      )}
    </Card>
  );
}

export default CourseCard;