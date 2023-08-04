import "../assets/styles/style.css";
import Logo from "../assets/images/logo.png";
function Nav() {
  return (
    <div className="nav-main">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <a href="#">RS. BHAYANGKARA KENDARI</a>
      </div>
      <div className="menu">
        <ul>
          <li>Beranda</li>
          <li>Tentang</li>
          <li>Jadwal Dokter</li>
          <li>Informasi Kamar</li>
        </ul>
        <button>Daftar</button>
      </div>
    </div>
  );
}
export default Nav;
