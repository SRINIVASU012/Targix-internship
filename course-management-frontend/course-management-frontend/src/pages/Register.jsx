import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 400px;
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #1e293b;
  margin-bottom: 25px;
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
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #1d4ed8;
  }
`;
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Register</Title>

        <form onSubmit={handleRegister}>
          <Input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <Button type="submit">Register</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
