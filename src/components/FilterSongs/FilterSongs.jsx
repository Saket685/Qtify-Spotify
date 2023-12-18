import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./FilterSongs.module.css";
import Carousel from "../Carousel/Carousel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterSongs({ songs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function filterSongsByGenre(songs, genreKey) {
    return songs.filter((song) => song.genre.key === genreKey);
  }

  const rockSongs = filterSongsByGenre(songs, "rock");
  // console.log("Rock Songs:", rockSongs);

  const popSongs = filterSongsByGenre(songs, "pop");
  // console.log("Pop Songs:", popSongs);

  const jazzSongs = filterSongsByGenre(songs, "jazz");
  // console.log("jazzSongs:", jazzSongs);

  const bluesSongs = filterSongsByGenre(songs, "blues");
  // console.log("bluesSongs:", bluesSongs);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography className={styles.heading}>Songs</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "32px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="All"
            {...a11yProps(0)}
            sx={{ color: "var(--color-white)" }}
          />
          <Tab
            label="Rock"
            {...a11yProps(1)}
            sx={{ color: "var(--color-white)" }}
          />
          <Tab
            label="Pop"
            {...a11yProps(2)}
            sx={{ color: "var(--color-white)" }}
          />
          <Tab
            label="Jazz"
            {...a11yProps(3)}
            sx={{ color: "var(--color-white)" }}
          />
          <Tab
            label="Blues"
            {...a11yProps(4)}
            sx={{ color: "var(--color-white)" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Carousel data={songs} isForSongs={true}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Carousel data={rockSongs} isForSongs={true}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Carousel data={popSongs} isForSongs={true}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Carousel data={jazzSongs} isForSongs={true}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Carousel data={bluesSongs} isForSongs={true}/>
      </CustomTabPanel>
    </Box>
  );
}
