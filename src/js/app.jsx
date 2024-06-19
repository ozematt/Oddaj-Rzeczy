import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

//components
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Form from "./components/Form.jsx";
import FormStepTwo from "./components/FormStepTwo.jsx";
import FormStepThree from "./components/FormStepThree.jsx";
import FormStepFour from "./components/FormStepFour.jsx";
import FormSummary from "./components/FormSummary.jsx";
import FormThankYou from "./components/FormThankYou.jsx";

//easy-peasy
import { StoreProvider } from "easy-peasy";
import store from "./api/store.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowano" element={<Logout />} />
          <Route path="/oddaj-rzeczy" element={<Form />} />
          <Route path="oddaj-rzeczy/step-2" element={<FormStepTwo />} />
          <Route path="oddaj-rzeczy/step-3" element={<FormStepThree />} />
          <Route path="oddaj-rzeczy/step-4" element={<FormStepFour />} />
          <Route path="oddaj-rzeczy/summary" element={<FormSummary />} />
          <Route path="oddaj-rzeczy/thankyou" element={<FormThankYou />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
