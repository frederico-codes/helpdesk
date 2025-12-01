import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";
import { AdminRoutes } from "./admin-routes"
import { TechniciansRoutes } from "./technicians-routes"

export function Routes(){
  return(
    <BrowserRouter>
      <AdminRoutes/>
    </BrowserRouter>
  )
}
