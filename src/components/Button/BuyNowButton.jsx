import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
// styles
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// redux
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
export default function BuyNowButton(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = props;
  const handleBuyNow = () => {
    console.log(product);
    if (product) {
      product.quantity = 1;
      dispatch(addToCart(product));
      navigate("/cart");
    }
  };
  let theme = createTheme({
    palette: {
      primary: {
        main: "#ff6d00",
      },
      secondary: {
        main: "#ff6d00",
      },
    },
  });

  const ColorButton = styled(Button)(() => ({
    fontFamily: "Alegreya",
    border: `1px solid ${theme.palette.primary.main}`,
    color: "#Fff",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "fff",
      color: "#ff6d00",
    },
  }));
  return (
    <ColorButton
      className="w-full !capitalize !text-[16px]"
      onClick={() => handleBuyNow()}
    >
      Buy now
    </ColorButton>
  );
}
