import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VillagePage from "./pages/VillagePage";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Village from "./admin/Village";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* ===========================
                    Public Routes
                ============================ */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/village/:code"
                    element={<VillagePage />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                {/* ===========================
                    Admin Routes
                ============================ */}

                <Route
                    path="/admin"
                    element={<Login />}
                />

                <Route
                    path="/admin/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/admin/village"
                    element={<Village />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;