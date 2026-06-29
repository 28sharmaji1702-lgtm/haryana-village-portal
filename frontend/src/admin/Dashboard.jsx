import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Admin.css";

function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem("adminLoggedIn") !== "true") {

            navigate("/admin", {
                replace: true
            });

            return;

        }

        window.history.pushState(null, "", window.location.href);

        const handlePopState = () => {

            if (localStorage.getItem("adminLoggedIn") !== "true") {

                navigate("/admin", {
                    replace: true
                });

            } else {

                window.history.pushState(null, "", window.location.href);

            }

        };

        window.addEventListener("popstate", handlePopState);

        return () => {

            window.removeEventListener("popstate", handlePopState);

        };

    }, [navigate]);

    function logout() {

        localStorage.removeItem("adminLoggedIn");

        navigate("/admin", {
            replace: true
        });

    }

    return (

        <div className="admin-page">

            <div className="admin-container">

                <div className="admin-topbar">

                    <div className="admin-topbar-left">

                        <button
                            className="back-btn"
                            onClick={() => navigate("/")}
                        >
                            Back
                        </button>

                    </div>

                    <div className="admin-topbar-right">

                        <button
                            className="logout-btn"
                            onClick={logout}
                        >
                            Logout
                        </button>

                    </div>

                </div>

                <h1 className="admin-heading">

                    Admin Dashboard

                </h1>

                <div className="admin-dashboard-card">

                    <h2>

                        🗺️ Manage Village Links

                    </h2>

                    <p>

                        Add, update, open and manage Google My Maps links
                        for Haryana villages from one place.

                    </p>

                    <button
                        className="admin-btn admin-btn-primary dashboard-open-btn"
                        onClick={() => navigate("/admin/village")}
                    >
                        Open Manager
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;