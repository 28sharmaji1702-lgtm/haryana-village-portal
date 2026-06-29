import Header from "../components/Header";

function Contact() {
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
        }}
      >
        <h1 style={{ color: "#0f766e" }}>
          Contact Us
        </h1>

        <p>
          If you have any suggestions, found an issue, or want to contact us,
          feel free to connect through the platforms below.
        </p>

        <br />

        <h3>Telegram</h3>

        <a
          href="https://t.me/patwari8120"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0f766e",
            fontSize: "18px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          @patwari8120
        </a>

        <br />
        <br />

        <h3>Instagram</h3>

        <a
          href="https://instagram.com/vishnu__patwari"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0f766e",
            fontSize: "18px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          @vishnu__patwari
        </a>

        <br />
        <br />

        <p>
          Your valuable feedback and suggestions help us improve the Haryana
          Village Digital Shajra Portal.
        </p>
      </div>
    </>
  );
}

export default Contact;