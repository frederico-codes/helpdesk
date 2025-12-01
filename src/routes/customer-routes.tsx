import { Route, Routes } from "react-router";
import { MyCallingsCustomers } from "../pages/MyCallingsCustomers"



export function CustomerRoutes(){
  return(
    <Routes>
        <Route path="/mycallingsCustomers" element={<MyCallingsCustomers/>}/>
    </Routes>
  )
}