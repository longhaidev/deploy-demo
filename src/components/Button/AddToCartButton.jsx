import React, { useState } from "react";
// styles
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { createTheme } from "@mui/material/styles";
import { BsCartPlus } from "react-icons/bs";
// redux
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
export default function AddToCartButton(props) {
  const { product, productQuantity, resetQuantity, styles } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (product) {
        product.quantity = productQuantity;
        dispatch(addToCart(product));
        if (productQuantity != 1) {
          resetQuantity();
        }
      }
      setIsLoading(false);
    }, 600);
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

  const ColorButton = styled(LoadingButton)(() => ({
    fontFamily: "Alegreya",
    border: `1px solid ${theme.palette.primary.main}`,
    color: "#ff6d00",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  }));
  return (
    <ColorButton
      sx={styles}
      loading={isLoading}
      variant="outtline"
      className="w-full !capitalize flex flex-row gap-2 items-center justify-center !text-[16px]"
      onClick={() => handleAddToCart()}
    >
      <BsCartPlus className="mb-[3px]" size={16}></BsCartPlus>
      Add to Cart
    </ColorButton>
  );
}
