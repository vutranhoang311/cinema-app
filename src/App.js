import Homepage from "Pages/Homepage/Homepage";
import Movies from "Pages/Movies/Movies";
import Ticket from "Pages/Ticket/Ticket";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomeTemplate from "Templates/HomeTemplate";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="ticket" element={<Ticket />} />
          <Route path="movies" element={<Movies />} />

          <Route index element={<Homepage />} />
          <Route path="*" element={<Navigate to={""} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
