import { Container, Stack, Tab, Tabs, Box, Button } from "@mui/material";
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
  const handleChangeCinema = (event, newValue) => {
    setCinemaIndex(newValue);
    setCinemaLocationIndex(0);
  };

  const [cinemaLocationIndex, setCinemaLocationIndex] = React.useState(0);
  const handleChangeCinemaLocation = (event, newValue) => {
    setCinemaLocationIndex(newValue);
  };

  const renderCinemaList = () => {
    return cinemaList.map((cinema, index) => {
      return (
        <StyledTab
          key={index}
          label={
            <img
              width={60}
              style={{ margin: 5 }}
              src={cinema.logo}
              alt={cinema.maHeThongRap}
            />
          }
          {...a11yProps(cinema.maHeThongRap)}
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
            {cinemaLocationList.lstCumRap.map((cinemaLocation, index) => {
              return (
                <StyledTab
                  key={index}
                  label={
                    <div className="w-full text-left">
                      <p>{cinemaLocation.tenCumRap}</p>
                    </div>
                  }
                  {...a11yProps(cinemaLocation.maCumRap)}
                />
              );
            })}
          </StyledTabs>
        </TabPanel>
      );
    });
  };

  const renderMovieInCinema = () => {
    // return cinemaList.map((cinemaLocationList, index) => {
    //   return cinemaLocationList.lstCumRap.map((cinemaLocation, ciIndex) => {
    //     return (
    //       <TabPanel key={index} value={cinemaLocationIndex} index={index}>
    //         {cinemaLocation.danhSachPhim.map((phim, index) => {
    //           console.log(phim.tenPhim);
    //           // return <p className="ABCSDS">{phim.tenPhim}</p>;
    //         })}
    //       </TabPanel>
    //     );
    //   });
    // });
    return cinemaList.map((cinemaLocationList) => {
      return cinemaLocationList.lstCumRap.map((cinemaLocation, index) => {
        return (
          <TabPanel
            key={index}
            value={cinemaLocationIndex}
            index={index}
          >
            {cinemaLocation.danhSachPhim.map((film, filmIndex) => {
              return (
                <div key={filmIndex} className={`flex p-2`}>
                  <img
                    src={film.hinhAnh}
                    alt={film.tenPhim}
                    className="h-[120px] w-[100px] object-cover"
                  />
                  {/* <div className="content w-[80%] px-5">
                    <h3 className="font-semibold mb-2">{film.tenPhim}</h3>
                    <div className="schedule flex flex-wrap">
                      <div className="w-[40%] m-2">
                        <Button variant="outlined" href="">
                          01-01-2019 : 10:10
                        </Button>
                      </div>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </TabPanel>
        );
      });
    });
  };

  return (
    <Container>
      <Box
        sx={{
          border: "1px solid rgba(238,238,238,.88)",
          marginTop: 1,
          display: "flex",
          height: 720,
        }}
      >
        <StyledTabs
          orientation="vertical"
          variant="scrollable"
          value={cinemaIndex}
          onChange={handleChangeCinema}
          aria-label="cinema-movie-tabs"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {renderCinemaList()}
        </StyledTabs>
        <Box> {renderLocationCinemaList()}</Box>
        <Box> {renderMovieInCinema()}</Box>
      </Box>
    </Container>
  );
};

export default CinemaShowing;
