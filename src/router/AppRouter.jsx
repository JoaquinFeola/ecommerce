import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { EcommerceRoutes } from "../ecommerce/routes/EcommerceRoutes"
import { FinishPurchasePage } from "../ecommerce/pages/FinishPurchasePage"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route path="/*" element={ <EcommerceRoutes /> }/>
        <Route path="/finalizePurchase" element={ <FinishPurchasePage/> }/>
    </Routes>
  )
}
