import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Form from "./components/Form.jsx";
import FormStepOne from "./components/FormStepOne.jsx";
import FormStepTwo from "./components/FormStepTwo.jsx";
import FormStepThree from "./components/FormStepThree.jsx";

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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
