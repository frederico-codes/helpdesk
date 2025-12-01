import { Route, Routes } from "react-router";
import { Calls } from "../pages/Calls";
import { Customers } from "../pages/Customers";
import { Services } from "../pages/Services";
import { Technicians } from "../pages/Technicians";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/calls" element={<Calls />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/technicians" element={<Technicians />} />
    </Routes>
  );
}
