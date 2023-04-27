import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { MartketPlace } from "../pages/MartketPlacePage"
import { MarketProductPage } from "../pages/MarketProductPage"
import { MarketCartPage } from "../pages/MarketCartPage"

export const EcommerceRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route 
              path="/" 
              element={ <MartketPlace /> }
            />
            <Route
              path="/cart"
              element={ <MarketCartPage /> }
            />
            <Route 
              path="/products/:productId" 
              element={ <MarketProductPage /> }
            />
        </Routes>
    </>
  )
}
