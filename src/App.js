import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GlobalStyles from "GlobalStyle";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "theme.js";

import HomeTemplate from "Templates/HomeTemplate";
import Cinema from "Pages/Cinema/Cinema";
import Member from "Pages/Member/Member";
import Homepage from "Pages/Homepage/Homepage";
import Movie from "Pages/Movie/Movie";
import Ticket from "Pages/Ticket/Ticket";
// import PAGES from "Pages/PAGES";
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/cinema" element={<Cinema />} />
            <Route path="/member" element={<Member />} />
            <Route index element={<Homepage />} />
            <Route path="*" element={<Navigate to={""} />} />
          </Route>
        </Routes>
      </ThemeProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
