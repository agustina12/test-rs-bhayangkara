import "../assets/styles/style.css";
import Foto from "../assets/images/foto_dokter.png";

function heroMain() {
  return (
    <div className="hero-main">
      <div className="item-main">
        <div className="text-main">
          <h1>Humanis dan Prima dalam Pelayanan</h1>
          <button>Daftar Berobat</button>
        </div>
        <div className="image-main">
          <img src={Foto} alt="Foto Dokter" />
        </div>
      </div>
    </div>
  );
}

export default heroMain;
