import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
export default function Ingredient(props) {
  const { ingredients } = props;
  return (
    <>
      {ingredients ? (
        <div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h4 className="capitalize text-[18px] font-semibold md:text-[20px]">
                ingredients
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-[16px] leading-8 md:text-[18px]">
                {ingredients}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
