import { FaUser } from "react-icons/fa";
import "./primary-btn.css";

function PrimaryBtn() {
  return (
    <>
      <button>
        <FaUser className="icon" />
        <span className="btn-text">Add Device</span>
      </button>
    </>
  );
}

export default PrimaryBtn;
