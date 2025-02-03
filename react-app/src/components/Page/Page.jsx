import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "../Header";
import {
  Index,
  Profile,
  Lot,
  Stats,
  Login,
  Registration,
  NotFound,
} from "../Main";
import { Footer } from "../Footer";

export const Page = () => {
  return (
    <Router basename="PicStore">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lot" element={<Lot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
