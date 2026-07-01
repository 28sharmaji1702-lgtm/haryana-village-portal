import "../styles/SearchBar.css";

function SearchBar({

    search,

    setSearch

}) {

    const handleSearch = () => {

        document
            .querySelector(".village-section")
            ?.scrollIntoView({

                behavior: "smooth"

            });

    };

    return (

        <section className="search-section">

            <div className="search-card">

                <h2>

                    Search Village

                </h2>

                <p>

                    Search any Haryana revenue village to view its Digital Shajra and village information.

                </p>

                <div className="search-wrapper">

                    <div className="search-box">

                        <span className="search-icon">

                            🔍

                        </span>

                        <input

                            type="text"

                            placeholder="Enter Village Name..."

                            value={search}

                            onChange={(e) =>

                                setSearch(

                                    e.target.value

                                )

                            }

                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    e.preventDefault();

                                    handleSearch();

                                }

                            }}

                        />

                    </div>

                    <button

                        className="search-btn"

                        onClick={handleSearch}

                    >

                        Search

                    </button>

                </div>

            </div>

        </section>

    );

}

export default SearchBar;