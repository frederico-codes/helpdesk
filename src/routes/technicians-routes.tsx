import { Routes, Route } from "react-router-dom";
import { MyCallingsTechnicians } from "../pages/MyCallingsTechnicians";

export function TechniciansRoutes() {
  return (
    <Routes>
      <Route path="/mycallings" element={<MyCallingsTechnicians />} />
    </Routes>
  );
}
