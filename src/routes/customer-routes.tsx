import { Route, Routes } from "react-router";
import { Customers } from "../pages/Customers"



export function CustomerRoutes(){
  return(
    <Routes>
        <Route path="/customers" element={<Customers/>}/>
    </Routes>
  )
}