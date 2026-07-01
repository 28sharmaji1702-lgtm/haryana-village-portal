import { useNavigate } from "react-router-dom";
import "../styles/VillageGrid.css";

function VillageGrid({

  villages,

  selectedDistrict,

  selectedTehsil,

  selectedVillage,

  visibleCount,

  setVisibleCount,

  search

}) {

  const navigate = useNavigate();

  let filtered = villages;

  if (selectedDistrict) {

    filtered = filtered.filter(

      village => village.district === selectedDistrict.name

    );

  }

  if (selectedTehsil) {

    filtered = filtered.filter(

      village => village.tehsil === selectedTehsil.name

    );

  }

  if (selectedVillage) {

    filtered = filtered.filter(

      village => village.code === selectedVillage.code

    );

  }

  if (search.trim()) {

    filtered = filtered.filter(

      village =>

        village.name

          .toLowerCase()

          .includes(

            search.toLowerCase()

          )

    );

  }

  const showing = filtered.slice(0, visibleCount);

  return (

    <section className="village-section">

      <div className="village-header">

        <h2>

          Villages

        </h2>

        <span>

          Showing {showing.length} of {filtered.length}

        </span>

      </div>

      <div className="village-grid">

        {showing.map((village) => (

          <div

            key={village.code}

            className="village-card"

            onClick={() =>

              navigate(`/village/${village.code}`)

            }

          >

            <span>

              {village.name}

            </span>

            <span>

              →

            </span>

          </div>

        ))}

      </div>

      {

        filtered.length > visibleCount && (

          <div className="load-more">

            <button

              onClick={() =>

                setVisibleCount(

                  visibleCount + 12

                )

              }

            >

              More Villages

              <span>▼</span>

            </button>

          </div>

        )

      }

    </section>

  );

}

export default VillageGrid;