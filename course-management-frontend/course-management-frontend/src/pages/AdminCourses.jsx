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

const FormCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
`;

const CourseCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 18px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;

const DeleteButton = styled(Button)`
  background: #dc2626;
  margin-left: 10px;

  &:hover {
    background: #b91c1c;
  }
`;

function AdminCourses() {
  const [courses, setCourses] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/courses"
      );

      const data = await response.json();
      setCourses(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadCourses = async () => {
      await fetchCourses();
    };

    loadCourses();
  }, []);

  const addCourse = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/courses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title,
            description,
            price,
          }),
        }
      );

      if (response.ok) {
        alert("Course Added Successfully");

        setTitle("");
        setDescription("");
        setPrice("");

        fetchCourses();
      }

    } catch (error) {
      console.log(error);
    }
  };

  const deleteCourse = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:8080/courses/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        alert("Course Deleted");
        fetchCourses();
      }

    } catch (error) {
      console.log(error);
    }
  };

  const editCourse = async (course) => {

    const newTitle = prompt(
      "Enter New Title",
      course.title
    );

    const newDescription = prompt(
      "Enter New Description",
      course.description
    );

    const newPrice = prompt(
      "Enter New Price",
      course.price
    );

    if (!newTitle || !newDescription || !newPrice) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/courses/${course.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: newTitle,
            description: newDescription,
            price: newPrice,
          }),
        }
      );

      if (response.ok) {
        alert("Course Updated");
        fetchCourses();
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>

      <Title>Manage Courses</Title>

      <FormCard>

        <Input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Course Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button onClick={addCourse}>
          Add Course
        </Button>

      </FormCard>

      <CourseGrid>

        {courses.map((course) => (

          <CourseCard key={course.id}>

            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <h4>₹ {course.price}</h4>

            <Button
              onClick={() => editCourse(course)}
            >
              Edit
            </Button>

            <DeleteButton
              onClick={() => deleteCourse(course.id)}
            >
              Delete
            </DeleteButton>

          </CourseCard>

        ))}

      </CourseGrid>

    </Container>
  );
}

export default AdminCourses;