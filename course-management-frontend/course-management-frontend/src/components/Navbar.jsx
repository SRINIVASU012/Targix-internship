import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #0f172a;
  padding: 16px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #60a5fa;
  }
`;

const Button = styled.button`
  padding: 8px 14px;
  border: none;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Nav>
      <Logo>CourseHub</Logo>

      <NavLinks>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/courses">Courses</StyledLink>

        {role === "ADMIN" && (
          <>
            <StyledLink to="/admin">Dashboard</StyledLink>
            <StyledLink to="/admin/students">Students</StyledLink>
          </>
        )}

        {role === "STUDENT" && (
          <>
            <StyledLink to="/my-courses">My Courses</StyledLink>
            <StyledLink to="/profile">Profile</StyledLink>
          </>
        )}

        {token ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
