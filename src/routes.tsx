import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      {/* <FoodProvider> */}
      <Switch>
        <Route path="/" element={<HomePage />} />
      </Switch>
      {/* </FoodProvider> */}
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}
