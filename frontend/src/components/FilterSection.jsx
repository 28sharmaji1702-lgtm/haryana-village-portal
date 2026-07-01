import "../styles/FilterSection.css";

function FilterSection({
  districts,
  tehsils,
  villages,

  selectedDistrict,
  selectedTehsil,
  selectedVillage,

  setSelectedDistrict,
  setSelectedTehsil,
  setSelectedVillage,

  openVillage,
}) {
  const filteredTehsils = tehsils.filter(
    (t) => t.districtId === selectedDistrict?.id
  );

  const filteredVillages = villages.filter(
    (v) => !selectedTehsil || v.tehsil === selectedTehsil.name
  );

  return (
    <section className="filter-card">

      <h2>Browse Villages</h2>

      <div className="filter-grid">

        {/* District */}

        <div className="field">

          <label>District</label>

          <select
            value={selectedDistrict?.id || ""}
            onChange={(e) => {

              const district = districts.find(
                (d) => String(d.id) === e.target.value
              );

              setSelectedDistrict(district);
              setSelectedTehsil(null);
              setSelectedVillage(null);

            }}
          >

            {districts.map((district) => (

              <option
                key={district.id}
                value={district.id}
              >
                {district.name}
              </option>

            ))}

          </select>

        </div>

        {/* Tehsil */}

        <div className="field">

          <label>Tehsil</label>

          <select
            value={selectedTehsil?.id || ""}
            onChange={(e) => {

              const tehsil = filteredTehsils.find(
                (t) => String(t.id) === e.target.value
              );

              setSelectedTehsil(tehsil);
              setSelectedVillage(null);

            }}
          >

            <option value="">
              Select Tehsil
            </option>

            {filteredTehsils.map((tehsil) => (

              <option
                key={tehsil.id}
                value={tehsil.id}
              >
                {tehsil.name}
              </option>

            ))}

          </select>

        </div>

        {/* Village */}

        <div className="field">

          <label>Village</label>

          <select
            value={selectedVillage?.code || ""}
            onChange={(e) => {

              const village = filteredVillages.find(
                (v) => v.code === e.target.value
              );

              setSelectedVillage(village);

            }}
          >

            <option value="">
              Select Village
            </option>

            {filteredVillages.map((village) => (

              <option
                key={village.code}
                value={village.code}
              >
                {village.name}
              </option>

            ))}

          </select>

        </div>

        {/* Button */}

        <button
          className="view-btn"
          disabled={!selectedVillage}
          onClick={openVillage}
        >
          View Village →
        </button>

      </div>

    </section>
  );
}

export default FilterSection;