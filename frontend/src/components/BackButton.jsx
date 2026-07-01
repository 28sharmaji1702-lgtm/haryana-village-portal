import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css";

function BackButton() {

  const navigate = useNavigate();

  const handleBack = () => {

    if (window.history.length > 1) {

      navigate(-1);

    } else {

      navigate("/");

    }

  };

  return (

    <div className="back-btn-container">

      <button
        type="button"
        className="back-btn"
        onClick={handleBack}
      >

        <span className="back-icon">
          ←
        </span>

        <span>
          Back
        </span>

      </button>

    </div>

  );

}

export default BackButton;