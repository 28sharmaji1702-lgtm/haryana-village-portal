import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/VillageList.css";

function VillageList({ selectedTehsil, search }) {
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    if (!selectedTehsil) {
      setVillages([]);
      return;
    }

    async function loadVillages() {
      try {
        const module = await import(
          `../data/villages/${selectedTehsil.id}.js`
        );

        setVillages(module.default);
      } catch (err) {
        console.error(err);
        setVillages([]);
      }
    }

    loadVillages();
  }, [selectedTehsil]);

  const filteredVillages = villages.filter((village) =>
    village.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="village-section">
      <label className="village-title">
        Villages{" "}
        {filteredVillages.length > 0 &&
          `(${filteredVillages.length})`}
      </label>

      <div className="village-card">
        {!selectedTehsil ? (
          <p className="empty-message">
            Select a district and tehsil to view villages.
          </p>
        ) : filteredVillages.length === 0 ? (
          <p className="empty-message">
            No villages found.
          </p>
        ) : (
          <div className="villages-grid">
            {filteredVillages.map((village) => (
              <Link
                key={village.code}
                to={`/village/${village.code}`}
                className="village-item"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span>{village.name}</span>

                <span>➜</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VillageList;