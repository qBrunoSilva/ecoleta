import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { FoodLayout } from "./components/Layout";
import GodFather from "./pages/GodFather";
import DemandsPage from "./pages/Demand";
import ArrecadacaoPage from "./pages/Arrecadacao";
import QueroDoarPage from "./pages/QueroDoar";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" index element={<HomePage />} />
        <Route element={<FoodLayout />}>
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/padrinhos" element={<GodFather />} />
          <Route path="/demandas-semana" element={<DemandsPage />} />
          <Route path="/arrecadacao" element={<ArrecadacaoPage />} />
          <Route path="/quero-doar" element={<QueroDoarPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
