import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={handleLinkClick}
        >
          HASNI<span> ZAKEE.</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav
          id="main-navigation"
          className={menuOpen ? "nav-links active" : "nav-links"}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;