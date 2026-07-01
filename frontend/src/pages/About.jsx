import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {

    return (

        <>

            <Header />

            <section className="about-hero">

                <div className="about-overlay">

                    <h1>

                        About Haryana Village
                        <br />
                        Digital Shajra

                    </h1>

                    <p>

                        A simple platform to access Digital Shajra Maps
                        and village information across Haryana.

                    </p>

                </div>

            </section>

            <main className="about-container">

                <div className="about-card">

                    <h2>

                        About the Portal

                    </h2>

                    <p>

                        Haryana Village Digital Shajra is a simple and user-friendly
                        platform developed to help users quickly access village-wise
                        Digital Shajra Maps across Haryana from a single place.

                    </p>

                    <p>

                        The portal allows users to browse districts, tehsils and
                        villages without navigating multiple websites, making the
                        process faster and more convenient.

                    </p>

                    <h3>

                        Features

                    </h3>

                    <ul>

                        <li>Village-wise Digital Shajra Maps</li>

                        <li>District & Tehsil Based Browsing</li>

                        <li>Quick Village Search</li>

                        <li>Mobile Friendly Interface</li>

                        <li>Simple & Easy Navigation</li>

                    </ul>

                    <h3>

                        Disclaimer

                    </h3>

                    <p>

                        This website is created only for educational,
                        informational and public convenience purposes.
                        The information provided should not be treated as
                        an official land record. Users are advised to verify
                        all records from the concerned Government Department
                        before taking any legal or official action.

                    </p>

                    <h3>

                        Developed For

                    </h3>

                    <p>

                        Haryana Village Digital Shajra aims to provide a
                        fast, clean and convenient way to access Digital
                        Shajra Maps for villages across Haryana.

                    </p>

                </div>

            </main>

            <Footer />

        </>

    );

}

export default About;