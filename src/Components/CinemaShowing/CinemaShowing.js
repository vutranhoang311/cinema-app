import {
  Container,
  Stack,
  Tab,
  Tabs,
  Box,
  Button,
  TabScrollButton,
  Link,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import theme from "theme";

// import "./CinemaShowing.scss";
const StyledTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    background-color: ${theme.palette.secondary.light};
  }
`;

const TabPanel = (props) => {
  const { children, value, index, className, ...other } = props;
  return (
    <div
      className={className}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

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
`;

const CinemaShowing = ({ cinemaList }) => {
  const [cinemaIndex, setCinemaIndex] = React.useState(0);
  const handleChangeCinema = (event, newValue, idCinemaLocation) => {
    setCinemaIndex(newValue);
    setCinemaLocationIndex(0 + cinemaList[newValue].lstCumRap[0].maCumRap);
  };
  const [cinemaLocationIndex, setCinemaLocationIndex] = React.useState(
    0 + cinemaList[0].lstCumRap[0].maCumRap
  );
  const handleChangeCinemaLocation = (event, index) => {
    setCinemaLocationIndex(index);
  };

  const renderCinemaList = () => {
    return cinemaList.map((cinema, index) => {
      return (
        <StyledTab
          key={index}
          value={index}
          label={
            <img
              width={60}
              style={{ margin: 5 }}
              src={cinema.logo}
              alt={cinema.maHeThongRap}
            />
          }
          {...a11yProps(cinema.index)}
        />
      );
    });
  };

  const renderLocationCinemaList = () => {
    return cinemaList.map((cinemaLocationList, index) => {
      return (
        <TabPanel
          key={index}
          value={cinemaIndex}
          index={index}
          className="w-[200px]"
        >
          <StyledTabs
            orientation="vertical"
            variant="scrollable"
            value={cinemaLocationIndex}
            onChange={handleChangeCinemaLocation}
            aria-label="cinema-localtion-list-tabs"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              height: 640,
            }}
          >
            {cinemaLocationList.lstCumRap.map(
              (cinemaLocation, locationIndex) => {
                return (
                  <StyledTab
                    key={locationIndex}
                    value={locationIndex + cinemaLocation.maCumRap}
                    label={
                      <div className="w-full text-left">
                        <p>{cinemaLocation.tenCumRap}</p>
                      </div>
                    }
                    {...a11yProps(cinemaLocation.maCumRap)}
                  />
                );
              }
            )}
          </StyledTabs>
        </TabPanel>
      );
    });
  };

  const renderMovieInCinema = () => {
    return cinemaList.map((cinemaLocationList) => {
      return cinemaLocationList.lstCumRap.map(
        (cinemaLocation, locationIndex) => {
          // console.log(locationIndex + cinemaLocation.maCumRap);
          return (
            <TabPanel
              key={locationIndex + cinemaLocation.maCumRap}
              value={cinemaLocationIndex}
              index={locationIndex + cinemaLocation.maCumRap}
              className="h-[640px] overflow-y-scroll overflow-x-hidden"
            >
              {cinemaLocation.danhSachPhim.map((film, filmIndex) => {
                return (
                  <div key={film.maPhim} className={`flex p-2  border-b-[1px]`}>
                    <img
                      src={film.hinhAnh}
                      alt={film.tenPhim}
                      className="h-[120px] w-[100px] object-cover"
                    />
                    <div className="content w-[80%] pl-5">
                      <h3 className="font-semibold mb-2">{film.tenPhim}</h3>
                      <p>{cinemaLocation.diaChi}</p>
                      <div className="grid grid-cols-3 gap-2">
                        {film.lstLichChieuTheoPhim
                          .slice(0, 12)
                          .map((lichChieu) => {
                            return (
                              <div key={lichChieu.maLichChieu} className="">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {dayjs(lichChieu.ngayChieuGioChieu).format(
                                      "MM-DD-YYYY HH:mm"
                                    )}
                                  </span>
                                </button>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabPanel>
          );
        }
      );
    });
  };

  return (
    <Container>
      <Box
        sx={{
          border: "1px solid rgba(238,238,238,.88)",
          marginTop: 1,
          display: "flex",
          height: 640,
          marginBottom: 2,
          overflow: "hidden",
        }}
      >
        <StyledTabs
          orientation="vertical"
          variant="scrollable"
          value={cinemaIndex}
          onChange={handleChangeCinema}
          aria-label="cinema-movie-tabs"
          sx={{ borderRight: 1, borderColor: "divider", minWidth: 90 }}
        >
          {renderCinemaList()}
        </StyledTabs>

        <Box> {renderLocationCinemaList()}</Box>

        {renderMovieInCinema()}
      </Box>
    </Container>
  );
};

export default CinemaShowing;
