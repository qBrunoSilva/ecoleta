import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { FoodLayout } from "./components/Layout";
import GodFather from "./pages/GodFather";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<FoodLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/padrinhos" element={<GodFather />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
