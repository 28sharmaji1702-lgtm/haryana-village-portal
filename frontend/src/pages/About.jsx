import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />

      <div
        style={{
          maxWidth: "900px",
          margin: "50px auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 5px 20px rgba(0,0,0,.08)",
          lineHeight: "1.8",
        }}
      >
        <h1 style={{ color: "#0f766e" }}>
          About Haryana Village Portal
        </h1>

        <p>
          Haryana Village Portal is a digital platform developed to provide
          quick and easy access to village-wise Digital Shajra Maps across
          Haryana.
        </p>

        <p>
          The objective of this portal is to make Digital Shajra maps
          available from a single platform so that users can quickly find
          and open the required village Shajra without searching through
          multiple sources.
        </p>

        <p>
          Whether you are a landowner, student, surveyor, advocate,
          government employee or simply looking for a village Shajra,
          this portal offers a fast, simple and convenient experience.
        </p>

        <h3 style={{ color: "#0f766e" }}>
          Available Feature
        </h3>

        <ul>
          <li>✔ Village-wise Digital Shajra Maps</li>
        </ul>

        <p>
          Our goal is to make Digital Shajra maps easily accessible for
          every village of Haryana through one simple and user-friendly
          platform.
        </p>
      </div>
    </>
  );
}

export default About;