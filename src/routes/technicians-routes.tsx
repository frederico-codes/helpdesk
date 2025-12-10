import { Routes, Route } from "react-router-dom";
import { Technicians } from "../pages/Technicians";

export function TechniciansRoutes() {
  return (
    <Routes>
      <Route path="/technicians" element={<Technicians />} />
    </Routes>
  );
}
