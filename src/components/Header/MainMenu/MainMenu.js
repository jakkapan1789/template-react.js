// import navigationConfig from "data/navigation";
// import { useNavigate } from "react-router";
// export default function MainMenu() {
//   const navigate = useNavigate();
//   return (
//     <nav className="navbar">
//       <ul className="menu">
//         {navigationConfig.map((nav, index) => (
//           <li className="dropdown" key={index}>
//             <a
//               key={index}
//               onClick={() => nav.path && navigate(nav.path)}
//               style={{ cursor: "pointer" }}
//             >
//               {nav.label}
//             </a>
//             {nav.submenu && (
//               <div className="submenu">
//                 {nav.submenu.map((sub, index) => (
//                   <div key={index}>
//                     <a
//                       key={index}
//                       onClick={() => navigate(sub.path)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       {sub.label}
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

import navigationConfig from "data/navigation";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function MainMenu() {
  const navigate = useNavigate();
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);

  const handleMenuClick = (navPath) => {
    setVisibleSubmenu(null); // Hide the submenu
    if (navPath) {
      setTimeout(() => navigate(navPath), 0); // Add a delay to allow the submenu to hide smoothly
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
