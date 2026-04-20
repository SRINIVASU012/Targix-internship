import styled from "styled-components";

/* Page Container */
export const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: #d0e6e6;
`;

/* Header */
export const Header = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #0b0907;
  margin-bottom: 20px;
  text-align: center;
  
`;

/* Filters Wrapper */
export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

/* Table Wrapper */
export const TableWrapper = styled.div`
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

/* Styled Button */
export const PrimaryButton = styled.button`
  background: #2E7D32;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: #5e3d1b;
  }
`;

/* Center Card (Page2) */
export const CenterCard = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;