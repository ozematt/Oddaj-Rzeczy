import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);