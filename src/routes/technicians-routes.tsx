import { Routes, Route } from "react-router-dom";
import { MyCallingsTechnicians } from "../pages/MyCallingsTechnicians";
import {MyCallingsTechniciansDetail} from "../pages/MyCallingsTechniciansDetail"

export function TechniciansRoutes() {
  return (
    <Routes>     
      <Route path="/" element={<MyCallingsTechnicians />} />
      <Route path="/mycallingstecdetail" element={<MyCallingsTechniciansDetail />} />
    </Routes>
  );
}
