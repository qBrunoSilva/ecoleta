import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import { Layout } from "./components/Layout";
import CatalogoPage from "./pages/Catalogo";
import QueroDoarPage from "./pages/QueroDoar";
import CadastroPage from "./pages/Cadastro";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" index element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/meus-anuncios" element={<ProductsPage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          {/* aa */}
          <Route path="/comprar" element={<QueroDoarPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
