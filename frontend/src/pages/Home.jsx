import { useEffect, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FilterSection from "../components/FilterSection";
import SearchBar from "../components/SearchBar";
import TehsilCards from "../components/TehsilCards";
import VillageGrid from "../components/VillageGrid";

import "../styles/Home.css";

import districts from "../data/districts";
import tehsils from "../data/tehsils";

import village301 from "../data/villages/301";
import village302 from "../data/villages/302";
import village303 from "../data/villages/303";

function Home() {

    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const [selectedTehsil, setSelectedTehsil] = useState(null);

    const [selectedVillage, setSelectedVillage] = useState(null);

    const [search, setSearch] = useState("");

    const [visibleCount, setVisibleCount] = useState(12);

    const villages = [

        ...village301,

        ...village302,

        ...village303

    ];

    useEffect(() => {

        const district = districts.find(

            d => d.name === "Charkhi Dadri"

        );

        setSelectedDistrict(district);

    }, []);

    useEffect(() => {

        setVisibleCount(12);

    }, [selectedTehsil, search]);

    const openVillage = () => {

        if (selectedVillage) {

            window.location.href = `/village/${selectedVillage.code}`;

        }

    };

    return (

        <>

            <Header />

            <Hero />

            <main className="home-container">

                <FilterSection

                    districts={districts}

                    tehsils={tehsils}

                    villages={
                        selectedTehsil
                            ? villages.filter(
                                village =>
                                    village.tehsil === selectedTehsil.name
                            )
                            : villages
                    }

                    selectedDistrict={selectedDistrict}

                    selectedTehsil={selectedTehsil}

                    selectedVillage={selectedVillage}

                    setSelectedDistrict={setSelectedDistrict}

                    setSelectedTehsil={setSelectedTehsil}

                    setSelectedVillage={setSelectedVillage}

                    openVillage={openVillage}

                />

                <SearchBar

                    search={search}

                    setSearch={setSearch}

                />
                                <TehsilCards

                    tehsils={tehsils}

                    villages={villages}

                    selectedDistrict={selectedDistrict}

                    selectedTehsil={selectedTehsil}

                    setSelectedTehsil={setSelectedTehsil}

                    setSelectedVillage={setSelectedVillage}

                    setVisibleCount={setVisibleCount}

                    setSearch={setSearch}

                />

                <VillageGrid

                    villages={villages}

                    selectedTehsil={selectedTehsil}

                    visibleCount={visibleCount}

                    setVisibleCount={setVisibleCount}

                    search={search}

                />

            </main>

            <Footer />

        </>

    );

}

export default Home;