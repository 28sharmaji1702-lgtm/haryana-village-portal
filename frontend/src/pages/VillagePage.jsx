import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function VillagePage() {
  const { code } = useParams();

  const [village, setVillage] = useState(null);
  const [googleMapLink, setGoogleMapLink] = useState("");

  useEffect(() => {
    async function loadVillage() {
      try {
        // Local village data
        const modules = import.meta.glob("../data/villages/*.js");

        for (const path in modules) {
          const mod = await modules[path]();
          const found = mod.default.find((v) => v.code === code);

          if (found) {
            setVillage(found);

            // Load saved link from backend
            const res = await fetch(
              `https://haryana-village-portal.onrender.com/villages/get?village=${encodeURIComponent(
                found.name
              )}`
            );

            const data = await res.json();

            setGoogleMapLink(data.google_map_link || "");

            return;
          }
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadVillage();
  }, [code]);

  if (!village) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Village Not Found</h2>
        <Link to="/">← Back</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "20px",
      }}
    >
      <h1>{village.name}</h1>

      <h3>
        {village.district} • {village.tehsil}
      </h3>

      <br />

      {googleMapLink ? (
        <a
          href={googleMapLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#0f766e",
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          🗺 Open {village.name} Shajra
        </a>
      ) : (
        <button disabled>Coming Soon</button>
      )}

      <br />
      <br />

      <Link to="/">← Back</Link>
    </div>
  );
}

export default VillagePage;