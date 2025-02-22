import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "../Header";
import {
  Index,
  Profile,
  Lot,
  Analytic,
  Login,
  Registration,
  NotFound,
} from "../Main";
import { Footer } from "../Footer";

export const Page = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/stats" element={<Analytic />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lots/:lotId" element={<Lot />} />
        <Route path="/errors/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
