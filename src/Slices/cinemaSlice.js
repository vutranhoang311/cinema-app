const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cinemas: [
    {
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      biDanh: "bhd-star-cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      maHeThongRap: "CGV",
      tenHeThongRap: "cgv",
      biDanh: "cgv",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      maHeThongRap: "CineStar",
      tenHeThongRap: "CineStar",
      biDanh: "cinestar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      maHeThongRap: "Galaxy",
      tenHeThongRap: "Galaxy Cinema",
      biDanh: "galaxy-cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    },
    {
      maHeThongRap: "LotteCinima",
      tenHeThongRap: "Lotte Cinema",
      biDanh: "lotte-cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    },
    {
      maHeThongRap: "MegaGS",
      tenHeThongRap: "MegaGS",
      biDanh: "megags",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    },
  ],
};

const cinemaSlice = createSlice({
  name: "cinemas",
  initialState: initialState,
  reducers: {},
});

export default cinemaSlice.reducer;
