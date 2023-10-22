import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { Layout } from "./components/Layout";
import ArrecadacaoPage from "./pages/Arrecadacao";
import QueroDoarPage from "./pages/QueroDoar";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" index element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/arrecadacao" element={<ArrecadacaoPage />} />
          <Route path="/quero-doar" element={<QueroDoarPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
