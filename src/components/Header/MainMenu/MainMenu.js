import navigationConfig from "data/navigation";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function MainMenu() {
  const navigate = useNavigate();
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);

  const handleMenuClick = (navPath) => {
    setVisibleSubmenu(null);
    if (navPath) {
      setTimeout(() => navigate(navPath), 0);
    }
  };

  return (
    <nav className="navbar">
      <ul className="menu">
        {navigationConfig.map((nav, index) => (
          <li
            className="dropdown"
            key={index}
            onMouseEnter={() => setVisibleSubmenu(index)}
            onMouseLeave={() => setVisibleSubmenu(null)}
          >
            <a
              onClick={() => nav.path && handleMenuClick(nav.path)}
              style={{ cursor: "pointer" }}
            >
              {nav.label}
            </a>
            {nav.submenu && (
              <div
                className="submenu"
                style={{
                  display: visibleSubmenu === index ? "block" : "none",
                }}
              >
                {nav.submenu.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <a
                      onClick={() => handleMenuClick(sub.path)}
                      style={{ cursor: "pointer" }}
                    >
                      {sub.label}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
