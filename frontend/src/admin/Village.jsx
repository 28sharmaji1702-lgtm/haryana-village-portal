import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import districts from "../data/districts";
import tehsils from "../data/tehsils";

import "../styles/admin.css";

function Village() {

    const navigate = useNavigate();

    const [district, setDistrict] = useState("");
    const [tehsil, setTehsil] = useState("");
    const [village, setVillage] = useState("");

    const [villages, setVillages] = useState([]);

    const [link, setLink] = useState("");

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

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

    const filteredTehsils = tehsils.filter(

        (t) => t.districtId === Number(district)

    );

    useEffect(() => {

        async function loadVillages() {

            if (!tehsil) {

                setVillages([]);
                setVillage("");
                setLink("");
                setMessage("");
                setError("");

                return;

            }

            setLoading(true);

            try {

                const module = await import(
                    `../data/villages/${tehsil}.js`
                );

                setVillages(module.default);

            }

            catch {

                setVillages([]);

            }

            setVillage("");
            setLink("");
            setMessage("");
            setError("");

            setLoading(false);

        }

        loadVillages();

    }, [tehsil]);

    useEffect(() => {

        if (!village) return;

        loadLink();

    }, [village]);

    async function loadLink() {

        try {

            const response = await fetch(

                `https://haryana-village-portal.onrender.com/villages/get?village=${encodeURIComponent(village)}`

            );

            const data = await response.json();

            setLink(data.google_map_link || "");

        }

        catch {

            setLink("");

        }

    }

    async function save() {

        if (!district || !tehsil || !village || !link) {

            setError("Please fill all fields.");
            setMessage("");

            return;

        }

        setLoading(true);

        setMessage("");
        setError("");

        try {

            const districtName =
                districts.find(
                    (d) => d.id === Number(district)
                ).name;

            const tehsilName =
                tehsils.find(
                    (t) => t.id === Number(tehsil)
                ).name;

            const response = await fetch(

                "https://haryana-village-portal.onrender.com/villages/save",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        district: districtName,

                        tehsil: tehsilName,

                        village,

                        link

                    })

                }

            );

            const data = await response.json();

            if (data.success) {

                setMessage(data.message);

            }

            else {

                setError(data.message);

            }

        }

        catch {

            setError("Server Error");

        }

        setLoading(false);

    }

    async function copyLink() {

        if (!link) return;

        await navigator.clipboard.writeText(link);

        setMessage("Copied Successfully");

        setError("");

    }

    function clearLink() {

        setLink("");

        setMessage("");

        setError("");

    }

    function openLink() {

        if (!link) return;

        window.open(
            link,
            "_blank",
            "noopener,noreferrer"
        );

    }

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

                    <button
                        className="back-btn"
                        onClick={() => navigate("/admin/dashboard")}
                    >
                        Back
                    </button>

                    <button
                        className="logout-btn"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

                <div className="admin-panel">

                    <h2>

                        🗺️ Manage Village Links

                    </h2>

                    <div className="admin-fields">

                        <div className="form-group">

                            <label>District</label>

                            <select
                                value={district}
                                onChange={(e) => {

                                    setDistrict(e.target.value);

                                    setTehsil("");
                                    setVillage("");
                                    setVillages([]);
                                    setLink("");
                                    setMessage("");
                                    setError("");

                                }}
                            >

                                <option value="">

                                    Select District

                                </option>

                                {districts.map((d) => (

                                    <option
                                        key={d.id}
                                        value={d.id}
                                    >

                                        {d.name}

                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="form-group">

                            <label>Tehsil</label>

                            <select
                                value={tehsil}
                                disabled={!district}
                                onChange={(e) =>
                                    setTehsil(e.target.value)
                                }
                            >

                                <option value="">

                                    Select Tehsil

                                </option>

                                {filteredTehsils.map((t) => (

                                    <option
                                        key={t.id}
                                        value={t.id}
                                    >

                                        {t.name}

                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="form-group">

                            <label>Village</label>

                            <select
                                value={village}
                                disabled={!tehsil}
                                onChange={(e) =>
                                    setVillage(e.target.value)
                                }
                            >

                                <option value="">

                                    Select Village

                                </option>

                                {villages.map((v) => (

                                    <option
                                        key={v.code}
                                        value={v.name}
                                    >

                                        {v.name}

                                    </option>

                                ))}

                            </select>

                        </div>

                    </div>

                    <div className="form-group">

                        <label>

                            Google My Maps Link

                        </label>

                        <textarea
                            value={link}
                            rows="8"
                            spellCheck={false}
                            placeholder="Paste Google My Maps Link..."
                            onChange={(e) =>
                                setLink(e.target.value)
                            }
                        />

                    </div>

                    {message && (

                        <div className="admin-status success">

                            {message}

                        </div>

                    )}

                    {error && (

                        <div className="admin-status error">

                            {error}

                        </div>

                    )}

                    <div className="admin-actions">

                        <button
                            className="admin-btn admin-btn-primary"
                            onClick={save}
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>

                        <button
                            className="admin-btn admin-btn-secondary"
                            onClick={openLink}
                            disabled={!link}
                        >
                            Open
                        </button>

                        <button
                            className="admin-btn admin-btn-outline"
                            onClick={copyLink}
                            disabled={!link}
                        >
                            Copy
                        </button>

                        <button
                            className="admin-btn admin-btn-danger"
                            onClick={clearLink}
                        >
                            Clear
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Village;