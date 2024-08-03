import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export default function DefaultButton(props) {
  const {
    styles,
    primaryColor,
    secondaryColor,
    textColorOnHover,
    textColor,
    content,
    handleClick,
  } = props;
  let theme = createTheme({
    palette: {
      primary: {
        main: primaryColor ?? "#ff6d00",
      },
      secondary: {
        main: secondaryColor ?? "#ff6d00",
      },
    },
  });

  const ColorButton = styled(Button)(() => ({
    fontFamily: "Alegreya",
    border: `1px solid ${theme.palette.primary.main}`,
    color: textColor ?? "#ff6d00",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: textColorOnHover ?? "#fff",
    },
  }));
  const navigate = useNavigate();
  return (
    <>
      <ColorButton
        sx={styles}
        variant="outline"
        className="w-full"
        onClick={handleClick}
      >
        {content ?? "Button"}
      </ColorButton>
    </>
  );
}
