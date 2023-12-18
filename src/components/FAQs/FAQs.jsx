import React from "react";
import styles from "./FAQs.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  return (
    <div className={styles.wrapper}>
      <Typography
        style={{ fontSize: "50px", fontWeight: 600, textAlign: "center" }}
      >
        FAQs
      </Typography>
      <Accordion className={styles.accordion_border}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.color_green} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordion_summary}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion_border}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.color_green}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordion_summary}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQs;
