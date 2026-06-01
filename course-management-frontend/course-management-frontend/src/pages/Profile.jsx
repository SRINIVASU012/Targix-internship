import { useEffect, useState } from "react";
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
function Profile() {
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const updateProfile = async () => {
    const response = await fetch("http://localhost:8080/student/profile", {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      body: JSON.stringify({
        name,
        password,
      }),
    });

    const text = await response.text();

    alert(text);
  };
  useEffect(() => {
    fetch("http://localhost:8080/student/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <h2>Loading...</h2>;

  return (
    <Container>
      <Card>
      <Title>My Profile</Title>

      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>

      <h3>Edit Profile</h3>

      <Input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <Input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

     <Button onClick={updateProfile}>Update Profile</Button>
</Card>
    </Container>
  );
}

export default Profile;
