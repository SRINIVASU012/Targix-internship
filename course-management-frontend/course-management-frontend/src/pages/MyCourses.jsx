import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 30px;
`;

const Title = styled.h1`
  color: #1e293b;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  background: #f75959;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const MyCourses = () => {

  const [courses, setCourses] = useState([]);

  const fetchMyCourses = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/student/my-courses",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

if (!response.ok) {
  console.log("Status:", response.status);
  alert(`Request failed with status ${response.status}`);
  return;
}

const data = await response.json();
setCourses(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

  const loadCourses = async () => {
    await fetchMyCourses();
  };

  loadCourses();

}, []);

  const cancelEnrollment = async (id) => {

    try {

      const response = await fetch(
        `http://localhost:8080/student/cancel/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {

        alert("Enrollment Cancelled");

        fetchMyCourses();
      }

    } catch (error) {
      console.log(error);
    }
  };

 return (
  <Container>

    <Title>My Courses</Title>

    {courses.length === 0 ? (

      <Card>
        <h3>No Courses Enrolled Yet</h3>
      </Card>

    ) : (

      courses.map((course) => (

        <Card key={course.id}>

          <h3>{course.title}</h3>

          <p>{course.description}</p>

          <Button
            onClick={() =>
              cancelEnrollment(course.id)
            }
          >
            Cancel Enrollment
          </Button>

        </Card>

      ))
    )}

  </Container>
);
};

export default MyCourses;