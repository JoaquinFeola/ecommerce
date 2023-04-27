import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { EcommerceRoutes } from "../ecommerce/routes/EcommerceRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route path="/*" element={ <EcommerceRoutes /> }/>
    </Routes>
  )
}
