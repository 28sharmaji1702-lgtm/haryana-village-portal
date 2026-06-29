import { useState } from "react";
import districts from "../data/districts";
import "../styles/DistrictDropdown.css";

function DistrictDropdown({
  selectedDistrict,
  setSelectedDistrict,
  setSelectedTehsil,
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (district) => {
    setSelectedDistrict(district);
    setSelectedTehsil(null);

    localStorage.setItem("districtId", district.id);
    localStorage.removeItem("tehsilId");

    setOpen(false);
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">
        District
      </label>

      <button
        className="dropdown-button"
        onClick={() => setOpen(!open)}
      >
        <span>
          {selectedDistrict ? selectedDistrict.name : "Select District"}
        </span>

        <span className={`arrow ${open ? "rotate" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <div className="dropdown-menu">
          {districts.map((district) => (
            <div
              key={district.id}
              className="dropdown-item"
              onClick={() => handleSelect(district)}
            >
              {district.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DistrictDropdown;