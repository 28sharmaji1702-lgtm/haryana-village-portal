import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/admin.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {

        if (localStorage.getItem("adminLoggedIn") === "true") {

            navigate("/admin/dashboard", {
                replace: true
            });

        }

    }, [navigate]);

    function handleLogin(e) {

        e.preventDefault();

        setError("");

        if (
            username === "admin" &&
            password === "admin123"
        ) {

            localStorage.setItem(
                "adminLoggedIn",
                "true"
            );

            navigate(
                "/admin/dashboard",
                {
                    replace: true
                }
            );

            return;

        }

        setError("Invalid Username or Password");

    }

    return (

        <div className="admin-page">

            <div className="admin-login-card">

                <div className="admin-logo">
                    🌿
                </div>

                <h1 className="admin-title">
                    Haryana Village Portal
                </h1>

                <p className="admin-subtitle">
                    Administrator Login
                </p>

                <form
                    className="admin-form"
                    onSubmit={handleLogin}
                >

                    <div className="form-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) =>
                                setUsername(
                                    e.target.value
                                )
                            }
                            autoComplete="username"
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            autoComplete="current-password"
                            required
                        />

                    </div>

                    {error && (

                        <div className="admin-status error">

                            {error}

                        </div>

                    )}

                    <button
                        type="submit"
                        className="admin-btn admin-btn-primary"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;