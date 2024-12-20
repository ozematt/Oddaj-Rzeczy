import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { Dashboard } from "./components/Dashboard";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { Form } from "./components/Form";
import { FormStepTwo } from "./components/FormStepTwo";
import { FormStepThree } from "./components/FormStepThree";
import { FormStepFour } from "./components/FormStepFour";
import { FormSummary } from "./components/FormSummary";
import { FormThankYou } from "./components/FormThankYou";

//easy-peasy
import { StoreProvider } from "easy-peasy";
import store from "./store/store";

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

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
