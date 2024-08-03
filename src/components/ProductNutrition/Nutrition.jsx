import React from "react";
import {
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Table,
  TableBody,
} from "@mui/material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
export default function Nutrition(props) {
  const { nutrition } = props;
  function createData(ingredients, nutrition) {
    return { ingredients, nutrition };
  }
  const rows = [
    createData("Calories", nutrition?.calories),
    createData("Protein", nutrition?.protein),
    createData("Total Sugar", nutrition?.total_sugar),
    createData("Total Carbohydrate", nutrition?.total_carb),
    createData("Total Fat", nutrition?.total_fat),
    createData("Saturated Fat", nutrition?.saturated_fat),
    createData("Trans Fat", nutrition?.trans_fat),
  ];
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h4 className="capitalize text-[20px] font-semibold md:text-[20px]">
            nutrition
          </h4>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer className="!font-[Alegreya]">
            <Table sx={{ minWidth: 150 }} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.ingredients}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.ingredients}
                    </TableCell>

                    <TableCell
                      align="right"
                      className="normal-case text-[18px] md:text-[18px]"
                      style={{ textDecoration: "none" }}
                    >
                      {row.nutrition}{" "}
                      {row.ingredients === "Calories" ? "Kcal" : "g"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
