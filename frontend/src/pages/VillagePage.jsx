import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import villages302 from "../data/villages/302";

function VillagePage() {
  const { code } = useParams();

  const village = villages302.find((v) => v.code === code);

  const [link, setLink] = useState("");

  useEffect(() => {
    if (!village) return;

    async function loadLink() {
      console.log("Loading for:", village.name);

      try {
        const response = await fetch(
          `http://localhost:5000/villages/get?village=${encodeURIComponent(
            village.name
          )}`
        );

        console.log("HTTP Status:", response.status);

        const data = await response.json();

        console.log("Response:", data);

        if (data.google_map_link) {
          setLink(data.google_map_link);
        } else {
          setLink("");
        }
      } catch (err) {
        console.error(err);
        setLink("");
      }
    }

    // IMPORTANT: Actually call the function
    loadLink();
  }, [village]);

  if (!village) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Village Not Found</h2>

        <Link to="/">Back</Link>
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

      <h3>Charkhi Dadri • Badhra</h3>

      <br />

      {link ? (
        <a
          href={link}
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
          🗺️ Open {village.name} Shajra
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