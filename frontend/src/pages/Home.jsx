import { useEffect, useState } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DistrictDropdown from "../components/DistrictDropdown";
import TehsilDropdown from "../components/TehsilDropdown";
import VillageList from "../components/VillageList";

import districts from "../data/districts";
import tehsils from "../data/tehsils";

function Home() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedTehsil, setSelectedTehsil] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const districtId = localStorage.getItem("districtId");
    const tehsilId = localStorage.getItem("tehsilId");
    const searchText = localStorage.getItem("searchText");

    if (districtId) {
      const district = districts.find(
        (d) => String(d.id) === districtId
      );

      if (district) {
        setSelectedDistrict(district);
      }
    }

    if (tehsilId) {
      const tehsil = tehsils.find(
        (t) => String(t.id) === tehsilId
      );

      if (tehsil) {
        setSelectedTehsil(tehsil);
      }
    }

    if (searchText) {
      setSearch(searchText);
    }
  }, []);

  useEffect(() => {
    if (selectedDistrict) {
      localStorage.setItem("districtId", selectedDistrict.id);
    } else {
      localStorage.removeItem("districtId");
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedTehsil) {
      localStorage.setItem("tehsilId", selectedTehsil.id);
    } else {
      localStorage.removeItem("tehsilId");
    }
  }, [selectedTehsil]);

  useEffect(() => {
    localStorage.setItem("searchText", search);
  }, [search]);

  return (
    <>
      <Header />

      <main
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "35px",
            boxShadow: "0 5px 20px rgba(0,0,0,.08)",
          }}
        >
          <h1>Browse Haryana Villages</h1>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "25px",
            }}
          >
            Select District → Tehsil → Village
          </p>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <DistrictDropdown
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            setSelectedTehsil={setSelectedTehsil}
          />

          <TehsilDropdown
            selectedDistrict={selectedDistrict}
            selectedTehsil={selectedTehsil}
            setSelectedTehsil={setSelectedTehsil}
          />

          <VillageList
            selectedTehsil={selectedTehsil}
            search={search}
          />
        </div>
      </main>
    </>
  );
}

export default Home;