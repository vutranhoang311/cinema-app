import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GlobalStyles from "GlobalStyle";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "animate.css";
import theme from "theme.js";

import HomeTemplate from "Templates/HomeTemplate";
import Member from "Pages/Member/Member";
import Homepage from "Pages/Homepage/Homepage";
import MovieDetail from "Pages/MovieDetail/MovieDetail";
import PurchaseTicket from "Pages/PurchaseTicket/PurchaseTicket";
import ProtectedRoute from "Routes/ProtectedRoute";
// import PAGES from "Pages/PAGES";
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="/member" element={<Member />} />
            <Route path="/detail/:movieId" element={<MovieDetail />} />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/purchase/:playingDateId"
                element={<PurchaseTicket />}
              />
            </Route>

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
