import { EcommerceProvider } from "./context/"
import { AppRouter } from "./router/AppRouter";

export const EcommerceApp = () => {
  return (
    <EcommerceProvider>
        <AppRouter />
    </EcommerceProvider>
  )
}
