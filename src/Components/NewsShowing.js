import { Container } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ScrollAnimation from "react-animate-on-scroll";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="news-tabpanel"
      hidden={value !== index}
      id={`news-tabpanel-${index}`}
      aria-labelledby={`news-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `news-tab-${index}`,
    "aria-controls": `news-tabpanel-${index}`,
  };
}

const NewsShowing = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container id="news-showing">
      <Box
        className="animate__fadeIn"
        sx={{
          width: "100%",
        }}
      >
        <Box>
          <Tabs
            centered
            sx={{
              width: "100%",
              display: "flex",
              "& .MuiButtonBase-root": {
                marginRight: 2,
                transform: "scale(1)",
                transition: "all 500ms",
              },
              "& .MuiButtonBase-root:hover": {
                transform: "scale(1.3)",
              },
              "& .Mui-selected": {
                transform: "scale(1.3)",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="news tabs"
          >
            <Tab label="Điện ảnh 24h" {...a11yProps(0)} />
            <Tab label="Review" {...a11yProps(1)} />
            <Tab label="Khuyến mãi" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <ScrollAnimation animateIn="animate__fadeIn">
            Item Two Item Two Item Two Item Two Item Two
          </ScrollAnimation>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ScrollAnimation animateIn="animate__fadeIn">
            Item Two
          </ScrollAnimation>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ScrollAnimation animateIn="animate__fadeIn">
            Item Three{" "}
          </ScrollAnimation>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default NewsShowing;
