// const navigationConfig = [
//   { label: "Dashboard", path: "dashboard" },
//   { label: "Component", path: "component" },
//   { label: "Document", path: "document" },
// ];

// const navigationConfig = [
//   {
//     label: "Dashboard",
//     path: "/dashboard",
//   },
//   {
//     label: "Component",
//     path: "",
//     submenu: [
//       { label: "Component", path: "/component" },
//       { label: "Development", path: "/" },
//     ],
//   },
//   {
//     label: "Inventory Control",
//     path: "/document",
//   },
//   // more items...
// ];

// export default navigationConfig;

const navigationConfig = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Component",
    path: "",
    submenu: [
      {
        label: "Component",
        path: "/component",
      },
      {
        label: "Development",
        path: "/",
        submenu: [
          // Nested submenu inside "Development"
          { label: "API", path: "/development/api" },
          { label: "UI", path: "/development/ui" },
        ],
      },
    ],
  },
  {
    label: "Inventory Control",
    path: "/document",
  },
  // more items...
];

export default navigationConfig;

// const navigationConfig = [
//   {
//     label: "Dashboard",
//     path: "/dashboard",
//   },
//   {
//     label: "Settings",
//     submenu: [
//       { label: "Profile", path: "/settings/profile" },
//       { label: "Account", path: "/settings/account" },
//     ],
//   },
//   // other menu items
// ];

// export default navigationConfig;
