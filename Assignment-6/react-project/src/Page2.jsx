import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "antd";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { CenterCard } from "./StyledComponents";

export const Page2 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useContext(ProductContext);

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const data = await res.json();

      dispatch({
        type: "ADD_PRODUCT",
        payload: data,
      });

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <CenterCard
      style={{
        maxWidth: 400,
        margin: "50px auto",
        borderRadius: 12,
      }}
    >
      <h2 style={{ color: "#2E7D32" }}>Confirm Fresh Item </h2>

      <p>
        <b>Name:</b> {state.title}
      </p>
      <p>
        <b>Price:</b> ₹{state.price}
      </p>
      <p>
        <b>Type:</b> {state.category}
      </p>

      <Button type="primary" onClick={handleSubmit}>
        Confirm & Add
      </Button>
    </CenterCard>
  );
}


