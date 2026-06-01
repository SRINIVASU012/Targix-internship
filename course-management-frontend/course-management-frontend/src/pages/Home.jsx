import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 90vh;
  background: #f8fafc;
  padding: 40px;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 55px;
  color: #1e293b;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #475569;
  max-width: 700px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const Button = styled(Link)`
  background-color: #2563eb;
  color: white;
  padding: 14px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background-color: #1d4ed8;
  }
`;



const Home = () => {

  return (
    <Container>

      <Hero>

        <Title>
          Course Management Platform
        </Title>

        <Subtitle>
          Learn modern technologies, enroll in courses,
          and manage your learning journey easily.
        </Subtitle>

        <ButtonContainer>

          <Button to="/courses">
            Explore Courses
          </Button>

          <Button to="/register">
            Get Started
          </Button>

        </ButtonContainer>

      </Hero>

    </Container>
  );
};

export default Home;