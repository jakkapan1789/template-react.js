import navigationConfig from "data/navigation";
import { useNavigate } from "react-router";
import { useState, useRef } from "react";

export default function MainMenuOld() {
  const navigate = useNavigate();
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);
  const [visibleSubSubmenu, setVisibleSubSubmenu] = useState(null);
  const submenuRefs = useRef({});

  const handleMenuClick = (navPath) => {
    setVisibleSubmenu(null);
    setVisibleSubSubmenu(null);
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
            onMouseLeave={() => {
              setVisibleSubmenu(null);
              setVisibleSubSubmenu(null);
            }}
          >
            <a
              onClick={() => nav.path && handleMenuClick(nav.path)}
              style={{ cursor: "pointer" }}
            >
              {nav.label}
              {nav.submenu && (
                <i
                  className={`arrow ${
                    visibleSubmenu === index ? "down" : "up"
                  }`}
                ></i>
              )}
            </a>

            {nav.submenu && (
              <div
                className="submenu"
                style={{
                  display: visibleSubmenu === index ? "block" : "none",
                }}
              >
                {nav.submenu.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className="dropdown"
                    ref={(el) => {
                      submenuRefs.current[`${index}-${subIndex}`] = el;
                    }}
                    onMouseEnter={() => setVisibleSubSubmenu(subIndex)}
                    onMouseLeave={() => setVisibleSubSubmenu(null)}
                  >
                    <a
                      onClick={() => sub.path && handleMenuClick(sub.path)}
                      style={{ cursor: "pointer" }}
                    >
                      {sub.label}
                      {sub.submenu && (
                        <i
                          className={`arrow ${
                            visibleSubSubmenu === subIndex ? "right" : "down"
                          }`}
                        ></i>
                      )}
                    </a>
                    {sub.submenu && (
                      <div
                        className="subsubmenu"
                        style={{
                          display:
                            visibleSubSubmenu === subIndex ? "block" : "none",
                          top:
                            submenuRefs.current[`${index}-${subIndex}`]
                              ?.offsetTop || 0,
                        }}
                      >
                        {sub.submenu.map((subSub, subSubIndex) => (
                          <div key={subSubIndex}>
                            <a
                              onClick={() => handleMenuClick(subSub.path)}
                              style={{ cursor: "pointer" }}
                            >
                              {subSub.label}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
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
