import { useEffect, useState } from "react";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 30px;
`;

const Title = styled.h1`
  color: #1e293b;
  margin-bottom: 25px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const enrollCourse = async (courseId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/student/enroll/${courseId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const message = await response.text();

      if (response.ok) {
        alert(message);
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <PageContainer>
      <Title>Available Courses</Title>

      <Grid>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            enrollCourse={enrollCourse}
          />
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Courses;