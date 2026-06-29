import { useState } from "react";
import tehsils from "../data/tehsils";
import "../styles/TehsilDropdown.css";

function TehsilDropdown({
  selectedDistrict,
  selectedTehsil,
  setSelectedTehsil,
}) {
  const [open, setOpen] = useState(false);

  const filteredTehsils = selectedDistrict
    ? tehsils.filter(
        (t) => Number(t.districtId) === Number(selectedDistrict.id)
      )
    : [];

  function handleSelect(tehsil) {
    setSelectedTehsil(tehsil);

    localStorage.setItem("tehsilId", tehsil.id);

    setOpen(false);
  }

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">
        Tehsil
      </label>

      <button
        type="button"
        className="dropdown-button"
        onClick={() => {
          if (selectedDistrict) {
            setOpen(!open);
          }
        }}
      >
        <span>
          {selectedTehsil
            ? selectedTehsil.name
            : selectedDistrict
            ? "Select Tehsil"
            : "Select District First"}
        </span>

        {selectedDistrict && (
          <span className={`arrow ${open ? "rotate" : ""}`}>
            ▼
          </span>
        )}
      </button>

      {open && (
        <div className="dropdown-menu">
          {filteredTehsils.length > 0 ? (
            filteredTehsils.map((tehsil) => (
              <div
                key={tehsil.id}
                className="dropdown-item"
                onClick={() => handleSelect(tehsil)}
              >
                {tehsil.name}
              </div>
            ))
          ) : (
            <div className="dropdown-item">
              No Tehsils Found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TehsilDropdown;