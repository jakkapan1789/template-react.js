// import navigationConfig from "data/navigation";
// import { useNavigate } from "react-router";
// import { useState } from "react";

// export default function MainMenu() {
//   const navigate = useNavigate();
//   const [visibleSubmenu, setVisibleSubmenu] = useState(null);

//   const handleMenuClick = (navPath) => {
//     setVisibleSubmenu(null);
//     if (navPath) {
//       setTimeout(() => navigate(navPath), 0);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <ul className="menu">
//         {navigationConfig.map((nav, index) => (
//           <li
//             className="dropdown"
//             key={index}
//             onMouseEnter={() => setVisibleSubmenu(index)}
//             onMouseLeave={() => setVisibleSubmenu(null)}
//           >
//             <a
//               onClick={() => nav.path && handleMenuClick(nav.path)}
//               style={{ cursor: "pointer" }}
//             >
//               {nav.label}
//             </a>
//             {nav.submenu && (
//               <div
//                 className="submenu"
//                 style={{
//                   display: visibleSubmenu === index ? "block" : "none",
//                 }}
//               >
//                 {nav.submenu.map((sub, subIndex) => (
//                   <div key={subIndex}>
//                     <a
//                       onClick={() => handleMenuClick(sub.path)}
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
  const [visibleSubSubmenu, setVisibleSubSubmenu] = useState(null);

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
                  <div
                    key={subIndex}
                    className="dropdown"
                    onMouseEnter={() => setVisibleSubSubmenu(subIndex)}
                    onMouseLeave={() => setVisibleSubSubmenu(null)}
                  >
                    <a
                      onClick={() => sub.path && handleMenuClick(sub.path)}
                      style={{ cursor: "pointer" }}
                    >
                      {sub.label}
                    </a>
                    {sub.submenu && (
                      <div
                        className="subsubmenu"
                        style={{
                          display:
                            visibleSubSubmenu === subIndex ? "block" : "none",
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

// import React, { useState } from "react";

// const MainMenu = () => {
//   const [htmlCssSubMenuOpen, setHtmlCssSubMenuOpen] = useState(false);
//   const [moreSubMenuOpen, setMoreSubMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <ul className="links">
//         <li
//           onMouseEnter={() => setHtmlCssSubMenuOpen(true)}
//           onMouseLeave={() => setHtmlCssSubMenuOpen(false)}
//         >
//           <a href="#">HTML & CSS</a>
//           <i
//             className={`bx bxs-chevron-down arrow ${
//               htmlCssSubMenuOpen ? "rotate" : ""
//             }`}
//           />
//           {htmlCssSubMenuOpen && (
//             <ul className="htmlCss-sub-menu sub-menu">
//               <li>
//                 <a href="#">Web Design</a>
//               </li>
//               <li>
//                 <a href="#">Login Forms</a>
//               </li>
//               <li>
//                 <a href="#">Card Design</a>
//               </li>
//               <li
//                 className="more"
//                 onMouseEnter={() => setMoreSubMenuOpen(true)}
//                 onMouseLeave={() => setMoreSubMenuOpen(false)}
//               >
//                 <span>
//                   <a href="#">More</a>
//                   <i
//                     className={`bx bxs-chevron-right arrow ${
//                       moreSubMenuOpen ? "rotate" : ""
//                     }`}
//                   />
//                 </span>
//                 {moreSubMenuOpen && (
//                   <ul className="more-sub-menu sub-menu">
//                     <li>
//                       <a href="#">Neumorphism</a>
//                     </li>
//                     <li>
//                       <a href="#">Pre-loader</a>
//                     </li>
//                     <li>
//                       <a href="#">Glassmorphism</a>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <a href="#">JAVASCRIPT</a>
//         </li>
//         <li>
//           <a href="#">ABOUT US</a>
//         </li>
//         <li>
//           <a href="#">CONTACT US</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default MainMenu;
