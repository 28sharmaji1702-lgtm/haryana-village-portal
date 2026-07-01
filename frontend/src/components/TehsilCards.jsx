import "../styles/TehsilCards.css";

function TehsilCards({

  tehsils,

  villages,

  selectedDistrict,

  selectedTehsil,

  setSelectedTehsil,

  setSelectedVillage,

  setVisibleCount,

  setSearch

}) {

  const districtTehsils = tehsils.filter(

    (t) => t.districtId === selectedDistrict?.id

  );

  const handleClick = (tehsil) => {

    setSelectedTehsil(tehsil);

    setSelectedVillage(null);

    setVisibleCount(12);

    if (setSearch) {

      setSearch("");

    }

  };

  return (

    <section className="tehsil-section">

      <div className="section-header">

        <h2>

          Tehsils in {selectedDistrict?.name}

        </h2>

      </div>

      <div className="tehsil-grid">

        {districtTehsils.map((tehsil) => {

          const count = villages.filter(

            (v) =>

              v.district === selectedDistrict.name &&

              v.tehsil === tehsil.name

          ).length;

          return (

            <div

              key={tehsil.id}

              className={`tehsil-card ${
                selectedTehsil?.id === tehsil.id
                  ? "active"
                  : ""
              }`}

              onClick={() => handleClick(tehsil)}

            >

              <div>

                <h3>

                  {tehsil.name}

                </h3>

                <p>

                  {count} Villages

                </p>

              </div>

              <span>

                →

              </span>

            </div>

          );

        })}

      </div>

    </section>

  );

}

export default TehsilCards;