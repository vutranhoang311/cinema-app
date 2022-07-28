import { Box, Tab, Tabs, Grid } from "@mui/material";
import React from "react";
import styles from "./movieDetailContent.module.scss";
import styled from "styled-components";
import theme from "theme";
import dayjs from "dayjs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const StyledTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    background-color: ${theme.palette.secondary.light};
  }
`;
const StyledTab = styled(Tab)`
  position: relative;
  height: 70px;
  opacity: 0.5;
  &.css-b6ifi6-MuiButtonBase-root-MuiTab-root.Mui-selected {
    font-weight: bold;
    opacity: 1;
    color: ${theme.palette.secondary.light};
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 80%;
    background-color: rgba(238, 238, 238, 0.88);
  }
  & img {
    width: 60px;
  }
`;

const MoviePlaySchedule = ({ moviePlaySchedule }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderLogoTab = () => {
    return moviePlaySchedule.heThongRapChieu.map(
      (cinemaLocationList, index) => {
        return (
          <StyledTab
            value={index}
            key={index}
            label={
              <img
                src={cinemaLocationList.logo}
                alt={cinemaLocationList.maHeThongRap}
              />
            }
            {...a11yProps(0)}
          />
        );
      }
    );
  };
  const renderTabPanel = () => {
    return moviePlaySchedule.heThongRapChieu.map(
      (cinemaLocationList, index) => {
        return (
          <TabPanel className="w-full" key={index} value={value} index={index}>
            {cinemaLocationList.cumRapChieu.map((cinemaLocation, index) => {
              return (
                <Grid key={index} container className="mb-3">
                  <Grid item xs={12} className="mb-3 ">
                    <Box
                      className={`border-l-8 border-indigo-600 bg-[#f26b38] px-5 py-2 w-2/3`}
                    >
                      <h2 className={` text-white font-bold`}>
                        {cinemaLocation.tenCumRap}
                      </h2>
                    </Box>
                  </Grid>
                  {cinemaLocation.lichChieuPhim.map((lichChieu) => {
                    return (
                      <Grid item xs={6} sm={3} className="">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            {dayjs(lichChieu.ngayChieuGioChieu).format(
                              "MM-DD-YYYY HH:mm"
                            )}
                          </span>
                        </button>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          </TabPanel>
        );
      }
    );
  };

  if (!moviePlaySchedule)
    return (
      <h2 className={`${styles["title"]} my-4`}>PHIM NÀY CHƯA ĐƯỢC CHIẾU</h2>
    );

  return (
    <Box>
      <h2 className={`${styles["title"]} my-4`}>LỊCH CHIẾU</h2>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <StyledTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            height: 460,
            paddingBottom: 2,
            paddingTop: 2,
          }}
        >
          {renderLogoTab()}
        </StyledTabs>

        {renderTabPanel()}
      </Box>
    </Box>
  );
};

export default MoviePlaySchedule;
