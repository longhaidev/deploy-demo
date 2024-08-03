import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export default function CheckOutButton(props) {
  const { styles } = props;
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
    color: "#ff6d00",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  }));
  const navigate = useNavigate();
  const handleCheckOut = () => {
    window.scroll(0, 0);
    console.log("checkout");
    navigate("/checkout");
  };
  return (
    <>
      <ColorButton
        sx={styles}
        variant="outline"
        className="w-full"
        onClick={() => handleCheckOut()}
      >
        Process to checkout
      </ColorButton>
    </>
  );
}
