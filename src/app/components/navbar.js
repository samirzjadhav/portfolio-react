export default function Navbar() {
  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="" className="nav-logo">
              Samir Jadhav
            </a>
          </div>
          <div className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item center">
                <a href="#home" className="nav-link active">
                  {" "}
                  Home
                </a>
              </li>
              <li className="nav-item center">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item center">
                <a href="#skills" className="nav-link">
                  {" "}
                  Skills
                </a>
              </li>
              <li className="nav-item center">
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item center">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </>
  );
}
