import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "../Header";
import {
  Profile,
  Lot,
  News,
  Stats,
  Login,
  Registration,
  NotFound,
} from "../Main";
import { Footer } from "../Footer";

export const Page = () => {
  return (
    <div className="page">
      <Router>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lot" element={<Lot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
