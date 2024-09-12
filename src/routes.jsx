import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainCvPage from "./page/MainCvPage/MainCvPage.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainCvPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
