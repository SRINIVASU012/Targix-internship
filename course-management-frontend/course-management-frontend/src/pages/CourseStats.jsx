import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 30px;
`;

const Title = styled.h1`
  text-align: center;
  color: #1e293b;
  margin-bottom: 30px;
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #2563eb;
  color: white;
`;

const Th = styled.th`
  padding: 15px;
  text-align: left;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #e2e8f0;
`;

const Tr = styled.tr`
  &:hover {
    background: #f8fafc;
  }
`;

function CourseStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/admin/course-stats",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Container>
      <Title>Course Statistics</Title>

      <TableContainer>
        <StyledTable>
          <TableHead>
            <tr>
              <Th>Course</Th>
              <Th>Students Enrolled</Th>
            </tr>
          </TableHead>

          <tbody>
            {stats.map((course) => (
              <Tr key={course.courseId}>
                <Td>{course.courseTitle}</Td>
                <Td>{course.studentCount}</Td>
              </Tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </Container>
  );
}

export default CourseStats;