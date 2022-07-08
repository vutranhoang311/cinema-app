import Homepage from "Pages/Homepage/Homepage";
import Movies from "Pages/Movies/Movies";
import Ticket from "Pages/Ticket/Ticket";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomeTemplate from "Templates/HomeTemplate";
import GlobalStyles from "GlobalStyle";
import CssBaseline from "@mui/material/CssBaseline";
import Cinemas from "Pages/Cinemas/Cinemas";
import Members from "Pages/Members/Members";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="ticket" element={<Ticket />} />
          <Route path="movies" element={<Movies />} />
          <Route path="cinemas" element={<Cinemas />} />
          <Route path="members" element={<Members />} />
          <Route index element={<Homepage />} />
          <Route path="*" element={<Navigate to={""} />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
