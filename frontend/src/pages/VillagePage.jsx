import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../styles/VillagePage.css";

function VillagePage() {

  const { code } = useParams();

  const [village, setVillage] = useState(null);

  const [googleMapLink, setGoogleMapLink] = useState("");

  useEffect(() => {

    async function loadVillage() {

      try {

        const modules = import.meta.glob("../data/villages/*.js");

        for (const path in modules) {

          const mod = await modules[path]();

          const found = mod.default.find(
            (v) => v.code === code
          );

          if (found) {

            setVillage(found);

            const res = await fetch(

              `https://haryana-village-portal.onrender.com/villages/get?village=${encodeURIComponent(found.name)}`

            );

            const data = await res.json();

            setGoogleMapLink(
              data.google_map_link || ""
            );

            return;

          }

        }

      }

      catch (err) {

        console.error(err);

      }

    }

    loadVillage();

  }, [code]);

  if (!village) {

    return (

      <div className="village-page">

        <h2>

          Village Not Found

        </h2>

        <Link
          className="back-btn"
          to="/"
        >
          ← Back to Home
        </Link>

      </div>

    );

  }
    return (

    <div className="village-page">

      <Link
        to="/"
        className="back-btn"
      >
        ← Back to Home
      </Link>

      {/* Header */}

      <div className="top-card">

        <h1>

          🏡 {village.name}

        </h1>

        <p className="sub-heading">

          📍 {village.district} • {village.tehsil}

        </p>

      </div>

      <div className="info-grid">

        {/* Village Details */}

        <div className="card">

          <h2>

            Village Details

          </h2>

          <div className="info-row">

            <span>

              District

            </span>

            <strong>

              {village.district}

            </strong>

          </div>

          <div className="info-row">

            <span>

              Tehsil

            </span>

            <strong>

              {village.tehsil}

            </strong>

          </div>

        </div>

        {/* Services */}

        <div className="card">

          <h2>

            Services

          </h2>

          {

            googleMapLink

              ?

              <p className="status-ok">

                🟢 Digital Shajra Available

              </p>

              :

              <p className="status-no">

                🔴 Digital Shajra Not Available

              </p>

          }

          {

            googleMapLink

              ?

              <a

                href={googleMapLink}

                target="_blank"

                rel="noreferrer"

              >

                <button className="action-btn green">

                  🗺 Open Digital Shajra

                </button>

              </a>

              :

              <button
                className="action-btn gray"
                disabled
              >

                Digital Shajra Not Available

              </button>

          }

          <hr />

          <p className="admin-note">

            <strong>

              For any correction or update,

            </strong>

            <br />

            please contact the{" "}

            <a

              href="https://t.me/patwari8120"

              target="_blank"

              rel="noopener noreferrer"

              className="telegram-link"

            >

              Administrator

            </a>

            .

          </p>

        </div>

      </div>

      {/* Disclaimer */}

      <div className="disclaimer-card">

        <h3>

          ⚠️ Disclaimer

        </h3>

        <p>

          The information and Digital Shajra links available on this portal are provided for informational and reference purposes only.
          Users are advised to verify all land records, measurements, boundaries, area, and other details from the concerned Revenue Department before using them for any legal or official purpose.
          The area, boundary lengths, and other measurements displayed on this portal are approximate and may differ from official revenue records.

        </p>

      </div>

    </div>

  );

}

export default VillagePage;