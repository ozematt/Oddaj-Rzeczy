import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard.jsx";
import Register from "./components/Register.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
