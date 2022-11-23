import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Stdrsc from "./pages/Stdrsc";
import Tchrsc from "./pages/Tchrsc";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Footer from "./pages/Footer";
import styles from "./mystyle.module.css";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Info" element={<Info />} />
            <Route path="Stdrsc" element={<Stdrsc />} />
            <Route path="Tchrsc" element={<Tchrsc />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Volunteer" element={<Volunteer />} />
            <Route path="*" element={<Navigate to="/" />}  />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}